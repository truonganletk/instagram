import React, { useContext } from "react";
import { Icon } from "../../asset/icons";
import { ChatContext } from "../../context/chatContext/ChatContext";

function ChatTitle() {
  const { data } = useContext(ChatContext);

  return (
    <div className="h-14 border-b border-b-ig-elevated-separator dark:border-ig-dark-elevated-separator flex items-center justify-center">
      <div className="w-full flex px-3 justify-between items-center">
        <div className="flex w-full items-center">
          <div className=" ">
            <img
              loading="lazy"
              className="w-10 h-10 rounded-full p-2"
              src={data.user.avatar}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-md">{data.user?.username}</h2>
            <h2 className="text-xs text-sky-500">Online</h2>
          </div>
        </div>
        <div className="flex">
          <div className="px-2 cursor-pointer">{Icon("phone")}</div>
          <div className="px-2 cursor-pointer">{Icon("videoCall")}</div>
          <div className="px-2 cursor-pointer">{Icon("info")}</div>
        </div>
      </div>
    </div>
  );
}

export default ChatTitle;
