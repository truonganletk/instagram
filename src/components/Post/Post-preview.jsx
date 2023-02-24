import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { firestore } from "../../firebase-config";
import PostDetail from "./PostDetail";
import { showModal } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";

function Postpreview({ ...props }) {
  const { post } = props;
  const [comments, setComments] = useState([]);
  const { dispatch: modalDispatch } = useContext(ModalContext);
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
  let totalReplies = 0;
  comments?.map((comment) => {
    comment.data().reply?.length > 0 &&
      (totalReplies = totalReplies + comment.data().reply.length);
  });

  return (
    <>
      <figure
        onClick={() => {
          modalDispatch(showModal(<PostDetail post={post} />, ""));
          document.body.classList.add("overflow-y-hidden");
        }}
        className="max-w-full relative h-full overflow-hidden cursor-pointer"
      >
        <img className="object-cover w-full h-full" src={post.img} alt="" />
        <figcaption className="absolute flex space-x-5 items-center justify-center w-full h-full top-0 box-border bg-ig-explore-post-hover opacity-0 hover:opacity-100">
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 opacity-75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <span className="text-white">{post.like.length}</span>
          </div>
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 opacity-75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <span className="text-white">{comments.length + totalReplies}</span>
          </div>
        </figcaption>
      </figure>
    </>
  );
}

Postpreview.propTypes = {
  post: PropTypes.object,
};

export default Postpreview;
