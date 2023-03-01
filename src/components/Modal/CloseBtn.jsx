import React from "react";
import { Icon } from "../../asset/icons";

function CloseBtn() {
  return (
    <button
      type="button"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {Icon("close")}
      <span className="sr-only">Close modal</span>
    </button>
  );
}

export default CloseBtn;
