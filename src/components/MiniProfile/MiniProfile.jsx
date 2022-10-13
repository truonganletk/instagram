import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mb-[10px]">
      <img
        className="w-16 h-16 rounded-full p-[2px] mr-3"
        src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43"
        alt="profile-avatar"
      />
      <div className="mr-auto">
        <h2>tuanrider</h2>
        <p>Tuan Rider</p>
      </div>

      <button className="cursor-pointer">Switch</button>
    </div>
  );
}

export default MiniProfile;
