import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TOKEN_KEY, URL, doApiGet, doApiMethod } from "../services/apiService";
import AddComment from "./AddComment";
import Comments from "./Comments";

const Post = ({ _id, user_name, img_url, desc, profilePic }) => {
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add state for loading

  useEffect(() => {
    doApi();
  }, [refresh]);

  const doApi = async () => {
    try {
      const url = URL + "/comments/" + _id;
      const data = await doApiGet(url);
      setCommentsInfo(data);
      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubForm = (_bodyData) => {
    // console.log(_bodyData);
    setIsLoading(true); // Start loading when form is submitted
    doApiPost(_bodyData);
  };

  const doApiPost = async (_bodyData) => {
    try {
      setRefresh(true);
      const url = URL + "/comments/" + _id;
      await doApiMethod(url, "POST", _bodyData);
      setRefresh(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white border rounded-sm my-7">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={profilePic}
          alt=""
          className="object-contain w-12 h-12 p-1 mr-3 rounded-full"
        />
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
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            {/* <PaperAirplaneIcon className="btn" /> */}
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Caption */}
      <div>
        <div className="p-5 truncate">
          <p className="mb-1 font-bold">2 likes</p>
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
