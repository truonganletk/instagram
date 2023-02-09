import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase-config";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const querySearch = async (search) => {
    let users = [];
    try {
      const db = firestore;
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.data().username.includes(search)) {
          users.push(doc.data());
        }
      });
      setResult(users);
    } catch (error) {
      throw new Error(error);
    }
  };

  const debounceSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debounceSearchTerm) {
      querySearch(debounceSearchTerm);
    } else {
      console.log("tuanrider");
    }
  }, [debounceSearchTerm]);
  console.log(result, ">>>>>>>>", debounceSearchTerm);
  return (
    <>
      <div className="flex flex-col relative">
        <div className="hidden bg-gray-100 sm:flex p-2 rounded-md max-w-xs sm:basis-1/3">
          <button className="btn btn-square mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <input
            value={searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Search…"
            className="input input-bordered bg-transparent flex-auto focus:outline-none"
          />
        </div>
        {result.length > 0 && debounceSearchTerm && (
          <ul className="w-full bg-white rounded absolute top-[3rem] left-0 shadow-xl">
            {result.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-x-4 p-3 border-b cursor-pointer hover:bg-gray-100"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://nftavatarmaker.com/assets/slide/koala-2.png"
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium">{item.username}</p>
                  <p className="text-xs text-ig-secondary-text font-normal">
                    {item.fullname}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
