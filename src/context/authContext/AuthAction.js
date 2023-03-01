import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_INFO_FAILURE,
  GET_INFO_START,
  GET_INFO_SUCCESS,
  LOG_OUT,
  RE_AUTH,
  RE_AUTH_END,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  UPDATE_INFO,
} from "./authType";

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

export const getAllUsersSuccess = (users) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: users,
});

export const getAllUsersFailure = () => ({
  type: GET_ALL_USERS_FAILURE,
});

export const getInfoStart = () => ({
  type: GET_INFO_START,
});

export const getInfoSuccess = (user) => ({
  type: GET_INFO_SUCCESS,
  payload: user,
});

export const getInfoFailure = () => ({
  type: GET_INFO_FAILURE,
});

export const updateInfo = (user) => ({
  type: UPDATE_INFO,
  payload: user,
});

export const reAuth = () => ({
  type: RE_AUTH,
});

export const reAuthEnd = () => ({
  type: RE_AUTH_END,
});