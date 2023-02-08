import { HIDE_MODAL, SHOW_MODAL, UPDATE_DATA } from "./ModalType";

const ModalReducer = (state, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                show: true,
                modal: action.modal,
                title: action.title
            };
        case HIDE_MODAL:
            return {
                show: false,
            };
        case UPDATE_DATA:
            return {
                data: { ...state.data, ...action.data },
            };
        default:
            return { ...state };
    }
};

export default ModalReducer;