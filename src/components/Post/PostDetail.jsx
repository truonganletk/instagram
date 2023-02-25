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
import { Icon } from "../../asset/icons";

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
      <div className="flex w-[1080px] h-[625px] bg-white dark:bg-black dark:text-white">
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
                {Icon("more")}
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
                {like ? Icon("heart_filled") : Icon("heart")}
              </div>
              <div>{Icon("comment")}</div>

              {Icon("direct")}
            </div>
            {Icon("save")}
          </div>
          {/* like */}
          {numberOfLike > 0 && (
            <p className="px-4 py-3 text-sm font-bold">
              {numberOfLike} like{numberOfLike > 1 && "s"}
            </p>
          )}
          {/* write comment */}
          <div className="flex items-center px-4 py-3 justify-between border-t-[0.875px] w-full">
            {Icon("emoji")}

            <input
              value={comment}
              className="flex-1 border-none focus:outline-none dark:bg-ig-primary-text dark:text-white"
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
