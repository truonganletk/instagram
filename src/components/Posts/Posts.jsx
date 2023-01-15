import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/Services";
import Post from "../Post/Post";

// const post_data = [
//   {
//     id: 1,
//     username: "tuanrider",
//     userImg:
//       "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
//     img: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
//     caption: "Search for the keywords to learn more about each error.",
//   },
//   {
//     id: 2,
//     username: "tuanrider",
//     userImg:
//       "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
//     img: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
//     caption: "Search for the keywords to learn more about each error.",
//   },
//   {
//     id: 3,
//     username: "tuanrider",
//     userImg:
//       "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
//     img: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/307377152_3179261345722087_1870285605079943104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EKNsR18880oAX9-J1NA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT97Y9JS0_RbJFR8B-yON8aOCL0rtbswv7GqRf2dBC7qOQ&oe=634D1A43",
//     caption: "Search for the keywords to learn more about each error.",
//   },
// ];


function Posts() {
  const { lists, dispatch } = useContext(PostContext);
  useEffect(() => {
    getLists(dispatch);
  }, [])
  return (
    <div>
      {lists.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
