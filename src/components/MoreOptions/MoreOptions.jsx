import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { hideModal, showModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { PostContext } from "../../context/postContext/PostContext";
import DeletePost from "../DeletePost/DeletePost";
import EditPost from "../EditPost/EditPost";

function MoreOptions() {
  const { dispatch } = useContext(ModalContext);
  const { postDetail } = useContext(PostContext);
  const { user } = useContext(AuthContext);

  return (
    <ul className=" bg-ig-primary-background dark:bg-black dark:text-white w-[400px] z-100 rounded-xl">
      {postDetail.post_created_by === user.id && (
        <>
          <li className="text-base text-center text-red-500 bg-transparent  px-2 py-3 rounded-t-xl border-0 dark:hover:bg-ig-primary-text cursor-pointer">
            <button
              onClick={() =>
                dispatch(showModal(<DeletePost />, "Delete Post?"))
              }
              className="w-full"
            >
              Delete
            </button>
          </li>
          <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 dark:hover:bg-ig-primary-text dark:text-white hover:bg-gray-100 border-t border-ig-elevated-separator dark:border-ig-primary-text cursor-pointer">
            <button
              className="w-full"
              onClick={() => dispatch(showModal(<EditPost />, "Edit post"))}
            >
              Edit
            </button>
          </li>
        </>
      )}

      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 dark:hover:bg-ig-primary-text dark:text-white hover:bg-gray-100 border-t border-ig-elevated-separator dark:border-ig-primary-text cursor-pointer">
        <button className="w-full">Copy Link</button>
      </li>
      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 dark:hover:bg-ig-primary-text dark:text-white hover:bg-gray-100 border-t border-ig-elevated-separator dark:border-ig-primary-text cursor-pointer">
        <button className="w-full" onClick={() => {
          dispatch(hideModal())
          document.body.classList.remove("overflow-y-hidden");
        }}>
          Cancel
        </button>
      </li>
    </ul>
  );
}

export default MoreOptions;