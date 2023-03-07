import { Skeleton } from "@mui/material";
import React from "react";

function SuggestionSkeletion() {
  return (
    <div className={` flex items-center justify-start mb-[10px]`}>
      <div className="w-10 h-10 rounded-full mr-3">
        <Skeleton
          className="dark:bg-ig-dark-elevated-separator"
          variant="circular"
          width="100%"
          height="100%"
          animation="wave"
        />
      </div>
      <div className="flex flex-col w-[70%]">
        <Skeleton
          variant="rectangular"
          className="w-[70%] h-3 mb-2 dark:bg-ig-dark-elevated-separator"
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          className="w-[60%] h-3 dark:bg-ig-dark-elevated-separator"
          animation="wave"
        />
      </div>
    </div>
  );
}

export default SuggestionSkeletion;
