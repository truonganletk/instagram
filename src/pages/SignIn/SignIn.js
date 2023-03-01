import React, { useContext, useEffect } from "react";
import {
  getAllUsers,
  reLogin,
  signIn,
} from "../../context/authContext/services";
import { AuthContext } from "../../context/authContext/AuthContext";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { dispatch, isReAuthenticated, user, users, error } =
    useContext(AuthContext);

  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  let navigate = useNavigate();

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "enter an invalid email!")
      .test("validate email", "This email doesn't exist", (email) => {
        return users.find((user) => user.email === email) ? true : false;
      }),
    password: Yup.string().required("Password required"),
  });
  let errorPassword = error;

  return (
    <>
      <div className="pt-9">
        <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center mb-3 mx-auto">
          <div className="mt-5 mb-3 w-[175px] h-[51px]">
            <img
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
              alt=""
            />
          </div>
          <Formik
            enableReinitialize={isReAuthenticated}
            initialValues={{
              email: user.email || "",
              password: "",
            }}
            validationSchema={SignInSchema}
            onSubmit={(value) => {
              isReAuthenticated
                ? reLogin(dispatch, value.email, value.password, navigate)
                : signIn(dispatch, value.email, value.password);
            }}
          >
            {({
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              values,
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <div className="mt-6 flex flex-col">
                  <div className="mx-10 mb-2">
                    <input
                      className="box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none"
                      onChange={handleChange}
                      placeholder="Phone, username or email"
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-3 text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div className="mx-10 mb-2">
                    <input
                      className="box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none"
                      onChange={handleChange}
                      placeholder="Password"
                      name="password"
                      type="password"
                      onBlur={handleBlur}
                    />
                    {errors.password
                      ? (errorPassword = null)
                      : errorPassword && (
                        <p className="mt-3 text-red-600">wrong password</p>
                      )}
                    {errors.password && touched.password && (
                      <p className="mt-3 text-red-600">{errors.password}</p>
                    )}
                  </div>
                  <div className="mx-10 my-2">
                    <button
                      className="w-full cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="flex items-center mx-10 mt-2 mb-4 justify-between">
                    <div className="w-24 h-[1px] bg-ig-elevated-separator"></div>
                    <div>OR</div>
                    <div className="w-24 h-[1px] bg-ig-elevated-separator"></div>
                  </div>
                  <div className="text-center mx-10 mb-2 text-[#385185] text-sm font-semibold cursor-pointer">
                    <a href="#">Login with facebook</a>
                  </div>
                </div>
                <div className="my-5 cursor-pointer text-xs text-center">
                  <a href="#">Forgot Password</a>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center py-4 mx-auto">
          <p className="text-ig-primary-text text-sm">
            Don&#39;t have an account?{" "}
            <a className="text-ig-primary-button font-semibold" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
