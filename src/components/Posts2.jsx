import { useLazyLoading } from "mg-js";
import React, { useEffect, useState } from "react";
import { URL, doApiGet } from "../services/apiService";
import Post from "./Post";

const Posts2 = () => {
  const [posts, setPosts] = useState([]);
  const [Intersector, data, setData] = useLazyLoading(
    { initPage: 0, distance: "50px", targetPercent: 0.5 },
    async (page) => {
      try {
        const url = URL + `/userPosts/allposts?page=${page}`;
        const d = await doApiGet(url);
        setData(d);
      } catch (err) {
        console.log(err);
      }
    }
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div>
      {posts.map((post) => (
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
      <Intersector />
    </div>
  );
};

export default Posts2;
