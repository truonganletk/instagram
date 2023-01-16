import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { signInFailure, signInStart, signInSuccess } from "./AuthAction";


export const signIn = async (dispatch, email, password) => {
    dispatch(signInStart())

    try {
        const authentication = getAuth();
        await signInWithEmailAndPassword(authentication, email, password)
        dispatch(signInSuccess())
    }
    catch (error) {
        dispatch(signInFailure())

    }
};

export const getInfo = async (dispatch, email) => {
    try {
        let user = {}
        const db = firestore
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            user = doc.data();
            // console.log("service ", user)
        });

        dispatch(signInSuccess(user))
    }
    catch { }
}