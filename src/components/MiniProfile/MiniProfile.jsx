import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mb-[10px]">
      <img
        className="w-16 h-16 rounded-full p-[2px] mr-3"
        src="https://picsum.photos/200"
        alt="profile-avatar"
      />
      <div className="mr-auto">
        <h2>tuanrider</h2>
        <p className="text-ig-secondary-text">Tuan Rider</p>
      </div>

      <button className="cursor-pointer">Switch</button>
    </div>
  );
}

export default MiniProfile;
