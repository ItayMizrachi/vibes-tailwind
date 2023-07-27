import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_KEY } from "../services/apiService";

const Post = ({ _id,  user_name, img_url, desc, profilePic }) => {
  const comments = [
    {
      comment: "This is a comment",
      username: "itaymizrachi",
      img_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c",
      date_created: "July 25, 2023 at 10:40:51 AM UTC+3",
      id: 0,
    },
    {
      comment: "Great photo!",
      username: "user123",
      img_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c",
      date_created: "July 25, 2023 at 10:40:51 AM UTC+3",
      id: 1,
    },
    {
      comment: "Amazing!",
      username: "john_doe",
      img_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c",
      date_created: "July 25, 2023 at 10:40:51 AM UTC+3",
      id: 2,
    },
    {
      comment: "Love it!",
      username: "alice_wonderland",
      img_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c",
      date_created: "July 25, 2023 at 10:40:51 AM UTC+3",
      id: 3,
    },
    {
      comment: "Nice shot!",
      username: "coding_guru",
      img_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c",
      date_created: "July 25, 2023 at 10:40:51 AM UTC+3",
      id: 4,
    },
    {
      comment: "Beautiful!",
      username: "travel_bug",
      img_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c",
      date_created: "July 25, 2023 at 10:40:51 AM UTC+3",
      id: 5,
    },
  ];

  console.log(comments);

  return (
    <div className="bg-white border rounded-sm my-7">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={profilePic}
          alt=""
          className="object-contain w-12 h-12 p-1 mr-3 rounded-full"
        />

        <Link to={user_name} className="flex-1 font-bold">{user_name}</Link>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      {/* img */}
      <img src={img_url} alt="" className="object-cover w-full" />

      {/* Buttons */}
      {localStorage[TOKEN_KEY]  &&    (
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />

          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div> )}

      {/* Caption */}
      <div>
        <div className="p-5 truncate">
          <p className="mb-1 font-bold">2 likes</p>
          <span className="mr-1 font-bold">{user_name} </span>
          {desc}
        </div>
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="h-20 ml-10 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center mb-3 space-x-2">
              <img
                className="rounded-full h-7"
                src={comment.img_url}
                alt="profile pic"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.username} </span>{" "}
                {comment.comment}
              </p>
              <p className="pr-5 text-xs">5 days ago</p>
              {/* <Moment fromNow className="pr-5 text-xs">
                {comment.date_created.toDate()}
              </Moment> */}
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {localStorage[TOKEN_KEY]  &&    (
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="add a comment.."
          className="flex-1 border-none outline-none focus:ring-0 "
        />
        <button type="submit" className="font-semibold text-blue-400">
          Post
        </button>
      </form> )}
    </div> 
  );
};

export default Post;
