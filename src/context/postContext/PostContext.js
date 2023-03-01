import React,{ createContext, useReducer } from "react";
import PostReducer from "./postReducers";
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    lists: [],
    postDetail: {},
    isFetching: false,
    error: false,
  };

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = (props) =>{
     const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

    return <PostContext.Provider value={{
        lists: state.lists,
        postDetail: state.postDetail,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
        {props.children}
    </PostContext.Provider>
}

PostContextProvider.propTypes = {
    children: PropTypes.any,
};