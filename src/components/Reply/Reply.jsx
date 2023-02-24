import moment from "moment";
import React from "react";
import PropTypes from "prop-types";

function Reply(props) {
  const { text, user, replyTo, avatar, createdAt } = props;
  return (
    <>
      <div className="my-5">
        <div className="flex items-start">
          <img
            className="rounded-full h-6 w-6 object-contain border mr-3"
            src={avatar}
            alt=""
          />
          <p className="flex-1 text-sm whitespace-pre-wrap">
            <span className=" font-bold mr-2">{user}</span>

            <span className="text-cyan-700 font-bold">{replyTo}</span>

            {text.replace(replyTo, "").trim()}
          </p>
        </div>
        <div className="ml-11 flex text-xs font-light gap-6 items-center">
          <p>{moment(createdAt.toDate()).fromNow()}</p>
        </div>
      </div>
    </>
  );
}

Reply.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.object,
  replyTo: PropTypes.string,
};

export default Reply;
