import React from "react";
import BoxDirect from "./BoxDirect";
import InboxNav from "./InboxNav";

function InboxSideBar() {
  return (
    <div className="border-r border-r-gray-300 dark:border-ig-dark-elevated-separator basis-4/12 hidden md:block overflow-hidden">
      <InboxNav />
      <BoxDirect />
    </div>
  );
}

export default InboxSideBar;
