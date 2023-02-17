import React, { createContext, useReducer } from "react";
import ChatReducer from "./ChatReducers";
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    chatId: null,
    user: {},
};

export const ChatContext = createContext(INITIAL_STATE);

export const ChatContextProvider = (props) => {
    const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);

    return <ChatContext.Provider value={{
        data: state,
        dispatch,
    }}>
        {props.children}
    </ChatContext.Provider>
}

ChatContextProvider.propTypes = {
    children: PropTypes.any,
};