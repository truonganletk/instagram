import { getListsFailure, getListsStart, getListsSuccess } from "./postActions";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { getAuth } from "firebase/auth";
import { createNotification } from "../firebaseContext/services";

export const getLists = async (dispatch) => {
  let list = [];
  dispatch(getListsStart());
  try {
    const res = await getDocs(query(collection(firestore, "posts"), orderBy("post_created_date", "desc")));
    res.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(getListsSuccess(list));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

export const createPost = async (dispatch, caption, userId, Img) => {
  try {
    const storageRef = ref(storage, `/images/${uuid()}`);
    await uploadBytesResumable(storageRef, Img).then(async () => {
      await getDownloadURL(storageRef).then(async (url) => {
        const post = {
          post_content: caption,
          like: [],
          post_created_date: Timestamp.now(),
          post_created_by: userId,
          img: url,
        };
        await addDoc(collection(firestore, "posts"), post);
      });
    });
    const currentUser = (
      await getDoc(doc(firestore, "users", getAuth().currentUser.uid))
    ).data();
    currentUser.follower.forEach(async (u) => {
      await createNotification(
        u.id,
        currentUser.avatar,
        ` have posted a new post`,
        "/"
      );
    });
    getLists(dispatch);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (dispatch, id, caption) => {
  const refUpdate = doc(firestore, "posts", id);
  try {
    await updateDoc(refUpdate, {
      post_content: caption,
    });
    getLists(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (dispatch, id) => {
  try {
    await deleteDoc(doc(firestore, "posts", id));
    getLists(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const handleLikePost = async (dispatch, id) => {
  const user = getAuth().currentUser;
  const refUpdate = doc(firestore, "posts", id);
  try {
    const post = (await getDoc(refUpdate)).data();

    const find = post.like.find((i) => i.id === user.uid);

    if (find) {
      post.like = post.like.filter((i) => i.id != user.uid);
    } else {
      await post.like.push({
        username: user.displayName,
        id: user.uid,
      });
      await createNotification(
        post.post_created_by,
        post.img,
        ` has been liked your post`,
        "/"
      );
    }
    await updateDoc(refUpdate, {
      like: post.like,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleCommentPost = async (dispatch, postId, text) => {
  const user = getAuth().currentUser;
  try {
    const comment = {
      text: text,
      user: user.displayName,
      avatar: user.photoURL,
      user_id: user.uid,
      createdAt: Timestamp.now(),
      reply: [],
    };

    await addDoc(collection(firestore, "posts", postId, "comment"), comment);
  } catch (error) {
    console.log(error);
  }
};

export const handleReply = async (dispatch, postID, cmtID, replyTo, text) => {
  const user = getAuth().currentUser;
  const refUpdate = doc(firestore, "posts", postID, "comment", cmtID);
  try {
    const comment = (await getDoc(refUpdate)).data();
    comment.reply.push({
      replyTo: replyTo,
      text: text,
      user: user.displayName,
      avatar: user.photoURL,
      user_id: user.uid,
      createdAt: Timestamp.now(),
    });
    await updateDoc(refUpdate, {
      reply: comment.reply,
    });
  } catch (error) {
    console.log(error);
  }
};
