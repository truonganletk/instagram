import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import * as Yup from "yup";
import { Formik } from "formik";
import { updateProfile } from "../../context/authContext/services";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../context/modalContext/modalActions";
import ChangeProfilePhoto from "../MoreOptions/ChangeProfilePhoto";
import { ModalContext } from "../../context/modalContext/ModalContext";

function EditProfile() {
  const { user, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();
  const { dispatch: modalDispatch } = useContext(ModalContext);

  const EditSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname required"),
    username: Yup.string().required("Username required"),
    email: Yup.string()
      .required("Email required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "enter an invalid email!"),
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        fullname: user?.fullname,
        username: user?.username,
        email: user?.email,
      }}
      validationSchema={EditSchema}
      onSubmit={(value) => {
        updateProfile(dispatch, value, navigate);
      }}
    >
      {({ dirty, errors, touched, values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="p-10 basis-full md:basis-9/12">
          <div className="mb-6 flex w-full items-center">
            <div className="flex text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 justify-end ">
              <img
                loading="lazy"
                className="w-16 h-16 rounded-full p-2"
                src={user.avatar}
                alt=""
              />
            </div>
            <div className="focus:ring-blue-500 focus:border-blue-500 block w-full basis-10/12">
              <h2>{user?.fullname}</h2>
              <h2
                onClick={() => {
                  modalDispatch(
                    showModal(<ChangeProfilePhoto />, "Change profile photo")
                  );
                }}
                className="text-sky-500 dark:hover:text-white cursor-pointer"
              >
                Change profile photo
              </h2>
            </div>
          </div>
          <div className="mb-5 flex w-full items-center">
            <label
              htmlFor="fullname"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Name</strong>
            </label>
            <div className="basis-10/12">
              <input
                type="text"
                name="fullname"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={values.fullname || ""}
                onChange={handleChange}
              />
              {errors.fullname && touched.fullname && (
                <p className="mt-3 text-red-600">{errors.fullname}</p>
              )}
            </div>
          </div>
          <div className="mb-6 flex w-full items-start">
            <div className="basis-2/12 mr-5"></div>
            <div className="basis-10/12">
              <div className="text-xs text-gray-500">
                Help people discover your account by using the name you&apos;re
                known by: either your full name, nickname, or business name.
                <div className="mb-3"></div>
                You can only change your name twice within 14 days.
              </div>
            </div>
          </div>
          <div className="mb-5 flex w-full items-center">
            <label
              htmlFor="username"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Username</strong>
            </label>
            <div className="basis-10/12">
              <input
                type="text"
                name="username"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={values.username || ""}
                onChange={handleChange}
              />
              {errors.username && touched.username && (
                <p className="mt-3 text-red-600">{errors.username}</p>
              )}
            </div>
          </div>
          <div className="mb-6 flex w-full items-start">
            <div className="basis-2/12 mr-5"></div>
            <div className="basis-10/12">
              <p className="text-xs text-gray-500">
                In most cases, you&apos;ll be able to change your username back
                to <b>{user?.username}</b> for another 14 days.
                <span className="text-sky-500 hover:underline">
                  <Link to={"/#"}>Learn more</Link>
                </span>
              </p>
            </div>
          </div>
          <div className="mb-5 flex w-full items-center">
            <label
              htmlFor="name"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Website</strong>
            </label>
            <div className="basis-10/12">
              <input
                type="text"
                id="name"
                disabled
                className="bg-gray-200 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="mb-6 flex w-full items-start">
            <div className="basis-2/12 mr-5"></div>
            <div className="basis-10/12">
              <p className="text-xs text-gray-500">
                Editing your links is only available on mobile. Visit the
                Instagram app and edit your profile to change the websites in
                your bio.
              </p>
            </div>
          </div>
          <div className="mb-1 flex w-full items-center">
            <label
              htmlFor="name"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Bio</strong>
            </label>
            <div className="basis-10/12">
              <textarea
                type="text"
                id="name"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
              />
            </div>
          </div>
          <div className="mb-6 flex w-full items-start">
            <div className="basis-2/12 mr-5"></div>
            <div className="basis-10/12">
              <p className="text-xs text-gray-500">/150</p>
            </div>
          </div>
          <div className="mb-1 flex w-full items-start">
            <div className="basis-2/12 mr-5"></div>
            <div className="basis-10/12">
              <p className="text-xs text-gray-500 mb-1 font-bold">
                Personal information
              </p>
              <p className="text-xs text-gray-500 mb-5">
                Provide your personal information, even if the account is used
                for a business, a pet or something else. This won&apos;t be a
                part of your public profile.
              </p>
            </div>
          </div>
          <div className="mb-5 flex w-full items-center">
            <label
              htmlFor="email"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Email</strong>
            </label>
            <div className="basis-10/12">
              <input
                type="text"
                name="email"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={values.email || ""}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <p className="mt-3 text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mb-6 flex w-full items-center">
            <label
              htmlFor="name"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Phone number</strong>
            </label>
            <div className="basis-10/12">
              <input
                type="text"
                id="name"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-6 flex w-full items-center">
            <label
              htmlFor="name"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Gender</strong>
            </label>
            <div className="basis-10/12">
              <input
                type="text"
                id="name"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background border border-gray-300 dark:border-ig-dark-elevated-separator text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-6 flex w-full items-center">
            <label
              htmlFor="name"
              className="text-right block text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 py-3"
            >
              <strong>Similar account suggestions</strong>
            </label>
            <div className="basis-10/12 flex">
              <input type="checkbox" className="p-2.5 mr-3" />
              <p className="text-xs">
                Include your account when recommending similar accounts people
                might want to follow.[?]
              </p>
            </div>
          </div>
          <div className="mb-6 flex w-full items-center">
            <div htmlFor="name" className="basis-2/12 mr-5 py-3"></div>
            <div className="basis-10/12 flex">
              <button
                type="submit"
                disabled={!dirty}
                className="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default EditProfile;
