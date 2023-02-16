import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updateEmail,
  // updateEmail,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase-config";
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
  reAuthEnd,
  reAuth,
} from "./AuthAction";

export const signIn = async (dispatch, email, password) => {
  dispatch(signInStart());
  // console.log(email, password);
  try {
    const authentication = getAuth();
    await signInWithEmailAndPassword(authentication, email, password);
    dispatch(signInSuccess());
  } catch (error) {
    dispatch(signInFailure());
  }
};

export const signUp = async (dispatch, values) => {
  dispatch(signUpStart());
  console.log(values);
  try {
    const authentication = getAuth();
    await createUserWithEmailAndPassword(
      authentication,
      values.email,
      values.password
    ).then((response) => {
      sessionStorage.setItem(
        "Auth Token",
        response._tokenResponse.refreshToken
      );
    });
    await setDoc(doc(firestore, "users", getAuth().currentUser.uid), {
      email: values.email,
      username: values.username,
      fullname: values.username,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/instagram-f4e13.appspot.com/o/avatar%2Fdefault-avatar-profile.jpg?alt=media&token=a50eb747-c832-4173-a037-2be77e8bd913",
      number_of_posts: 0,
      number_of_followers: 0,
      number_of_following: 0,
    });
    updateProfile(getAuth().currentUser, {
      displayName: values.username,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/instagram-f4e13.appspot.com/o/avatar%2Fdefault-avatar-profile.jpg?alt=media&token=a50eb747-c832-4173-a037-2be77e8bd913",
    });
    dispatch(signUpSuccess());
  } catch (error) {
    console.log(error);
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

export const getInfo = async (dispatch) => {
  try {
    const email = getAuth().currentUser.email;
    let user = {};
    const db = firestore;
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user = doc.data();
      user = { ...user, id: doc.id };
    });

    const imagesRef = ref(storage, `avatar/${user.avatar}`);
    await getDownloadURL(imagesRef).then((url) => {
      user = { ...user, url: url };
    });
    // console.log("service ", user);
    dispatch(getInfoSuccess(user));
  } catch (error) {
    dispatch(getInfoFailure());
    console.log("error", error);
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
    // console.log("service ", users);
    dispatch(getAllUsersSuccess(users));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const updateProfile = async (dispatch, value, navigate) => {
  const db = firestore;
  let id = "";
  const q = query(
    collection(db, "users"),
    where("email", "==", getAuth().currentUser.email)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    id = doc.id;
  });
  const refUpdate = doc(db, "users", id);

  try {
    if (getAuth().currentUser.email != value.email) {
      dispatch(updateInfo(value));
      dispatch(reAuth());
      await updateDoc(refUpdate, {
        email: value.email,
        username: value.username,
        fullname: value.fullname,
      });
      navigate("/login");
    } else {
      dispatch(updateInfo(value));

      await updateDoc(refUpdate, {
        username: value.username,
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

export const reLogin = async (dispatch, email, password) => {
  try {
    const auth = getAuth();
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    );
    await reauthenticateWithCredential(auth.currentUser, credential).then(
      () => {
        updateEmail(auth.currentUser, email);
      }
    );
    dispatch(reAuthEnd());
  } catch (error) {
    console.log(error);
  }
};
