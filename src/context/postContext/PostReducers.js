import { GET_LISTS_FAILURE, GET_LISTS_START, GET_LISTS_SUCCESS } from "./PostType";

const PostReducer = (state, action) => {
    switch (action.type) {
        case GET_LISTS_START:
            return {
                lists: [],
                isFetching: true,
                error: false,
            };
        case GET_LISTS_SUCCESS:
            return {
                lists: action.payload,
                isFetching: false,
                error: false,
            };
        case GET_LISTS_FAILURE:
            return {
                lists: [],
                isFetching: false,
                error: true,
            };
        default:
            return { ...state };
    }
};

export default PostReducer;