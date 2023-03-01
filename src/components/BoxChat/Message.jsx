import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/authContext/AuthContext";
import { ChatContext } from "../../context/chatContext/ChatContext";

const Message = ({ message }) => {
  const { user } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex gap-3 my-3 ${
        message.senderId === user.id && "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col">
        <img
          loading="lazy"
          className="h-10 w-10 rounded-full"
          src={message.senderId === user.id ? user.avatar : data.user.avatar}
          alt=""
        />
        {/* <span>just now</span> */}
      </div>
      <div className="flex flex-col max-w-[70%]">
        {message.text && (
          <p
            className={`border border-ig-primary-text rounded-lg px-2 py-1 mb-2 ${
              message.senderId === user.id && "bg-blue-400 text-white"
            }`}
          >
            {message.text}
          </p>
        )}
        {message.img && (
          <img
            loading="lazy"
            className={`w-[50%] border border-blue-200 object-cover ${
              message.senderId === user.id && "ml-auto"
            }`}
            src={message.img}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.any,
};

export default Message;
