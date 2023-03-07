import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/services";
import Post from "../Post/Post";
import PostSkeleton from "../Post/PostSkeleton";

function Posts() {
  const { lists, dispatch, isFetching  } = useContext(PostContext);

  useEffect(() => {
    getLists(dispatch);
  }, []);

  return (
    !isFetching ?
    <div>
      {lists?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div> : 
    <PostSkeleton/>
  );
}

export default Posts;
