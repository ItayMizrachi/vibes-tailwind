import React, { useContext } from "react";
import { MyContext } from "../context/myContext";
import Post from "./Post";

const Posts = () => {
  const { postsInfo } = useContext(MyContext);

  return (
    <div>
      {postsInfo.map((post) => (
        <Post
          likes={post.likes}
          likesLength={post.likes.length}
          key={post._id + Math.random()}
          _id={post._id}
          user_name={post.user?.user_name}
          profilePic={post.user?.profilePic}
          img_url={post.img_url}
          desc={post.description}
        />
      ))}
      {/* <Intersector /> */}
    </div>
  );
};

export default Posts;
