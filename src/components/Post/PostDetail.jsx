import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/authContext/AuthContext";
import MoreOptions from "../MoreOptions/MoreOptions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { showModal } from "../../context/modalContext/ModalActions";
import { getPostDetail } from "../../context/postContext/PostActions";
import { PostContext } from "../../context/postContext/PostContext";
import {
  handleCommentPost,
  handleLikePost,
  handleReply,
} from "../../context/postContext/Services";
import UserComment from "../UserComment/UserComment";
import {
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "../../firebase-config";

function PostDetail({ ...props }) {
  const { post } = props;
  const { users, dispatch, user } = useContext(AuthContext);
  const { dispatch: modalDispatch } = useContext(ModalContext);
  const { dispatch: postDispatch } = useContext(PostContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const userCreated = users.find((user) => user.id === post.post_created_by);
  const [like, setLike] = useState(false);

  const [numberOfLike, setNumberOfLike] = useState([]);
  useEffect(
    () =>
      onSnapshot(doc(firestore, "posts", post.id), (doc) => {
        setNumberOfLike(doc.data().like?.length);
        post.like = doc.data().like;
        setLike(doc.data().like.filter((i) => i.id === user.id).length > 0);
      }),

    [firestore]
  );
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(firestore, "posts", post.id, "comment"),
          orderBy("createdAt", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [firestore]
  );

  const [replyTo, setReplyTo] = useState({ username: "", cmtID: "" });
  const handleReplyTo = (username, cmtID) => {
    const mod_username = `@${username} `;
    setReplyTo({ username: mod_username, cmtID });
    setComment(mod_username);
  };

  const handleComment = () => {
    if (comment.startsWith("@")) {
      handleReply(dispatch, post.id, replyTo.cmtID, replyTo.username, comment);
    } else handleCommentPost(dispatch, post.id, comment);
    setComment("");
  };
  return (
    <>
      <div className="flex w-[1080px] h-[625px] bg-white">
        {/* image section */}
        <div className="w-[55%]">
          <img className="h-full" src={post.img} alt="" />
        </div>

        {/* detail section */}
        <div className="flex flex-col flex-1 items-start">
          {/* header */}
          <div className="w-full border-b-[0.875px] border-ig-elevated-separator px-4 py-3">
            <div className="flex items-center w-full">
              <img
                className="rounded-full h-8 w-8 object-contain border mr-3"
                src={`${userCreated?.avatar}`}
                alt=""
              />
              <p className="flex-1 text-sm font-bold mr-2">
                {userCreated?.username}
              </p>
              <div
                onClick={() => {
                  modalDispatch(showModal(<MoreOptions />, ""));
                  postDispatch(getPostDetail(post));
                }}
                className="cursor-pointer ml-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* caption & comment */}
          <div className="px-4 py-3 h-[535px] overflow-y-scroll scrollbar-hide">
            {/* caption */}
            <UserComment
              isAuthor={true}
              text={post.post_content}
              avatar={userCreated?.avatar}
              user={userCreated?.username}
              createdAt={post.post_created_date}
            />

            {/* comment list */}

            {comments?.length > 0 &&
              comments.map((cmt) => {
                return (
                  <UserComment
                    key={cmt.id}
                    id={cmt.id}
                    postID={post.id}
                    text={cmt.data().text}
                    avatar={cmt.data().avatar}
                    user={cmt.data().user}
                    createdAt={cmt.data().createdAt}
                    handleReplyTo={handleReplyTo}
                  />
                );
              })}
          </div>
          {/* reaction */}
          <div className="flex justify-between w-full px-4 py-3 mt-auto border-t-[0.875px]">
            <div className="flex space-x-3">
              <div
                onClick={() => {
                  handleLikePost(dispatch, post.id);
                  setLike(!like);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={like ? "red" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 hover:opacity-30 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 hover:opacity-30 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 hover:opacity-30 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 hover:opacity-30 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
          {/* like */}
          {numberOfLike > 0 && (
            <p className="px-4 py-3 text-sm font-bold">
              {numberOfLike} like{numberOfLike > 1 && "s"}
            </p>
          )}
          {/* write comment */}
          <div className="flex items-center px-4 py-3 justify-between border-t-[0.875px] w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>

            <input
              // ref={inputRef}
              value={comment}
              className="flex-1 border-none focus:outline-none"
              type="text"
              placeholder="Add a comment ..."
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button
              onClick={handleComment}
              className="text-ig-primary-button font-bold"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
};

export default PostDetail;
