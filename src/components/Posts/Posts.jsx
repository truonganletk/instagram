import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/services";
import Post from "../Post/Post";
import PostSkeleton from "../Post/PostSkeleton";

function Posts() {
  const [items, setItems] = useState([]);
  const [postIndex, setPostIndex] = useState(0);
  const { lists, dispatch, isFetching } = useContext(PostContext);

  useEffect(() => {
    getLists(dispatch);
  }, []);

  useEffect(() => {
    fetchData();
  }, [lists]);

  const fetchData = () => {
    // console.log("Fetching data...");
    // console.log(lists);

    if (postIndex >= lists.length) return;
    const newItems = [];

    for (let i = postIndex; i < Math.min(postIndex + 1, lists.length); i++) {
      newItems.push(lists[i]);
    }
    
    setPostIndex(postIndex + 1);
    setItems([...items, ...newItems]);
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return !isFetching ? (
    <div>
      {items?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {items.length < lists.length && <PostSkeleton/>}
    </div>
  ) : (
    <PostSkeleton />
  );
}

export default Posts;
