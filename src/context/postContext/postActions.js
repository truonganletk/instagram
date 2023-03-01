import {
  GET_LISTS_FAILURE,
  GET_LISTS_START,
  GET_LISTS_SUCCESS,
  GET_POST_DETAIL,
} from "./postType";

export const getListsStart = () => ({
  type: GET_LISTS_START,
});

export const getListsSuccess = (lists) => ({
  type: GET_LISTS_SUCCESS,
  payload: lists,
});

export const getListsFailure = () => ({
  type: GET_LISTS_FAILURE,
});

export const getPostDetail = (post) => ({
  type: GET_POST_DETAIL,
  payload: post,
});
