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

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case GET_ALL_USERS_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        users: action.payload,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case GET_INFO_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case GET_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        user: action.payload,
      };
    case GET_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case LOG_OUT:
      return {
        ...state,
        user: {},
      };

    case UPDATE_INFO:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case RE_AUTH:
      return {
        ...state,
        isReAuthenticated: true,
      };
    case RE_AUTH_END:
      return {
        ...state,
        isReAuthenticated: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
