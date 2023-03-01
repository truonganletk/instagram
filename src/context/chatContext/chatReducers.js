import { getAuth } from "firebase/auth";
import { CHANGE_USER } from "./chatType";

const ChatReducer = (state, action) => {
    const user = getAuth().currentUser;
    
    switch (action.type) {
        case CHANGE_USER:
            return {
                user: action.payload,
                chatId:
                    user.uid > action.payload.id
                        ? user.uid + action.payload.id
                        : action.payload.id + user.uid,
            };

        default:
            return { ...state };
    }
};

export default ChatReducer;