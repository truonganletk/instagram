import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/authContext/AuthContext";
import { followUser } from "../../context/authContext/service";

function Suggestion({ ...props }) {
  const { profile } = props;
  const [followed, setFollowed] = useState(false);
  const [disable, setDisable] = useState(false);
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between mb-[10px]">
      <img
        loading="lazy"
        className="w-10 h-10 rounded-full p-[2px] mr-3"
        src={profile.avatar}
        alt=""
      />
      <div className="mr-auto">
        <h2>{profile.username}</h2>
        <p>
          <small>New to Instagram</small>
        </p>
      </div>
      <button
        disabled={disable}
        onClick={async () => {
          await setDisable(true);
          await followUser(dispatch, profile.id, profile.username);
          await setFollowed(!followed);
          await setDisable(false);
        }}
        className="cursor-pointer text-ig-primary-button"
      >
        {followed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

Suggestion.propTypes = {
  profile: PropTypes.object,
};

export default Suggestion;
