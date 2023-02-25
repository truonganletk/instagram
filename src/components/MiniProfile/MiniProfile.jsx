import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

function MiniProfile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Link
        to={`/${user.username}`}
        className="flex items-center justify-between mb-[10px]"
      >
        <img
          loading="lazy"
          className="w-16 h-16 rounded-full p-[2px] mr-3"
          src={user.avatar}
          alt="profile-avatar"
        />
        <div className="mr-auto">
          <h2>{user.fullname}</h2>
          <p className="text-ig-secondary-text">{user.username}</p>
        </div>
      </Link>
    </>
  );
}

export default MiniProfile;
