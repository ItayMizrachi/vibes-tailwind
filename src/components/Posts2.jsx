import { useLazyLoading } from "mg-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL, doApiGet, doApiMethod } from "../services/apiService";
import Post from "./Post";

const Posts2 = () => {
  const [postsInfo, setPostsInfo] = useState([]);

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

  const deletePost = async (_id) => {
    try {
      if (window.confirm("Are you sure you want to delete post?")) {
        const url = URL + "/userPosts/" + _id;
        await doApiMethod(url, "DELETE");
        setPostsInfo((prevData) => prevData.filter((p) => p._id !== _id));
        toast.info(`Post deleted`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPostsInfo(data);
  }, [data]);

  return (
    <div>
      {postsInfo.map((post) => (
        <Post
          deletePost={deletePost}
          likes={post.likes}
          likesLength={post.likes.length}
          key={post._id + Math.random()}
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
