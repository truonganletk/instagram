import { HIDE_MODAL, SHOW_MODAL, UPDATE_DATA } from "./modalType";

const ModalReducer = (state, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                show: true,
                modal: action.modal,
                title: action.title,
                navigate: action.navigate,                
            };
        case HIDE_MODAL:
            return {
                show: false,
                data: {}
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