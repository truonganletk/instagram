import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { ChatContext } from "../../context/chatContext/ChatContext";
import { firestore, storage } from "../../firebase-config";
import { v4 as uuid } from "uuid";
import { Icon } from "../../asset/icons";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { user } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    setText("");
    if (img) {
      const storageRef = ref(storage, `/image_message/${uuid()}`);

      await uploadBytesResumable(storageRef, img).then(
        (
          (error) => {
            //TODO:Handle Error
            confirm(error.message);
          },
          async () => {
            await getDownloadURL(storageRef).then(async (downloadURL) => {
              await updateDoc(doc(firestore, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: user.id,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            });
          }
        )
      );
    } else {
      await updateDoc(doc(firestore, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.id,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(firestore, "userChats", user.id), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(firestore, "userChats", data.user.id), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setImg(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="absolute bottom-2 left-0 right-0">
      <div className="px-3 relative">
        <input
          className="text-gray-700 dark:bg-ig-dark-secondary-background dark:text-white border border-gray-3 dark:border-ig-dark-elevated-separator w-full rounded-md py-2 pr-14 pl-11"
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute top-2 right-16">
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file" className="cursor-pointer h-6 w-6 block text-white">
            {Icon("image")}
          </label>
        </div>
        <div className="absolute top-2 left-6 cursor-pointer">
          {Icon("emoji")}
        </div>
        <button
          disabled={text.length == 0 && img == null}
          className={`absolute top-2 right-6 ${text.length > 0 || img != null ? "text-blue-500" : ""
            }`}
          onClick={handleSend}
        >
          {Icon("direct")}
        </button>
      </div>
    </div>
  );
};

export default Input;
