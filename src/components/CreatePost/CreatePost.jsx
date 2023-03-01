import React, { useContext, useState } from "react";
import { Icon } from "../../asset/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { hideModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { PostContext } from "../../context/postContext/PostContext";
import { createPost } from "../../context/postContext/services";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const characterLimit = 100;
  const { data, dispatch: modalDispatch } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(PostContext);
  
  return (
    <div className="flex items-start lg:h-[600px] w-[320px] md:w-[450px] lg:w-[860px]">
      <div className="lg:block lg:w-3/5 lg:h-full hidden">
        <div className="w-full h-full">
          <img
            loading="lazy"
            className="w-full h-full"
            src={URL.createObjectURL(data?.file)}
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-2/5 w-full p-3">
        <div className="flex items-center justify-between mb-[10px]">
          <img
            loading="lazy"
            className="w-10 h-10 rounded-full p-[2px] mr-3"
            src={user.avatar}
            alt="profile-avatar"
          />
          <div className="mr-auto">
            <p className="dark:text-ig-primary-background text-black">
              {user.username}
            </p>
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
            className="bg-transparent resize-none outline-none text-black dark:text-ig-primary-background w-full"
            type="text"
            placeholder="Write a caption..."
          />
        </div>
        <div className="flex justify-between px-2 items-center">
          <p className="text-black dark:text-ig-primary-background text-xs">
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
            className="px-2 py-3 placeholder-slate-300 text-black dark:text-ig-primary-background relative bg-transparent rounded text-sm border-none outline-none focus:outline-none w-full pr-10"
          />
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-black dark:text-ig-primary-background  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            {Icon("location")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
