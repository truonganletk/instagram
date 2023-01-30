import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  LOG_OUT,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./AuthType";

// SIGN IN
export const signInStart = () => ({
  type: SIGN_IN_START,
});

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signInFailure = () => ({
  type: SIGN_IN_FAILURE,
});

// SIGN UP
export const signUpStart = () => ({
  type: SIGN_UP_START,
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE,
});

// LOG OUT

export const LogOut = () => ({
  type: LOG_OUT,
});

// GET ALL USERS
export const getAllUsersStart = () => ({
  type: GET_ALL_USERS_START,
});

export const getAllUsersSuccess = () => ({
  type: GET_ALL_USERS_SUCCESS,
});

export const getAllUsersFailure = () => ({
  type: GET_ALL_USERS_FAILURE,
});
