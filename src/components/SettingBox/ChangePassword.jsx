import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { changePassword } from "../../context/authContext/services";
import { AuthContext } from "../../context/authContext/AuthContext";

function ChangePassword() {
  const { user, dispatch, error } = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(false);
  const SignupSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("New password required")
      .min(6, "Too short!!!")
      .notOneOf(
        [Yup.ref("oldPassword"), null],
        "New password must be different from old password"
      ),
    oldPassword: Yup.string()
      .required("Old password required")
      .min(6, "Too short!!!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Comfirm Password is required!"),
  });
  return (
    <>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            setSubmitted(false);
            await changePassword(
              dispatch,
              values.oldPassword,
              values.newPassword
            );
            await setSubmitting(false);
            setSubmitted(true);
          }, 400);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="p-10 basis-full md:basis-9/12 "
          >
            <div className="mb-6 flex w-full items-center">
              <div className="flex text-sm font-medium text-gray-900 dark:text-white basis-2/12 mr-5 justify-end ">
                <img
                  className="w-16 h-16 rounded-full p-2"
                  src={user?.avatar}
                  alt=""
                />
              </div>
              <div className="focus:ring-blue-500 focus:border-blue-500 block w-full basis-10/12">
                <h2>{user?.fullname}</h2>
              </div>
            </div>
            <div className="mb-6 flex w-full items-center">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-900 dark:text-white basis-3/12 mr-2"
              >
                Old password
              </label>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                name="oldPassword"
                type="password"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background dark:border-ig-dark-elevated-separator border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            {errors.oldPassword && touched.oldPassword && (
              <p className="my-4 ml-[21%] text-red-600">{errors.oldPassword}</p>
            )}
            <div className="mb-6 flex w-full items-center">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-900 dark:text-white basis-3/12 mr-2"
              >
                New password
              </label>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                name="newPassword"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background dark:border-ig-dark-elevated-separator border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            {errors.newPassword && touched.newPassword && (
              <p className="my-4 ml-[21%] text-red-600">{errors.newPassword}</p>
            )}
            <div className="mt-6 flex w-full items-center">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-900 dark:text-white basis-3/12 mr-2"
              >
                Confirm new password
              </label>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                className="bg-gray-50 dark:bg-ig-dark-secondary-background dark:border-ig-dark-elevated-separator border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="my-4 ml-[21%] text-red-600">
                {errors.confirmPassword}
              </p>
            )}
            <button
              type="submit"
              className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <div className="flex items-start mt-6">
              <p
                className={`text-sm font-medium ${!error ? "text-green-600" : "text-red-500"
                  }`}
              >
                {submitted &&
                  (error
                    ? "Something wrong!!"
                    : "Password changed successfully")}
              </p>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default ChangePassword;
