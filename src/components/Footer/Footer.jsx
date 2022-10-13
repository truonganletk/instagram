import React from "react";

function Footer() {
  return (
    <div className="px-4">
      <div className="flex mb-12 flex-col">
        <nav className="flex flex-col">
          <ul className="flex justify-center">
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Meta</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">About</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Blog</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Jobs</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Help</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">API</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Privacy</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Terms</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Top Accounts</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Hashtags</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Locations</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Instagram Lite</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Contact Uploading & Non-Users</a>
            </li>
          </ul>
          <ul className="flex justify-center">
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Dance</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Food & Drink</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Home & Garden</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Music</a>
            </li>
            <li className="mx-2 mb-3 cursor-pointer">
              <a href="/">Visual Art</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <select name="languages" id="languages">
            <option value="English">English</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Spain">Spain</option>
            <option value="French">French</option>
          </select>

          <p className="ml-3">&copy; 2022 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
