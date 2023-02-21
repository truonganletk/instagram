import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { hideModal } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { PostContext } from "../../context/postContext/PostContext";
import { createPost } from "../../context/postContext/Services";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const characterLimit = 100;
  const { data, dispatch: modalDispatch } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(PostContext);
  console.log(caption);
  return (
    <div className="flex items-start h-[600px] w-[860px]">
      <div className="w-3/5 h-full">
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src={URL.createObjectURL(data?.file)}
            alt=""
          />
        </div>
      </div>
      <div className="w-2/5 p-3">
        <div className="flex items-center justify-between mb-[10px]">
          <img
            className="w-10 h-10 rounded-full p-[2px] mr-3"
            src="https://picsum.photos/200"
            alt="profile-avatar"
          />
          <div className="mr-auto">
            <p className="text-ig-primary-background">{user.username}</p>
          </div>
        </div>
        <div className="px-2">
          <textarea
            value={caption}
            onChange={(e) => {
              characterLimit - e.target.value.length >= 0 &&
                setCaption(e.target.value);
            }}
            rows="4"
            className="bg-transparent resize-none outline-none text-ig-primary-background w-full"
            type="text"
            placeholder="Write a caption..."
          />
        </div>
        <div className="flex justify-between px-2 items-center">
          <p className="text-white text-xs">
            {caption.length}/{characterLimit}
          </p>
          <p
            onClick={() => {
              createPost(dispatch, caption, user.id, data?.file);
              modalDispatch(hideModal());
            }}
            className="text-blue-500 font-bold cursor-pointer"
          >
            Share
          </p>
        </div>
        <div className="relative flex w-full flex-wrap items-stretch mt-3">
          <input
            type="text"
            placeholder="Add location ..."
            className="px-2 py-3 placeholder-slate-300 text-white relative bg-transparent rounded text-sm border-none outline-none focus:outline-none w-full pr-10"
          />
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
