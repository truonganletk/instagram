import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import {
  getAllUsersFailure,
  getAllUsersSuccess,
  signInFailure,
  signInStart,
  signInSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
  LogOut,
  getInfoSuccess,
  getInfoFailure,
} from "./AuthAction";

export const signIn = async (dispatch, email, password) => {
  dispatch(signInStart());

  try {
    const authentication = getAuth();
    await signInWithEmailAndPassword(authentication, email, password);
    dispatch(signInSuccess());
  } catch (error) {
    dispatch(signInFailure());
  }
};

export const signUp = async (dispatch, email, password) => {
  dispatch(signUpStart());

  try {
    const authentication = getAuth();
    await createUserWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
    dispatch(signUpSuccess());
  } catch (error) {
    dispatch(signUpFailure());
  }
};

export const logOut = async (dispatch) => {
  try {
    const authentication = getAuth();
    await authentication.signOut();
    dispatch(LogOut());
  } catch (err) {
    throw new Error(err);
  }
};

export const getInfo = async (dispatch, email) => {
  try {
    let user = {};
    const db = firestore;
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      user = doc.data();
      user = { ...user, id: doc.id };
      // console.log("service ", user)
    });
    // console.log("service ", user);
    dispatch(getInfoSuccess(user));
  } catch (error) {
    dispatch(getInfoFailure());
  }
};

export const getAllUsers = async (dispatch) => {
  try {
    let users = [];
    const db = firestore;
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log("service ", users);
    dispatch(getAllUsersSuccess(users));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};
