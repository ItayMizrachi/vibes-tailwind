import { useLazyLoading } from "mg-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL, doApiGet, doApiMethod } from "../services/apiService";
import Post from "./Post";

const Posts2 = () => {
  const [postsInfo, setPostsInfo] = useState([]);
  const [likesCount, setLikesCount] = useState([]);
  const [commentsInfo, setCommentsInfo] = useState([]);

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

  const doApiComments = async (_id) => {
    try {
      const url = URL + "/comments/" + _id;
      const data = await doApiGet(url);
      setCommentsInfo(data);
      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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

  const likePost = async ({_id , setLikesCount}) => {
    try {
      const url = URL + "/userPosts/like/" + _id;
      const urlSinglePost = URL + "/userPosts/single/" + _id;
      await doApiMethod(url, "PUT");
      const resp = await doApiGet(urlSinglePost);
      // console.log(resp);
      setLikesCount(resp.likes.length);
    } catch (error) {
      console.log(error);
    }
  };

   const likePost2 = async (_id) => {
    try {
      const url = URL + "/userPosts/like/" + _id;
      const urlSinglePost = URL + "/userPosts/single/" + _id;
      await doApiMethod(url, "PUT");
      const resp = await doApiGet(urlSinglePost);
      // Find the post that was liked and update its likes count
      setPostsInfo((prevData) =>
        prevData.map((post) =>
          post._id === _id ? { ...post, likes: resp.likes } : post
        )
      );
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
          doApiComments={doApiComments}
          commentsInfo={commentsInfo}
          likePost={likePost2}
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
