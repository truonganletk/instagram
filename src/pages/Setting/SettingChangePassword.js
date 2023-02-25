import React from "react";
import ChangePassword from "../../components/SettingBox/ChangePassword";
import SettingSidebar from "../../components/SettingBox/SettingSidebar";

function SettingChangePassword() {
  return (
    <>
      <div className="container flex justify-center m-auto mt-10">
        <div className="flex border border-gray-300 lg:mx-auto h-[700px] w-[96%] bg-white">
          <SettingSidebar />
          <ChangePassword />
        </div>
      </div>
    </>
  );
}

export default SettingChangePassword;
