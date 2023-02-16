import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/Services";
import Post from "../Post/Post";

function Posts() {
  const { lists, dispatch } = useContext(PostContext);
  useEffect(() => {
    getLists(dispatch);
  }, [])
  // console.log(lists);


  return (
    <div>
      {lists?.map((post,index) => (
        <Post
          key={index}
          post={post}
          // id={post.id}
          // userCreatedId={post.post_created_by}
          // userImg={post?.img}
          // img={post?.img}
          // caption={post?.post_content}
        />
      ))}
    </div>
  );
}

export default Posts;
