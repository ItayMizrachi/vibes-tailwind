import React, { useEffect, useState } from "react";
import { URL, doApiGet } from "../services/apiService";
import Post from "./Post";

const Posts = () => {
  const [postsInfo, setPostsInfo] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      const url = URL + "/userPosts/allposts";
      const data = await doApiGet(url);
      setPostsInfo(data);
      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {postsInfo.map((post) => (
        <Post
          likes={post.likes}
          likesLength={post.likes.length}
          key={post._id}
          _id={post._id}
          user_name={post.user?.user_name}
          profilePic={post.user?.profilePic}
          img_url={post.img_url}
          desc={post.description}
          post={post}
        />
      ))}
    </div>
  );
};

export default Posts;
