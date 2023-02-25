import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/Services";
import Post from "../Post/Post";

function Posts() {
  const { lists, dispatch } = useContext(PostContext);

  useEffect(() => {
    getLists(dispatch);
  }, []);

  return (
    <div>
      {lists?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
