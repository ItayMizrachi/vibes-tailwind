import React from "react";
import { usePostInfo } from "../hooks/usePostInfo";
import Post from "./Post";

const Posts = () => {
  // const { postsInfo, Intersector } = useContext(MyContext);
  const { postsInfo, Intersector } = usePostInfo();

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
          user_id={post.user?._id}
        />
      ))}
      {/* <Intersector /> */}
    </div>
  );
};

export default Posts;
