import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import { changeUser } from '../../context/chatContext/ChatActions';
import { ChatContext } from '../../context/chatContext/ChatContext';
import FirebaseContext from '../../context/firebase';
import InboxCard from '../InboxCard/InboxCard'

function BoxDirect() {

    const [chats, setChats] = useState([]);
    const { user } = useContext(AuthContext);
    const { firestore } = useContext(FirebaseContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(firestore, "userChats", user.id), (doc) => {
                setChats(doc.data());
                // console.log(user.id);
            });

            return () => {
                unsub();
            };
        };

        user.id && getChats();
    }, [user.id]);


    const handleSelect = (u) => {
        // console.log(u);
        dispatch(changeUser(u));
    };

    return (
        <div className='overflow-y-scroll scrollbar-hide h-[92%]'>
            {/* <div className='text-center py-4 border-b border-b-gray-300 font-bold mb-1'>
                <h3>Direct</h3>
            </div> */}
            {/* <InboxCard name="Client 1" text="1 minute ago" active="true" />
                <InboxCard name="Client 2" text="215 minute ago" />
                <InboxCard name="Client 4" text="215 minute ago" />
                <InboxCard name="Client 5" text="215 minute ago" />
                <InboxCard name="Client 61" text="215 minute ago" />
                <InboxCard name="Client 8" text="215 minute ago" />
                <InboxCard name="Client 6" text="215 minute ago" />
                <InboxCard name="Client 10" text="215 minute ago" />
                <InboxCard name="Client 616" text="215 minute ago" />
            <InboxCard name="Client 3" text="51 minute ago" /> */}

            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                <div key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <InboxCard
                        name={chat[1].userInfo.username}
                        text={chat[1].lastMessage?.text} 
                        avatar={chat[1].userInfo.avatar}
                    />

                </div>

                // <div
                //     className="userChat"
                //     key={chat[0]}
                //     onClick={() => handleSelect(chat[1].userInfo)}
                // >
                //     <img src={chat[1].userInfo.photoURL} alt="" />
                //     <div className="userChatInfo">
                //         <span>{chat[1].userInfo.displayName}</span>
                //         <p>{chat[1].lastMessage?.text}</p>
                //     </div>
                // </div>
            ))}
        </div>
    )
}

export default BoxDirect