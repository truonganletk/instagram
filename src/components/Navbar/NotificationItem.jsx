import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NotificationItem(props) {
  const { notif } = props;

  return (
    <>
      <NavLink to={notif.url}>
        <div className="flex justify-center">
          <div className="flex flex-row bg-white dark:bg-black dark:text-white  dark:hover:bg-ig-secondary-text shadow-lg items-center w-full">
            <div className="basis-2/12 flex justify-center">
              <img
                loading="lazy"
                className="w-16 h-16 rounded-full p-2 "
                src={notif.image || "https://picsum.photos/200"}
                alt=""
              />
            </div>
            <div className=" py-5 flex flex-col justify-center items-center basis-8/12">
              <p className="text-gray-700 dark:text-white  dark:hover:bg-ig-secondary-text text-xs">
                {notif.user && notif.user}
                {notif.content}
              </p>
            </div>
          </div>
        </div>
      </NavLink>

      <hr className="h-0 border border-solid border-t-0 border-gray-700 opacity-25 " />
    </>
  );
}

NotificationItem.propTypes = {
  notif: PropTypes.any,
};

export default NotificationItem;
