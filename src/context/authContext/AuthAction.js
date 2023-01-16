import { SIGN_IN_FAILURE, SIGN_IN_START, SIGN_IN_SUCCESS } from "./AuthType";

export const signInStart = () => ({
    type: SIGN_IN_START,
});

export const signInSuccess = () => ({
    type: SIGN_IN_SUCCESS,
});

export const signInFailure = () => ({
    type: SIGN_IN_FAILURE,
});