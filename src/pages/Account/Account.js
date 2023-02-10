import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Postpreview from "../../components/Post/Post-preview";
import { AuthContext } from "../../context/authContext/AuthContext";

function Account() {
  const { user } = useContext(AuthContext);
  console.log("user:", user);

  return (
    <>
      <Header />
      <main className="max-w-[935px] mx-auto mt-8">
        <header className="flex justify-center space-x-28 flex-1 mb-11">
          {/* avatar */}
          <img
            className="w-44 h-44 border rounded-full p-[2px]"
            src={user.url}
            alt="avatar"
          />

          {/* bio */}
          <div className="flex flex-col space-y-5 shrink">
            <div className="flex space-x-5 items-center ">
              <h2 className="font-light text-[28px]">{user?.username}</h2>
              <div>
                <div className="flex space-x-2">
                  <button className="bg-transparent border-[1px] rounded px-[9px] py-[5px] cursor-pointer text-sm font-semibold">
                    Message
                  </button>
                  <button className="bg-transparent border-[1px] rounded px-5 py-[5px] cursor-pointer text-sm font-semibold">
                    Follow
                  </button>
                </div>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex space-x-16">
              <div>
                <span className="font-bold">{user?.number_of_posts} </span>posts
              </div>
              <div>
                <span className="font-bold">{user?.number_of_followers} </span>
                followers
              </div>
              <div>
                <span className="font-bold">{user?.number_of_following} </span>
                following
              </div>
            </div>

            <div>
              <div className="font-semibold">{user?.fullname}</div>
              <div>founder</div>

              <a
                className="text-ig-link font-semibold hover:underline"
                href="/"
              >
                instagram.com
              </a>
            </div>
          </div>
        </header>

        {/* posts */}
        <section className="w-full grid grid-cols-3 gap-5">
          <Postpreview />
          <Postpreview />
          <Postpreview />
          <Postpreview />
          <Postpreview />
          <Postpreview />
        </section>
      </main>
    </>
  );
}

export default Account;
