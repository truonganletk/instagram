import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getLists } from "../../context/postContext/Services";
// import { getAllUsers } from "../../context/authContext/service";
import Post from "../Post/Post";
// import { AuthContext } from "../../context/authContext/AuthContext";

function Posts() {
  const { lists, dispatch } = useContext(PostContext);
  // const { users, dispatch: authdispatch } = useContext(AuthContext);
  // const [ img, setImg ] = useState();
  // const { storage } = useContext(FirebaseContext);

  useEffect(() => {
    getLists(dispatch);
    // getAllUsers(authdispatch);
    // Points to the root reference
    // const storageRef = ref(storage);
    // const imagesRef = ref(storageRef, 'images');
    // // road-1072821__480.jpg

    // const fileName = 'road-1072821__480.jpg';
    // getDownloadURL(ref(imagesRef, fileName)).then((url) => {
    //   setImg(url);
    // })
    // console.log(spaceRef.fullPath);
  }, [])
  // console.log(users);
  // console.log(lists);


  return (
    <div>
      {lists.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.img}
          img={post.img}
          caption={post.post_content}
        />
      ))}
    </div>
  );
}

export default Posts;
