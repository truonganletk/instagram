import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getAllUsers } from "../../context/authContext/service";
import { Link } from "react-router-dom";

function Post({ ...props }) {
  const [img, setImg] = useState();
  const { storage } = useContext(FirebaseContext);
  const { users, dispatch } = useContext(AuthContext);
  const userCreated = users.find((user) => user.id === props.userCreatedId);
  const imagesRef = ref(storage, `images/${props.img}`);

  getDownloadURL(imagesRef).then((url) => {
    setImg(url);
  });

  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  return (
    <div className="bg-white mb-7 border rounded-lg">
      {/* header section */}
      <div className="flex px-5 py-3 items-center justify-between">
        <Link className="flex items-center " to={`/${userCreated?.username}`}>
          <img
            className="rounded-full h-10 w-10 object-contain border mr-3"
            src={`${userCreated?.avatar}`}
            alt=""
          />
          <p className="flex-1">{userCreated?.username}</p>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>

      {/* image section */}
      <img className="w-full object-cover max-h-[470px]" src={img} alt="" />

      <div className="px-5 py-5">
        {/* icons section */}
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 hover:opacity-30 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 hover:opacity-30 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 hover:opacity-30 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 hover:opacity-30 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>

        {/* caption section */}

        <p className="my-3">
          <Link to={`/${userCreated?.username}`}>
            <span className="font-bold mr-2">{userCreated?.username}</span>
          </Link>
          {props.caption}
        </p>
      </div>

      {/* input section */}
      <form className="flex items-center px-5 py-3 justify-between border-t-[0.875px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>

        <input
          className="flex-1 border-none focus:outline-none"
          type="text"
          placeholder="Add a comment ..."
        />
        <button className="text-ig-primary-button font-bold">Post</button>
      </form>
    </div>
  );
}

Post.propTypes = {
  userCreatedId: PropTypes.string,
  userImg: PropTypes.string,
  img: PropTypes.string,
  caption: PropTypes.string,
};

export default Post;
