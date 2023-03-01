import React from "react";
import SettingSidebar from "../../components/SettingBox/SettingSidebar";
import EditProfile from "../../components/SettingBox/EditProfile";

function SettingEdit() {
  return (
    <>
      <div className="container flex justify-center m-auto mt-10">
        <div className="flex border border-gray-300 dark:border-ig-dark-elevated-separator lg:mx-auto w-[96%] bg-white min-h-max dark:bg-black dark:text-white">
          <SettingSidebar />
          <EditProfile />
        </div>
      </div>
    </>
  );
}

export default SettingEdit;
