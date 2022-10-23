import React, { useState, useEffect } from "react";

function Suggestion() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      userName: "tuanrider",
      avatar:
        "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
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
