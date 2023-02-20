import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ChangeProfilePhoto from "../../components/MoreOptions/ChangeProfilePhoto";
import SettingOptions from "../../components/MoreOptions/SettingOptions";
import Postpreview from "../../components/Post/Post-preview";
import { AuthContext } from "../../context/authContext/AuthContext";
import { followUser, getAllUsers } from "../../context/authContext/service";
import { showModal, updateData } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { useNavigate } from "react-router-dom";

function Account() {
  const { user: currentUser, users, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { username } = useParams();
  const [check, setCheck] = useState('');
  const [user, setUser] = useState({});
  const [disable, setDisable] = useState(false);
  const [followed, setFollowed] = useState(false);
  if (users.length > 0 && check != username) {
    // console.log(check);
    const promise = new Promise((resolve) => resolve(users.find((user) => user.username === username)));
    promise.then(async (u) => {
      setUser(u);
      setCheck(username);
      setFollowed(u.follower?.filter((i) => i.id === currentUser.id).length > 0);
      // console.log(u.follower);
    });
  }
  // console.log(user);
  const { dispatch: modalDispatch } = useContext(ModalContext);

  useEffect(() => {
    getAllUsers(dispatch);
  }, [currentUser]);

  return (
    <>
      <Header />
      {check &&
        (user ?
          <main className="max-w-[935px] mx-auto mt-8">
            <header className="flex justify-center space-x-28 flex-1 mb-11">
              {/* avatar */}
              <img
                className={`w-44 h-44 border rounded-full p-[2px] ${currentUser.username === user?.username && 'cursor-pointer'}`}
                src={user?.avatar}
                alt="avatar"
                onClick={() => {
                  currentUser.username === user?.username &&
                    modalDispatch(showModal(<ChangeProfilePhoto />, "Change profile photo"));
                }}
              />

              {/* bio */}
              <div className="flex flex-col space-y-5 shrink">
                <div className="flex space-x-5 items-center ">
                  <h2 className="font-light text-[28px]">{user?.username}</h2>
                  <div>
                    <div className="flex space-x-2">

                      {currentUser.username != user?.username &&
                        <>
                          <button className="bg-transparent border-[1px] rounded px-[9px] py-[5px] cursor-pointer text-sm font-semibold">
                            Message
                          </button>
                          <button
                          disabled = {disable}
                          onClick={async() => {
                            await setDisable(true);
                            await followUser(dispatch, user.id, user.username)
                            await setFollowed(!followed);
                            await setCheck('');
                            await setDisable(false);
                          }} className="bg-ig-primary-button text-white border-[1px] rounded px-5 py-[5px] cursor-pointer text-sm font-semibold">
                            {followed ? 'Unfollow' : 'Follow'}
                          </button>
                        </>
                      }
                    </div>
                  </div>

                  <div onClick={() => {
                    modalDispatch(updateData({username:user.username}));
                    modalDispatch(showModal(<SettingOptions />, "Settings", navigate));
                  }}>
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
                    <span className="font-bold">{user?.follower?.length || 0} </span>
                    followers
                  </div>
                  <div>
                    <span className="font-bold">{user?.follow?.length || 0} </span>
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
          </main> :
          <>
            <div className="text-center m-10">
              <h1 className="text-2xl font-semibold text-gray-800">
                Sorry, this page is not available.
              </h1>
              <p className="text-lg text-gray-600">
                The link you followed may be broken, or the page may have been removed. Go back to Instagram.
              </p>
            </div>
          </>)
      }

    </>
  );
}

export default Account;
