import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { changeUser } from "../../context/chatContext/chatActions";
import { ChatContext } from "../../context/chatContext/ChatContext";
import FirebaseContext from "../../context/firebaseContext/firebase";
import InboxCard from "../InboxCard/InboxCard";

function BoxDirect() {
  const [chats, setChats] = useState([]);
  const { user } = useContext(AuthContext);
  const { firestore } = useContext(FirebaseContext);
  const { data,dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(firestore, "userChats", user.id), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    user.id && getChats();
  }, [user.id]);

  const handleSelect = (u) => {
    dispatch(changeUser(u));
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide h-[92%]">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <InboxCard
              name={chat[1].userInfo.username}
              text={chat[1].lastMessage?.text}
              avatar={chat[1].userInfo.avatar}
              active={chat[0]===data.chatId}
            />
          </div>
        ))}
    </div>
  );
}

export default BoxDirect;
