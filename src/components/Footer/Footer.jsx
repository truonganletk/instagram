import React from "react";

function Footer() {
  return (
    <>
      <div>
        <nav className="mb-4">
          <ul className="">
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                About
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Help
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Press
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                API
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Jobs
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Privacy
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Terms
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Locations
              </a>
            </li>
            <li className="inline-block mr-2">
              <a className="hover:underline text-ig-secondary-text" href="">
                Language
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-ig-secondary-text">
          &copy; 2022 Instagram from Meta
        </p>
      </div>
    </>
  );
}

export default Footer;
