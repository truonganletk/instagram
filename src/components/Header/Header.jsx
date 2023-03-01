import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Seach from "../Search/Seach";

export class Header extends Component {
  render() {
    return (
      <>
        <header className="bg-white dark:bg-black dark:text-white dark:border-b-ig-dark-elevated-separator">
          <div className="flex justify-around items-center flex-row container mx-auto py-2">
            <Logo />
            <Seach />
            <Navbar />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
