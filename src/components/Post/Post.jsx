import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getAllUsers } from "../../context/authContext/services";
import { Link } from "react-router-dom";
import moment from "moment";
import MoreOptions from "../MoreOptions/MoreOptions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { showModal } from "../../context/modalContext/modalActions";
import { getPostDetail } from "../../context/postContext/postActions";
import { PostContext } from "../../context/postContext/PostContext";
import {
  handleCommentPost,
  handleLikePost,
} from "../../context/postContext/services";
import PostDetail from "./PostDetail";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { getIndexOfWhitespace } from "../../utils";
import { Icon } from "../../asset/icons";

function Post({ ...props }) {
  const { users, dispatch, user } = useContext(AuthContext);
  const { post } = props;
  const userCreated = users.find((user) => user.id === post.post_created_by);
  const { dispatch: modalDispatch } = useContext(ModalContext);
  const { dispatch: postDispatch } = useContext(PostContext);
  const [seeMore, setSeeMore] = useState(
    getIndexOfWhitespace(post.post_content, 5) < post.post_content.length
  );

  const inputRef = useRef();
  const handleComment = () => {
    if (inputRef.current.value.length > 0) {
      const text = inputRef.current.value;
      handleCommentPost(dispatch, post.id, text);
      inputRef.current.value = "";
    }
  };

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
  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white dark:border-ig-dark-elevated-separator  mb-7 border rounded-lg">
        {/* header section */}
        <div className="flex px-5 py-3 items-center justify-between">
          <Link className="flex items-center " to={`/${userCreated?.username}`}>
            <img
              loading="lazy"
              className="rounded-full h-10 w-10 object-contain border mr-3"
              src={`${userCreated?.avatar}`}
              alt=""
            />
            <p className="flex-1 font-bold">{userCreated?.username}</p>

            <p className="text-xs ml-2">
              {moment(post.post_created_date.toDate()).fromNow()}
            </p>
          </Link>
          <div
            onClick={() => {
              modalDispatch(showModal(<MoreOptions />, ""));
              postDispatch(getPostDetail(post));
            }}
            className="cursor-pointer"
          >
            {Icon("more")}
          </div>
        </div>

        {/* image section */}
        <img
          loading="lazy"
          className="w-full object-cover max-h-[470px]"
          src={post.img}
          alt=""
        />

        <div className="px-5 py-5">
          {/* icons section */}
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div
                onClick={() => {
                  handleLikePost(dispatch, post.id);
                  setLike(!like);
                }}
              >
                {like ? Icon("heart_filled") : Icon("heart")}
              </div>

              <div
                onClick={() => {
                  inputRef.current && inputRef.current.focus();
                }}
              >
                {Icon("comment")}
              </div>

              {Icon("direct")}
            </div>
            {Icon("save")}
          </div>
          {/* like */}
          {numberOfLike > 0 && (
            <p className="my-3 text-sm font-bold">
              {numberOfLike} like{numberOfLike > 1 && "s"}
            </p>
          )}

          {/* caption section */}

          <div className="my-3 text-sm whitespace-pre-wrap">
            <Link to={`/${userCreated?.username}`}>
              <span className="font-bold mr-2">{userCreated?.username}</span>
            </Link>
            {seeMore ? (
              <>
                <span>
                  {post.post_content.substring(
                    0,
                    getIndexOfWhitespace(post.post_content, 5)
                  )}
                  ...
                </span>
                <span
                  className="cursor-pointer hover:opacity-30"
                  onClick={() => setSeeMore(!seeMore)}
                >
                  See more
                </span>
              </>
            ) : (
              <span className="break-words">{post.post_content}</span>
            )}
          </div>

          <p
            className="cursor-pointer hover:opacity-30"
            onClick={() => {
              modalDispatch(showModal(<PostDetail post={post} />, ""));
              document.body.classList.add("overflow-y-hidden");
            }}
          >
            View all comments
          </p>
        </div>

        {/* input section */}
        <div className="flex items-center px-5 py-3 justify-between border-t-[0.875px] dark:border-ig-dark-elevated-separator">
          {Icon("emoji")}

          <input
            ref={inputRef}
            className="flex-1 border-none focus:outline-none dark:bg-black dark:text-white"
            type="text"
            placeholder="Add a comment ..."
          />
          <button
            onClick={handleComment}
            className="text-ig-primary-button font-bold"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;

