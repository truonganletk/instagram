import React, { useContext } from "react";
import { hideModal, showModal } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import EditPost from "../EditPost/EditPost";

function MoreOptions() {
  const { dispatch } = useContext(ModalContext);

  return (
    <ul className=" bg-ig-primary-background w-[400px] z-100 rounded-xl">
      <li className="text-base text-center text-red-500 bg-transparent  px-2 py-3 rounded-t-xl border-0 hover:bg-gray-100 cursor-pointer">
        <button className="w-full">Delete</button>
      </li>
      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3  border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
        <button
          className="w-full"
          onClick={() => dispatch(showModal(<EditPost />, "Edit post"))}
        >
          Edit
        </button>
      </li>
      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
        <button className="w-full">Copy Link</button>
      </li>
      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
        <button className="w-full" onClick={() => dispatch(hideModal())}>
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