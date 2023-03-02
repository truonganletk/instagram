import React, { useContext } from "react";
import { hideModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { PostContext } from "../../context/postContext/PostContext";
import { deletePost } from "../../context/postContext/services";

function DeletePost() {
  const { dispatch: modalDispatch } = useContext(ModalContext);
  const { dispatch, postDetail } = useContext(PostContext);
  return (
    <>
      <ul className=" bg-ig-primary-background dark:bg-black dark:text-white w-[400px] z-100 rounded-xl">
        <li className="text-base text-center text-red-500 bg-transparent  px-2 py-3 rounded-t-xl border-0 dark:hover:bg-ig-primary-text cursor-pointer">
          <button
            onClick={() => {
              deletePost(dispatch, postDetail.id);
              modalDispatch(hideModal());
            }}
            className="w-full"
          >
            Delete
          </button>
        </li>

        <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 dark:hover:bg-ig-primary-text dark:text-white hover:bg-gray-100 border-t border-ig-elevated-separator dark:border-ig-primary-text cursor-pointer">
          <button className="w-full" onClick={() => modalDispatch(hideModal())}>
            Cancel
          </button>
        </li>
      </ul>
    </>
  );
}

export default DeletePost;
