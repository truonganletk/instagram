import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../../asset/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logOut } from "../../context/authContext/services";
import { showModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { useDarkMode } from "../../hooks/useDarkMode";
import Upload from "../Upload/Upload";
import Notifications from "./Notifications";

function Navbar() {
  const [onHome, setOnHome] = useState(false);
  const [onChat, setOnChat] = useState(false);
  const [onExplore, setOnExplore] = useState(false);
  const [mode, setMode] = useDarkMode();
  // console.log(mode);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const { dispatch: modalDispatch } = useContext(ModalContext);

  const { user } = useContext(AuthContext);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOnHome(
      location.pathname === "/" || location.pathname.split("/").includes("home")
    );
    setOnChat(location.pathname.split("/").includes("inbox"));
    setOnExplore(location.pathname.split("/").includes("explore"));
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleNotification(false);
      }
      if (ref2.current && !ref2.current.contains(event.target)) {
        setToggleUser(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [location, toggleNotification]);
  return (
    <div className="flex justify-around sm:basis-1/3 basis-2/3">
      <div
        onClick={() => {
          modalDispatch(showModal(<Upload />, "Create new post"));
        }}
      >
        {Icon("create")}
      </div>
      <Link to="/home">
        {!onHome || toggleNotification || toggleUser
          ? Icon("home_regular")
          : Icon("home_solid")}
      </Link>
      <Link to="/inbox">
        {!onChat || toggleNotification || toggleUser
          ? Icon("chat_regular")
          : Icon("chat_solid")}
      </Link>
      <Link to="/explore">
        {onExplore && !toggleNotification && !toggleUser
          ? Icon("explore_regular")
          : Icon("explore_solid")}
      </Link>
      <div className="flex justify-center" ref={ref}>
        <div className="dropdown relative">
          <button
            className="dropdown-toggle transition duration-150 ease-in-out flex items-center "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => {
              setToggleNotification(!toggleNotification);
            }}
          >
            {toggleNotification
              ? Icon("notification_regular")
              : Icon("notification_solid")}
          </button>
          <ul
            className="w-[400px] max-h-[465px] overflow-y-scroll scrollbar-hide  dropdown-menu absolute bg-white dark:bg-black dark:text-white text-base z-50 float-left pt-2 list-none text-left rounded-lg shadow-lg mt-1 hidden mx-3 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1"
          >
            <Notifications />
          </ul>
        </div>
      </div>
      <div className="flex justify-center" ref={ref2}>
        <div className="dropdown relative">
          <button
            className="dropdown-toggle transition duration-150 ease-in-out flex items-center "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => {
              setToggleUser(!toggleUser);
            }}
          >
            {toggleUser ? Icon("user_regular") : Icon("user_solid")}
          </button>
          <ul
            className=" dropdown-menu min-w-max absolute bg-white dark:bg-ig-dark-secondary-background dark:text-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg hidden mx-3 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1"
          >
            <li className="dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 dark:text-white  hover:dark:bg-ig-dark-highlight-background hover:bg-gray-100 hover:rounded-t-lg cursor-pointer">
              <Link to={`/${user.username}`}>
                <div className="flex items-center px-8 py-4">
                  {Icon("profile")}
                  <p className="ml-2">Profile</p>
                </div>
              </Link>
            </li>
            <li className="dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 dark:text-white  hover:dark:bg-ig-dark-highlight-background  hover:bg-gray-100 cursor-pointer">
              <Link to="/accounts/edit" className="">
                <div className="flex items-center px-8 py-4">
                  {Icon("settings")}
                  <p className="ml-2">Settings</p>
                </div>
              </Link>
            </li>
            <li
              onClick={() => {
                setMode();
              }}
              className=" cursor-pointer dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 dark:text-white  hover:dark:bg-ig-dark-highlight-background  hover:bg-gray-100"
            >
              <div className="flex items-center px-8 py-4">
                {mode === "dark" ? Icon("moon") : Icon("moon")}
                <p className="ml-2">Switch appearance</p>
              </div>
            </li>
            <hr className="h-0 border border-solid border-t-0 border-gray-700 opacity-25 " />
            <li
              onClick={() => logOut(dispatch)}
              className="px-8 py-4 dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 dark:text-white  hover:dark:bg-ig-dark-highlight-background hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center">
                {Icon("logout")}
                <p className="ml-2">Logout</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
