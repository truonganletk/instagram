import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { hideModal, showModal } from "../../context/modalContext/ModalActions";
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
          <li className="text-base text-center text-red-500 bg-transparent  px-2 py-3 rounded-t-xl border-0 hover:bg-gray-100 cursor-pointer">
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

{
  /* <div className="fixed top-0 left-0 right-0 z-50 w-full mx-auto overflow-x-hidden overflow-y-auto md:inset-0 bg-black bg-opacity-40 h-modal md:h-full">
      <div className="flex items-center justify-center h-full">
        <ul className=" bg-ig-primary-background w-[400px] z-100 rounded-xl">
          <li className="text-base text-center text-red-500 bg-transparent  px-2 py-3 rounded-t-xl border-0 hover:bg-gray-100 cursor-pointer">
            <button>Delete</button>
          </li>
          <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3  border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
            <button>Edit</button>
          </li>
          <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
            <button>Copy Link</button>
          </li>
          <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
            <button>Cancel</button>
          </li>
        </ul>
      </div>
    </div> */
}
