import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase-config";
import useDebounce from "../../hooks/useDebounce";
import { Link } from "react-router-dom";
import { Icon } from "../../asset/icons";

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
    }
  }, [debounceSearchTerm]);
  return (
    <>
      <div className="flex flex-col relative">
        <div className="hidden bg-gray-100 sm:flex p-2 rounded-md max-w-xs sm:basis-1/3">
          <button className="btn btn-square mr-3">{Icon("search")}</button>

          <input
            value={searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Search…"
            className="input input-bordered bg-transparent flex-auto focus:outline-none"
          />
        </div>
        {result.length > 0 && debounceSearchTerm && (
          <ul className="w-full bg-white rounded absolute top-[3rem] left-0 shadow-xl z-50 ">
            {result.map((item, index) => (
              <Link
                to={`/${item.username}`}
                onClick={() => {
                  setSearchTerm("");
                  setResult([]);
                }}
                key={index}
                className="flex items-center gap-x-4 p-3 border-b cursor-pointer hover:bg-gray-100"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={item.avatar}
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium">{item.username}</p>
                  <p className="text-xs text-ig-secondary-text font-normal">
                    {item.fullname}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
