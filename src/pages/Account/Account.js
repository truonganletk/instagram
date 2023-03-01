import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChangeProfilePhoto from "../../components/MoreOptions/ChangeProfilePhoto";
import SettingOptions from "../../components/MoreOptions/SettingOptions";
import { AuthContext } from "../../context/authContext/AuthContext";
import { followUser, getAllUsers } from "../../context/authContext/services";
import { showModal, updateData } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { useNavigate } from "react-router-dom";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { getLists } from "../../context/postContext/services";
import { PostContext } from "../../context/postContext/PostContext";
import { Icon } from "../../asset/icons";

function Account() {
  const { user: currentUser, users, dispatch } = useContext(AuthContext);
  const { dispatch: postDispatch, lists } = useContext(PostContext);

  const navigate = useNavigate();
  const { username } = useParams();
  const [check, setCheck] = useState("");
  const [user, setUser] = useState({});
  const [disable, setDisable] = useState(false);
  const [followed, setFollowed] = useState(false);
  if (users.length > 0 && check != username) {
    const promise = new Promise((resolve) =>
      resolve(users.find((user) => user.username === username))
    );
    promise.then(async (u) => {
      setUser(u);
      setCheck(username);
      setFollowed(
        u.follower?.filter((i) => i.id === currentUser.id).length > 0
      );
    });
  }
  const { dispatch: modalDispatch } = useContext(ModalContext);
  useEffect(() => {
    getAllUsers(dispatch);
    getLists(postDispatch);
    setCheck("");
  }, [currentUser]);

  return (
    <>
      {check &&
        (user ? (
          <main className="max-w-[935px] mt-8 mx-auto">
            <header className="flex flex-1 gap-x-10 md:justify-center mb-12 mx-2 md:mx-auto">
              {/* avatar */}
              <img
                loading="lazy"
                className={`w-28 h-28 lg:w-44 lg:h-44 border rounded-full p-[2px] ${
                  currentUser.username === user?.username && "cursor-pointer"
                }`}
                src={user?.avatar}
                alt="avatar"
                onClick={() => {
                  currentUser.username === user?.username &&
                    modalDispatch(
                      showModal(<ChangeProfilePhoto />, "Change profile photo")
                    );
                }}
              />

              {/* bio */}
              <div className="flex flex-col space-y-5 shrink">
                <div className="flex flex-wrap space-y-3 items-center ">
                  <h2 className="font-light text-[28px] mr-5">
                    {user?.username}
                  </h2>
                  {/* <div> */}
                  <div className="flex space-x-2">
                    {currentUser.username != user?.username && (
                      <>
                        <button className="bg-transparent border-[1px] rounded px-[9px] py-[5px] cursor-pointer text-sm font-semibold">
                          Message
                        </button>
                        <button
                          disabled={disable}
                          onClick={async () => {
                            await setDisable(true);
                            await followUser(dispatch, user.id, user.username);
                            await setFollowed(!followed);
                            await setCheck("");
                            await setDisable(false);
                          }}
                          className="bg-ig-primary-button text-white border-[1px] rounded px-5 py-[5px] cursor-pointer text-sm font-semibold"
                        >
                          {followed ? "Unfollow" : "Follow"}
                        </button>
                      </>
                    )}
                    <div
                      onClick={() => {
                        modalDispatch(updateData({ username: user.username }));
                        modalDispatch(
                          showModal(<SettingOptions />, "Settings", navigate)
                        );
                      }}
                      className="ml-2"
                    >
                      {Icon("more")}
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div className="hidden sm:flex sm:space-x-16">
                  <div>
                    <span className="font-bold">
                      {
                        lists?.filter(
                          (post) => post.post_created_by === user?.id
                        ).length
                      }{" "}
                    </span>
                    posts
                  </div>
                  <div>
                    <span className="font-bold">
                      {user?.follower?.length || 0}{" "}
                    </span>
                    followers
                  </div>
                  <div>
                    <span className="font-bold">
                      {user?.follow?.length || 0}{" "}
                    </span>
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
            <ProfilePost id={user.id} />
          </main>
        ) : (
          <>
            <div className="text-center m-10">
              <h1 className="text-2xl font-semibold text-gray-800">
                Sorry, this page is not available.
              </h1>
              <p className="text-lg text-gray-600">
                The link you followed may be broken, or the page may have been
                removed. Go back to Instagram.
              </p>
            </div>
          </>
        ))}
    </>
  );
}

export default Account;
