import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getAllUsers, signUp } from "../../context/authContext/service";

function SignUp() {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .required("username required")
      .matches(/^[a-z0-9_.]+$/, "enter an invalid username")
      .test("Unique username", "this username already exits", (username) => {
        return users.find((user) => user.username === username) ? false : true;
      }),
    email: Yup.string()
      .required("Email required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "enter an invalid email!")
      .test("Unique email", "Email already in use", (email) => {
        return users.find((user) => user.email === email) ? false : true;
      }),
    password: Yup.string().required("Password required").min(6, "Too short!!!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Comfirm Password is required!"),
  });

  const { users, dispatch } = useContext(AuthContext);
  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  return (
    <>
      <div className="pt-9">
        <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center mb-3 mx-auto">
          <div className="mt-5 mb-3 w-[175px] h-[51px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
              alt=""
            />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                signUp(dispatch, values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                autoComplete="none"
                className="flex flex-col w-full"
              >
                <div className="flex flex-col">
                  <div className="mx-10 mb-2 text-center text-ig-secondary-text font-semibold text-lg">
                    <p>Sign up to see photos and videos from your friends.</p>
                  </div>
                  <div className="mx-10 mb-2 text-center cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white">
                    <a href="#">Log in with facebook</a>
                  </div>
                  <div className="flex items-center mx-10 mt-2 mb-4 justify-between">
                    <div className="w-24 h-[1px] bg-ig-elevated-separator"></div>
                    <div>OR</div>
                    <div className="w-24 h-[1px] bg-ig-elevated-separator"></div>
                  </div>
                  <div className="mx-10 mb-2">
                    <input
                      className="box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none"
                      onChange={handleChange}
                      name="email"
                      type="email"
                      placeholder="Mobile number or email"
                      onBlur={handleBlur}
                    />

                    {errors.email && touched.email && (
                      <p className="mt-3 text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div className="mx-10 mb-2">
                    <input
                      className="box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none"
                      onChange={handleChange}
                      name="username"
                      type="text"
                      placeholder="username"
                      onBlur={handleBlur}
                    />

                    {errors.username && touched.username && (
                      <p className="mt-3 text-red-600">{errors.username}</p>
                    )}
                  </div>
                  <div className="mx-10 mb-2">
                    <input
                      className="box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none"
                      onChange={handleChange}
                      name="password"
                      type="password"
                      placeholder="password"
                      onBlur={handleBlur}
                    />

                    {errors.password && touched.password && (
                      <p className="mt-3 text-red-600">{errors.password}</p>
                    )}
                  </div>
                  <div className="mx-10 mb-2">
                    <input
                      className="box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none"
                      onChange={handleChange}
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <p className="mt-3 text-red-600">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div className="mx-10 my-4">
                    <p className="text-xs text-center text-ig-secondary-text">
                      People who use our service may have uploaded your contact
                      information to Instagram.{" "}
                      <a className="font-semibold" href="">
                        Learn More
                      </a>
                    </p>
                    <p className="text-xs text-center text-ig-secondary-text">
                      By signing up, you agree to our{" "}
                      <a className="font-semibold" href="">
                        Terms , Privacy Policy and Cookies Policy .
                      </a>
                    </p>
                  </div>
                  <div className="mx-10 my-5">
                    <button
                      type="submit"
                      className="w-full cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center py-4 mx-auto">
          <p className="text-ig-primary-text text-sm">
            Have an account?{" "}
            <a className="text-ig-primary-button font-semibold" href="/">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
