import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { firestore } from "../../firebase-config";
import PostDetail from "./PostDetail";
import { showModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { Icon } from "../../asset/icons";

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
        <img
          loading="lazy"
          className="object-cover w-full h-full"
          src={post.img}
          alt=""
        />
        <figcaption className="absolute flex space-x-5 items-center justify-center w-full h-full top-0 box-border bg-ig-explore-post-hover opacity-0 hover:opacity-100">
          <div className="flex space-x-2 text-white">
            {Icon("heart")}

            <span className="text-white ">{post.like.length}</span>
          </div>
          <div className="flex space-x-2 text-white">
            {Icon("comment")}

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
