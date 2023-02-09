import React, { useState, useEffect } from "react";

function Suggestion() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      userName: "tuanrider",
      avatar:
        "https://picsum.photos/200",
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-[10px]">
        <h2>Suggestions For You</h2>
        <a className="cursor-pointer" href="">
          See all
        </a>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mb-[10px]"
        >
          <img
            className="w-10 h-10 rounded-full p-[2px] mr-3"
            src={profile.avatar}
            alt=""
          />
          <div className="mr-auto">
            <h2>{profile.userName}</h2>
            <p>
              <small>New to Instagram</small>
            </p>
          </div>
          <button className="cursor-pointer text-ig-primary-button">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestion;
