import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile as updateProfileFirebase,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
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
  getInfoStart,
  getInfoSuccess,
  getInfoFailure,
  updateInfo,
  reAuthEnd,
  reAuth,
} from "./authAction";
import { v4 as uuid } from "uuid";
import { createNotification } from "../firebaseContext/services";

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

export const signUp = async (dispatch, values) => {
  dispatch(signUpStart());
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
      follower: [],
      follow: [],
    });
    await updateProfileFirebase(getAuth().currentUser, {
      displayName: values.username,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/instagram-f4e13.appspot.com/o/avatar%2Fdefault-avatar-profile.jpg?alt=media&token=a50eb747-c832-4173-a037-2be77e8bd913",
    });
    await setDoc(doc(firestore, "userChats", getAuth().currentUser.uid), {});
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
  dispatch(getInfoStart());
  try {
    let user = getAuth().currentUser;
    const ref = doc(firestore, "users", user.uid);
    const res = await getDoc(ref);
    user = { ...user, ...res.data(), id: res.id };
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
    dispatch(getAllUsersSuccess(users));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const updateData = async () => {
  try {
    const currentId = getAuth().currentUser.uid;
    const ref = doc(firestore, "users", currentId);
    const newData = await getDoc(ref);

    // update user (following, follower)
    const querySnapshot = await getDocs(query(collection(firestore, "users")));
    querySnapshot.forEach(async (user) => {
      const follow = user.data().follow;
      const followChange = follow.find(res => res.id === currentId);
      if (followChange) {
        await updateDoc(doc(firestore, "users", user.id), {
          follow: [...follow.filter(res => res.id !== currentId), { id: currentId, username: newData.data().username }]
        });
      }
      const follower = user.data().follower;
      const followerChange = follower.find(res => res.id === currentId);
      if (followerChange) {
        await updateDoc(doc(firestore, "users", user.id), {
          follower: [...follower.filter(res => res.id !== currentId), { id: currentId, username: newData.data().username }]
        });
      }
    });

    const querySnapshotUserChats = await getDocs(query(collection(firestore, "userChats")));
    querySnapshotUserChats.forEach(async (userChat) => {
      Object.entries(userChat.data()).map(async (chat) => {
        if (chat[1].userInfo.id === currentId) {
          await updateDoc(doc(firestore, "userChats", userChat.id), {
            [chat[0]]: { ...chat[1], userInfo: { ...chat[1].userInfo, username: newData.data().username, avatar: newData.data().avatar } }
          });
        }
      })
    })

    const querySnapshotPosts = await getDocs(query(collection(firestore, "posts")));
    querySnapshotPosts.forEach(async (post) => {
      const like = post.data().like;
      const likeChange = like.find(res => res.id === currentId);
      if (likeChange) {
        await updateDoc(doc(firestore, "posts", post.id), {
          like: [...like.filter(res => res.id !== currentId), { id: currentId, username: newData.data().username }]
        });
      }
      const querySnapshotComments = await getDocs(query(collection(firestore, "posts", post.id, 'comment')));
      querySnapshotComments.forEach(async (comment) => {
        
        const newReply = [];
        comment.data().reply.map((reply) => {
          if (reply.user_id === currentId) {
            newReply.push({ ...reply, user: newData.data().username, avatar: newData.data().avatar })
          } else {
            newReply.push(reply)
          }
        })

        if (comment.data().user_id === currentId) {
          await updateDoc(doc(firestore, "posts", post.id, 'comment', comment.id), {
            user: newData.data().username,
            avatar: newData.data().avatar,
            reply: newReply
          });
        } else {
          await updateDoc(doc(firestore, "posts", post.id, 'comment', comment.id), {
            reply: newReply
          });
        }
        
      })
    });

  } catch (error) {
    confirm(error.message)
  }

}

export const updateProfile = async (dispatch, value, navigate) => {
  const ref = doc(firestore, "users", getAuth().currentUser.uid);

  try {
    if (getAuth().currentUser.email != value.email) {
      dispatch(updateInfo(value));
      dispatch(reAuth());
      await updateDoc(ref, {
        email: value.email,
        username: value.username,
        fullname: value.fullname,
      });
      navigate("/login");
    } else {
      dispatch(updateInfo(value));

      await updateDoc(ref, {
        username: value.username,
        fullname: value.fullname,
      })
        .catch((error) => {
          throw new Error(error.message);
        });
    }
    await updateData();
    await getInfo(dispatch);
    alert("updated");
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

export const updatePhotoProfile = async (dispatch, img) => {
  try {
    const storageRef = ref(storage, `/avatar/${uuid()}`);
    await uploadBytesResumable(storageRef, img).then(async () => {
      await getDownloadURL(storageRef).then(async (url) => {
        await updateDoc(doc(firestore, "users", getAuth().currentUser.uid), {
          avatar: url,
        });
        await updateProfile(getAuth().currentUser, {
          photoURL: url,
        });
      });
    });
    await getAllUsers(dispatch)
    await getInfo(dispatch);
    await updateData();
  } catch (error) {
    console.log(error);
  }
};

export const removePhotoProfile = async (dispatch) => {
  try {
    await updateDoc(doc(firestore, "users", getAuth().currentUser.uid), {
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/instagram-f4e13.appspot.com/o/avatar%2Fdefault-avatar-profile.jpg?alt=media&token=a50eb747-c832-4173-a037-2be77e8bd913",
    });
    await updateProfile(getAuth().currentUser, {
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/instagram-f4e13.appspot.com/o/avatar%2Fdefault-avatar-profile.jpg?alt=media&token=a50eb747-c832-4173-a037-2be77e8bd913",
    });
    await getAllUsers(dispatch)
    await getInfo(dispatch);
    await updateData();
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (dispatch, oldPassword, newPassword) => {
  dispatch(signInStart());
  try {
    const auth = getAuth();
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      oldPassword
    );
    await reauthenticateWithCredential(auth.currentUser, credential).then(
      () => {
        updatePassword(auth.currentUser, newPassword);
      }
    );
  } catch (error) {
    dispatch(signInFailure());
    console.log(error);
  }
};

export const followUser = async (dispatch, id, username) => {
  const user = getAuth().currentUser;
  const ref = doc(firestore, "users", id);
  const refCurrentUser = doc(firestore, "users", user.uid);
  try {
    let userFollower = (await getDoc(ref)).data().follower || [];
    let userFollow = (await getDoc(refCurrentUser)).data().follow || [];
    const find = userFollower.find((i) => i.id === user.uid);
    if (find) {
      userFollower = userFollower.filter((i) => i.id != user.uid);
      userFollow = userFollow.filter((i) => i.id != id);
    } else {
      userFollower.push({
        username: user.displayName,
        id: user.uid,
      });
      userFollow.push({
        username: username,
        id: id,
      });
      await createNotification(
        id,
        user.photoURL,
        ` has started following you`,
        `/${user.displayName}`
      );
    }
    await updateDoc(refCurrentUser, {
      follow: userFollow,
    });
    await updateDoc(ref, {
      follower: userFollower,
    });
    await getInfo(dispatch);
    await getAllUsers(dispatch);
  } catch (error) {
    console.log(error);
  }
};
