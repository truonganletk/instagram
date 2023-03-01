import React, { createContext, useReducer } from "react";
import ModalReducer from "./modalReducers";
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    show: false,
    modal: <>Hello world</>,
    title: "Title",
    navigate: undefined,
    data: {}
};

export const ModalContext = createContext(INITIAL_STATE);

export const ModalContextProvider = (props) => {
    const [state, dispatch] = useReducer(ModalReducer, INITIAL_STATE);

    return <ModalContext.Provider value={{
        show: state.show,
        modal: state.modal,
        title: state.title,
        navigate: state.navigate,
        data: state.data,
        dispatch,
    }}>
        {props.children}
    </ModalContext.Provider>
}

ModalContextProvider.propTypes = {
    children: PropTypes.any,
};