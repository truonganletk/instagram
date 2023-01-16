import { SIGN_IN_FAILURE, SIGN_IN_START, SIGN_IN_SUCCESS } from "./AuthType";

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
        default:
            return { ...state };
    }
};

export default AuthReducer;