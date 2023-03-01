import React from "react";
import { createContext, useReducer } from "react";
import AuthReducer from "./authReducer";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  user: {},
  users: [],
  isReAuthenticated: false,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        users: state.users,
        dispatch,
        isReAuthenticated: state.isReAuthenticated,
        isFetching: state.isFetching,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
