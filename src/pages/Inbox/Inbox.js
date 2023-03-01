import React from "react";
import BoxChat from "../../components/BoxChat/BoxChat";
import InboxSideBar from "../../components/InboxSideBar/InboxSideBar";

function Inbox() {
  return (
    <>
      <div className="container flex justify-center m-auto mt-10">
        <div className="flex border border-gray-300 dark:border-ig-dark-elevated-separator lg:mx-auto w-[96%] bg-white dark:bg-black dark:text-white  h-[84vh]">
          <InboxSideBar />
          <BoxChat />
        </div>
      </div>
    </>
  );
}

export default Inbox;
