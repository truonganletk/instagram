import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_INFO_FAILURE,
  GET_INFO_START,
  GET_INFO_SUCCESS,
  LOG_OUT,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  UPDATE_INFO,
} from "./AuthType";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        isFetching: true,
        error: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        isFetching: false,
        error: false,
      };
    case SIGN_IN_FAILURE:
      return {
        isFetching: false,
        error: true,
      };

    case SIGN_UP_START:
      return {
        isFetching: true,
        error: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        isFetching: false,
        error: false,
      };
    case SIGN_UP_FAILURE:
      return {
        isFetching: false,
        error: true,
      };

    case GET_ALL_USERS_START:
      return {
        isFetching: true,
        error: false,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        isFetching: false,
        error: false,
        users: action.payload,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        isFetching: false,
        error: true,
      };

    case GET_INFO_START:
      return {
        isFetching: true,
        error: false,
      };
    case GET_INFO_SUCCESS:
      return {
        isFetching: false,
        error: false,
        user: action.payload,
      };
    case GET_INFO_FAILURE:
      return {
        isFetching: false,
        error: true,
      };

    case LOG_OUT:
      return {
        user: {},
      };

    case UPDATE_INFO:
      return {
        user: { ...state.user, ...action.payload },
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
