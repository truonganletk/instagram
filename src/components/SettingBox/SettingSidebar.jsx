import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SettingSidebar extends Component {
  render() {
    return (
      <ul className="border-r border-r-gray-300 dark:border-ig-dark-elevated-separator basis-3/12 hidden md:block">
        <NavLink
          to={"/accounts/edit"}
          className={({ isActive }) =>
            (isActive
              ? "border-l border-ig-primary-text dark:border-white"
              : "") +
            " block w-full px-5 py-4 hover:bg-gray-100 dark:hover:bg-ig-primary-text"
          }
        >
          Edit Profile
        </NavLink>
        <NavLink
          to={"/accounts/changepass"}
          className={({ isActive }) =>
            (isActive
              ? "border-l border-ig-primary-text dark:border-white"
              : "") +
            " block w-full px-5 py-4 hover:bg-gray-100 dark:hover:bg-ig-primary-text"
          }
        >
          Change Password
        </NavLink>
      </ul>
    );
  }
}

export default SettingSidebar;
