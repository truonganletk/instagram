import Input from "./Input";
import Messages from "./Messages";
import React, { useContext } from "react";
import { ChatContext } from "../../context/chatContext/ChatContext";
import ChatTitle from "./ChatTitle";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { showModal } from "../../context/modalContext/ModalActions";
import InboxSearch from "../InboxSideBar/InboxSearch";
import { Icon } from "../../asset/icons";
function BoxChat() {
  const { data } = useContext(ChatContext);
  const { dispatch } = useContext(ModalContext);
  return (
    <>
      {data.chatId != null ? (
        <div className="flex-row basis-full md:basis-8/12 relative">
          <ChatTitle />
          <Messages />
          <Input />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center basis-full md:basis-8/12">
          <div className="rounded-full border border-black w-20 dark:border-white h-20 mb-2 flex justify-center items-center">
            {Icon("chat_regular")}
          </div>
          <h2 className="my-3">Tin nhắn của bạn</h2>
          <p className="text-gray-500 text-sm mb-7">
            Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm.
          </p>
          <button
            onClick={() => {
              dispatch(showModal(<InboxSearch />, "Search User"));
            }}
            type="submit"
            className="dark:text-white text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm  w-auto px-3 py-1 text-center"
          >
            Gửi tin nhắn
          </button>
        </div>
      )}
    </>
  );
}

export default BoxChat;
