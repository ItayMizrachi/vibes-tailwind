import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import {
  BookmarkIcon as FullBookMarkIcon,
  HeartIcon as FullHeart,
} from "@heroicons/react/solid";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MyContext } from "../context/myContext";
import { TOKEN_KEY, URL, doApiGet, doApiMethod } from "../services/apiService";
import AddComment from "./AddComment";
import Comments from "./Comments";

const Post = ({
  likes,
  likesLength,
  _id,
  user_name,
  img_url,
  desc,
  profilePic,
  user_id,
}) => {
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add state for loading
  const [likesCount, setLikesCount] = useState(likesLength);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { deletePost, userData } = useContext(MyContext);

  const createLikeNotification = async (userId, postId, senderId) => {
    try {
      const url = URL + "/notifications/like";
      const body = { userId, postId, senderId };
      await doApiMethod(url, "POST", body);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to create a comment notification
  const createCommentNotification = async (userId, postId, senderId) => {
    try {
      const url = URL + "/notifications/comment";
      const body = { userId, postId, senderId };
      await doApiMethod(url, "POST", body);
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (_id) => {
    try {
      const url = URL + "/userPosts/like/" + _id;
      const urlSinglePost = URL + "/userPosts/single/" + _id;
      await doApiMethod(url, "PUT");
      const resp = await doApiGet(urlSinglePost);
      if (user_id != userData._id) {
        await createLikeNotification(user_id, _id, userData._id);
      }
      setLikesCount(resp.likes.length);
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };

  const savePost = async (_id) => {
    try {
      const url = URL + "/userPosts/save/" + _id;
      await doApiMethod(url, "PUT");
      setIsSaved(!isSaved);
    } catch (error) {
      console.log(error);
    }
  };

  // const [Intersector, data, setData] = useLazyLoading(
  //   { initPage: 0, distance: "50px", targetPercent: 0.5 },
  //   async (page) => {
  //     try {
  //       //  const url = URL + `/comments/${_id}?page=2`;
  //       const url = URL + `/comments/${_id}?page=${page}`;
  //       const d = await doApiGet(url);
  //       setData(d);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // );

  // useEffect(() => {
  //   setCommentsInfo(data);
  // }, [data]);

  const doApiComments = async () => {
    try {
      const url = URL + "/comments/" + _id;
      const data = await doApiGet(url);
      setCommentsInfo(data);
      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const doApiPostComment = async (_bodyData) => {
    try {
      setRefresh(true);
      const url = URL + "/comments/" + _id;
      await doApiMethod(url, "POST", _bodyData);
      setRefresh(false);
      reset();
      if (user_id != userData._id) {
        await createCommentNotification(user_id, _id, userData._id); // Correct parameter names
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const url = URL + "/comments/" + commentId;
      await doApiMethod(url, "DELETE");

      // Delete the associated comment notification
      await doApiMethod(`/notifications/comment/${commentId}`, "DELETE");

      // Refresh comments
      doApiComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    doApiComments();
    if (likes?.includes(userData.user_name)) {
      setIsLiked(true);
    }
    if (userData?.saved_posts?.includes(_id)) {
      setIsSaved(true);
    }
  }, [refresh]);

  const { register, handleSubmit, reset } = useForm();

  const onSubForm = (_bodyData) => {
    // console.log(_bodyData);
    setIsLoading(true); // Start loading when form is submitted
    doApiPostComment(_bodyData);
  };

  return (
    <div className="bg-white border rounded-2xl my-7  max-h-[100vh]">
      {/* Header */}
      <div className="flex items-center p-5">
        <Link to={user_name}>
          <img
            src={profilePic}
            alt=""
            className="object-contain w-12 h-12 p-1 mr-3 rounded-full"
          />
        </Link>
        <Link to={user_name} className="flex-1 font-bold">
          {user_name}
        </Link>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      {/* img */}
      <img src={img_url} alt="" className="object-cover w-full" />

      {/* Buttons */}
      {localStorage[TOKEN_KEY] && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {isLiked ? (
              <FullHeart
                onClick={() => likePost(_id)}
                className="post-btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={() => likePost(_id)} className="post-btn" />
            )}

            <ChatIcon className="post-btn" />
          </div>

          {user_name === userData.user_name ? (
            <TrashIcon
              onClick={() => deletePost(_id)}
              className="post-btn hover:text-red-500"
            />
          ) : (
            <>
              {isSaved ? (
                <FullBookMarkIcon
                  onClick={() => savePost(_id)}
                  className="post-btn"
                />
              ) : (
                <BookmarkIcon
                  onClick={() => savePost(_id)}
                  className="post-btn"
                />
              )}
            </>
          )}
        </div>
      )}

      {/* Caption */}
      <div>
        <div className="p-5 truncate">
          <p className="mb-1 font-bold">{likesCount} likes</p>
          <Link to={user_name} className="mr-1 font-bold">
            {user_name}
          </Link>
          {desc}
        </div>
      </div>

      {/* Comments */}
      <Comments commentsInfo={commentsInfo} />

      {/* input box */}
      <AddComment
        handleSubmit={handleSubmit}
        register={register}
        onSubForm={onSubForm}
      />
    </div>
  );
};

export default Post;
