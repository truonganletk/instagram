import moment from "moment";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { firestore } from "../../firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import Reply from "../Reply/Reply";

function UserComment({ handleReplyTo, ...props }) {
  const { isAuthor = false, id, postID, text, user, avatar, createdAt } = props;

  const [replies, setReplies] = useState([]);
  useEffect(() => {
    onSnapshot(
      doc(firestore, "posts", postID || "null", "comment", id || "null"),
      (doc) => {
        doc.exists() && setReplies(doc.data().reply);
      }
    );
  }, []);

  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="mb-5 w-full">
        <div className="flex items-start">
          <img
            loading="lazy"
            className="rounded-full h-8 w-8 object-contain border mr-3"
            src={avatar}
            alt=""
          />
          <p className="flex-1 whitespace-pre-wrap w-full">
            <span className="text-sm font-bold mr-2">{user}</span>
            <span className="break-all">{text}</span>
          </p>
        </div>
        <div className="ml-11 flex text-sm font-light gap-6 items-center">
          <p>{moment(createdAt.toDate()).fromNow()}</p>
          {!isAuthor && (
            <p
              onClick={() => handleReplyTo(user, id)}
              className="text-xs font-normal cursor-pointer"
            >
              Reply
            </p>
          )}
        </div>
        <div className="mt-3 ml-11">
          {!isAuthor && replies.length > 0 && hide && (
            <p
              onClick={() => setHide(!hide)}
              className="text-xs font-medium cursor-pointer"
            >
              ___ View replies ({replies.length})
            </p>
          )}

          {hide === false && (
            <>
              <p
                onClick={() => setHide(!hide)}
                className="text-xs font-medium cursor-pointer"
              >
                ___ Hide replies ({replies.length})
              </p>
              <div>
                {replies.map((reply, index) => {
                  return (
                    <Reply
                      key={index}
                      text={reply.text}
                      user={reply.user}
                      avatar={reply.avatar}
                      createdAt={reply.createdAt}
                      replyTo={reply.replyTo}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

UserComment.propTypes = {
  isAuthor: PropTypes.bool,
  id: PropTypes.string,
  postID: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.object,
  replyTo: PropTypes.string,
  handleReplyTo: PropTypes.any,
};

export default UserComment;
