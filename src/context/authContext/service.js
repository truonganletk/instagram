import {
  createUserWithEmailAndPassword,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updateEmail,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
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
  updateInfo,
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
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().fullname);
      users.push(doc.data());
    });
    console.log("service ", users);
    dispatch(getAllUsersSuccess(users));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const updateProfile = async (dispatch, value) => {
  try {
    // console.log(getAuth().currentUser.email,' ');
    if (getAuth().currentUser.email != value.email) {
      //....
      console.log("đổi email");
    } else {
      dispatch(updateInfo(value));
      const db = firestore;

      let id = "";
      const q = query(
        collection(db, "users"),
        where("email", "==", value.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        id = doc.id;
      });

      const refUpdate = doc(db, "users", id);
      await updateDoc(refUpdate, {
        username: value.username,
        // email: value.email,
        fullname: value.fullname,
      })
        .then(() => {
          alert("updated");
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    }
  } catch {
    (error) => {
      throw new Error(error.message);
    };
  }
};
