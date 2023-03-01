import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { AuthContext } from "../../context/authContext/AuthContext";
import { firestore } from "../../firebase-config";
import useDebounce from "../../hooks/useDebounce";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { hideModal } from "../../context/modalContext/modalActions";
import { changeUser } from "../../context/chatContext/chatActions";
import { ChatContext } from "../../context/chatContext/ChatContext";

const Search = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useContext(ModalContext);
  const { dispatch: chatDispatch } = useContext(ChatContext);

  const { user: currentUser } = useContext(AuthContext);

  const querySearch = async (search) => {
    let users = [];
    try {
      const q = query(collection(firestore, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.data().username.includes(search) && doc.id != currentUser.id) {
          users.push({ ...doc.data(), id: doc.id });
        }
      });
      setResult(users);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debounceSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debounceSearchTerm) {
      querySearch(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  const handleSelect = async (user) => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.id > user.id
        ? currentUser.id + user.id
        : user.id + currentUser.id;

    try {
      const res = await getDoc(doc(firestore, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(firestore, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(firestore, "userChats", currentUser.id), {
          [combinedId + ".userInfo"]: {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
          },
          [combinedId + ".date"]: Timestamp.now(),
        });

        await updateDoc(doc(firestore, "userChats", user.id), {
          [combinedId + ".userInfo"]: {
            id: currentUser.id,
            username: currentUser.username,
            avatar: currentUser.avatar,
          },
          [combinedId + ".date"]: Timestamp.now(),
        });
      }
    } catch (err) {
      console.log(err);
    }

    setResult([]);
    setSearchTerm("");
    await chatDispatch(changeUser(user));
    dispatch(hideModal());
  };

  return (
    <div className="p-3 h-[400px] w-[320px] md:min-w-[800px]">
      <input
        className="w-full text-gray-700 border border-gray-3 rounded-md py-2 px-5 dark:bg-ig-dark-highlight-background dark:border-ig-dark-elevated-separator dark:text-white"
        type="text"
        placeholder="Find a user"
        onChange={handleChange}
        value={searchTerm}
      />
      <div className="max-h-[79%] overflow-y-scroll scrollbar-hide">
        {result.length > 0 &&
          result.map((user) => {
            {
              return (
                <div
                  key={user.id}
                  className="flex items-center my-3 gap-x-4 p-3 border dark:border-ig-dark-elevated-separator cursor-pointer hover:dark:bg-ig-dark-highlight-background"
                  onClick={() => {
                    handleSelect(user);
                  }}
                >
                  <img
                    loading="lazy"
                    className="h-10 w-10 rounded-full"
                    src={user.avatar}
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-medium">{user.username}</p>
                    <p className="text-xs text-ig-secondary-text font-normal">
                      {user.fullname}
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
      {result.length == 0 && searchTerm.length > 0 && (
        <span>User not found!</span>
      )}
    </div>
  );
};

export default Search;
