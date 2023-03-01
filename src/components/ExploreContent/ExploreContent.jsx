import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/services";
import Postpreview from "../Post/Post-preview";

function ExploreContent() {
  const n = 50;
  let template = [];
  for (let index = 0; index < n; index++) {
    template.push({
      span: Math.floor(Math.random() * 100),
    });
  }

  const { lists, dispatch } = useContext(PostContext);

  useEffect(() => {
    getLists(dispatch);
  }, []);

  return (
    <div className="grid grid-cols-3 md:gap-4 lg:mx-[250px] sm:mx-10 mt-10">
      {lists.map((post, index) => {
        return (
          <div
            key={index}
            className={`group lg:h-72 min-h-full ${
              Math.floor(Math.random() * 100) > 80 ? "row-span-2" : ""
            }`}
          >
            <Postpreview key={index} post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default ExploreContent;
