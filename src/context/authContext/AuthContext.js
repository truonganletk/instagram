import React from "react";
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    user: {},
    users: []
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return <AuthContext.Provider value={{
        user: state.user,
        dispatch,
    }}>
        {props.children}
    </AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.any,
};
