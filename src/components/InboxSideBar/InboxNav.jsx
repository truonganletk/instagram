import React, { useContext } from "react";
import { Icon } from "../../asset/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { showModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import InboxSearch from "./InboxSearch";

function InboxNav() {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(ModalContext);

  return (
    <div className="h-14 border-b border-b-ig-elevated-separator dark:border-ig-dark-elevated-separator flex items-center justify-center relative">
      <div className=" text-center">
        <h3 className="font-bold"> {user.username} </h3>
      </div>
      <div
        onClick={() => {
          dispatch(showModal(<InboxSearch />, "Search User"));
        }}
        className="absolute right-3 cursor-pointer"
      >
        {Icon("write")}
      </div>
    </div>
  );
}

export default InboxNav;
