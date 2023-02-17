import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/chatContext/ChatContext";
import { firestore } from "../../firebase-config";
import Message from "./Message";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(firestore, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });
        return () => {
            unSub();
        };
    }, [data.chatId]);

    return (
        <div className="h-[80%] overflow-y-scroll scrollbar-hide px-3 py-3">            
            {messages.map((m) => (
                <Message message={m} key={m.id} />
            ))}
        </div>
    );
};

export default Messages;