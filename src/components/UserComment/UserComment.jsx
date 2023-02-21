import moment from "moment";
import React from "react";
import PropTypes from "prop-types";

function UserComment(props) {
  const { text, user, avatar, createdAt } = props;
  return (
    <>
      <div className="mb-3">
        <div className="flex items-start">
          <img
            className="rounded-full h-8 w-8 object-contain border mr-3"
            src={avatar}
            alt=""
          />
          <p className="flex-1 whitespace-pre-wrap">
            <span className="text-sm font-bold mr-2">{user}</span>
            {text}
          </p>
        </div>
        <p className="text-sm ml-11 font-light">
          {moment(createdAt.toDate()).fromNow()}
        </p>
      </div>
    </>
  );
}

UserComment.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.object,
};

export default UserComment;
