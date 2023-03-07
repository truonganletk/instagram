import React from "react";
import { Skeleton } from "@mui/material";
import { Icon } from "../../asset/icons";

function PostSkeleton() {
  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white dark:border-ig-dark-elevated-separator  mb-7 border rounded-lg">
        {/* header section */}
        <div className="flex px-5 py-3 items-center justify-between">
          <div className="flex items-center ">
          <div className={`h-10 w-10 mr-3`}>
            <Skeleton
                className="dark:bg-ig-dark-elevated-separator"
              variant="circular"
              width="100%"
              height="100%"
              animation="wave"
            />
          </div>

          <Skeleton className="dark:bg-ig-dark-elevated-separator" animation="wave" height={20} width="80px" />
          <Skeleton
            animation="wave"
            className="ml-2 dark:bg-ig-dark-elevated-separator"
            height={20}
            width="60px"
          />
          </div>

          <div className="cursor-pointer">{Icon("more")}</div>
        </div>

        {/* image section */}

        <Skeleton
          variant="rectangular"
          animation="wave"
          height={470}
          className={`w-full dark:bg-ig-dark-elevated-separator`}
        />
        <div className="px-5 py-5">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>{Icon("heart")}</div>

              <div>{Icon("comment")}</div>

              {Icon("direct")}
            </div>
            {Icon("save")}
          </div>
          <div className={`my-3 flex items-center justify-start`}>
            <div className="flex flex-col w-[70%]">
              <Skeleton
                variant="rectangular"
                className="w-[70%] h-5 mb-2 dark:bg-ig-dark-elevated-separator"
                animation="wave"
              />
              <Skeleton
                variant="rectangular"
                className="w-[60%] h-5 dark:bg-ig-dark-elevated-separator"
                animation="wave"
              />
            </div>
          </div>

          <p className="cursor-pointer hover:opacity-30" onClick={() => {}}>
            View all comments
          </p>
        </div>
        {/* input section */}
        <div className="flex items-center px-5 py-3 justify-between border-t-[0.875px] dark:border-ig-dark-elevated-separator">
          {Icon("emoji")}

          <input
            className="flex-1 border-none focus:outline-none dark:bg-black dark:text-white"
            type="text"
            placeholder="Add a comment ..."
          />
          <button className="text-ig-primary-button font-bold">Post</button>
        </div>
      </div>
    </>
  );
}

export default PostSkeleton;
