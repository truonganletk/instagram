import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { v4 as uuid } from "uuid";
import { getAuth } from "firebase/auth";

export const createNotification = async (id, image, content, url) => {
  const user = getAuth().currentUser;
  if (user.uid === id) return;
  const ref = doc(firestore, "notifications", id);
  const results = await getDoc(ref);
  if (!results.exists()) await setDoc(ref, { notifications: [] });
  await updateDoc(ref, {
    notifications: arrayUnion({
      id: uuid(),
      user: user.displayName,
      content,
      image,
      date: Timestamp.now(),
      status: false,
      url,
    }),
  });
};
