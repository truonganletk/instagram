import {
    getListsFailure,
    getListsStart,
    getListsSuccess,
} from "./PostActions";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase-config';

export const getLists = async (dispatch) => {
    let list = [];
    dispatch(getListsStart());    
    try {
        const res = await getDocs(collection(firestore, "posts"));
        res.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            list.push({id:doc.id,...doc.data()});
        });
        dispatch(getListsSuccess(list));
    } catch (err) {
        dispatch(getListsFailure());
    }
};