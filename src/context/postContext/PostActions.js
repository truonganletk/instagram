import { GET_LISTS_FAILURE, GET_LISTS_START, GET_LISTS_SUCCESS } from "./PostType";

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
