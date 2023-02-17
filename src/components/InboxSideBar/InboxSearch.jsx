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

const Search = () => {
    // const [user, setUser] = useState(null);
    // const [err, setErr] = useState(false);
    const [result, setResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const { user: currentUser } = useContext(AuthContext);

    const querySearch = async (search) => {
        let users = [];
        try {
            const q = query(collection(firestore, "users"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                if (doc.data().username.includes(search)) {
                    users.push({...doc.data(),id:doc.id});
                }
            });
            setResult(users);
            // console.log(users);

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
        } else {
            // console.log("tuanrider");
        }
    }, [debounceSearchTerm]);

    const handleSelect = async (user) => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
            currentUser.id > user.id
                ? currentUser.id + user.id
                : user.id + currentUser.id;
        console.log(combinedId);
        
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
    };

    return (
        <div className="">
            <div className="searchForm">
                <input
                    type="text"
                    placeholder="Find a user"
                    onChange={handleChange}
                    value={searchTerm}
                />
            </div>
            {/* {err && <span>User not found!</span>} */}
            {result.length > 0 &&
                result.map((user) => {
                    {
                        return <div
                        key={user.id}  
                        className="userChat" 
                        onClick={()=>{
                            handleSelect(user);
                        }}>
                            <img src={user.avatar} alt="" />
                            <div className="userChatInfo">
                                <span>{user.username}</span>
                            </div>
                        </div>
                    }
                })}
        </div>
    );
};

export default Search;