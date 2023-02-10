import {
    getListsFailure,
    getListsStart,
    getListsSuccess,
} from "./PostActions";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase-config';
import { storage } from '../../firebase-config';
import { ref, uploadBytesResumable } from 'firebase/storage';

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

export const createPost = async (dispatch,caption,userId,Img) => {
    try {
        const post = {
            post_content:caption,
            post_number_of_reactions: 0,
            post_created_date: new Date(),
            post_created_by: userId,
            img: Img.name,
        }
        const storageRef = ref(storage, `/images/${Img.name}`);
        uploadBytesResumable(storageRef, Img);
        await addDoc(collection(firestore, "posts"), post);
        console.log(post);
        getLists(dispatch);
    } catch (err) {
        console.log(err);
    }
};

