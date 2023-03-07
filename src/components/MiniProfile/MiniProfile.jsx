import { Skeleton } from "@mui/material";
import * as _ from "lodash";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

function MiniProfile() {
  // const [loading, setLoading] = useState(true);
  const { user,isFetching } = useContext(AuthContext);
  return (
    <>
      <div className={`${_.isEmpty(user) || isFetching ? '' : 'hidden'} flex items-center justify-start mb-[10px]`}>
        <div className="w-16 h-16 rounded-full mr-3">
          <Skeleton className="dark:bg-ig-dark-elevated-separator" variant="circular" width='100%' height='100%' animation="wave" />
        </div>
        <div className="flex flex-col w-[70%]">
          <Skeleton variant="rectangular" className="w-[70%] dark:bg-ig-dark-elevated-separator h-5 mb-2" animation="wave" />
          <Skeleton variant="rectangular" className="w-[60%] dark:bg-ig-dark-elevated-separator h-5" animation="wave" />
        </div>
      </div>
      <Link
        to={`/${user.username}`}
        className={`${_.isEmpty(user) || isFetching ? 'hidden' : ''} flex items-center justify-between mb-[10px]`}
      >
        <img
          loading="lazy"
          className="w-16 h-16 rounded-full p-[2px] mr-3"
          src={user.avatar}
          alt="profile-avatar"
          // onLoad={() => { setLoading(false); }}
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
