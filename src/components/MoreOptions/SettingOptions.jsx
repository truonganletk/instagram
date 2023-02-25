import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logOut } from "../../context/authContext/service";
import { hideModal } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";

function SettingOptions() {
  const { dispatch, navigate, data } = useContext(ModalContext);
  const { dispatch: authDispatch, user } = useContext(AuthContext);

  return (
    <ul className=" bg-ig-primary-background w-[400px] z-100 rounded-xl">
      {data.username === user.username && (
        <li className="text-base text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-t-xl border-0 hover:bg-gray-100 cursor-pointer">
          <button
            onClick={() => {
              dispatch(hideModal());
              navigate("/accounts/changepass");
            }}
            className="w-full"
          >
            Change Password
          </button>
        </li>
      )}
      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3  border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
        <button
          onClick={() => {
            dispatch(hideModal());
          }}
          className="w-full"
        >
          Report a problem
        </button>
      </li>
      {data.username === user.username && (
        <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3  border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
          <button
            onClick={() => {
              logOut(authDispatch);
              dispatch(hideModal());
            }}
            className="w-full"
          >
            Logout
          </button>
        </li>
      )}
      <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer">
        <button className="w-full" onClick={() => dispatch(hideModal())}>
          Cancel
        </button>
      </li>
    </ul>
  );
}

export default SettingOptions;
