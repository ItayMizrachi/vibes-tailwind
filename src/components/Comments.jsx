import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const Comments = ({ commentsInfo, Intersector }) => {
  return (
    <div>
      {commentsInfo.length > 0 && (
        <div className="h-20 ml-10 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {commentsInfo.map((comment) => (
            <div key={comment._id} className="flex items-center mb-3 space-x-2">
              <Link to={"/" + comment.user.user_name}>
                <img
                  className="rounded-full h-7"
                  src={comment.user.profilePic}
                  alt="profile pic"
                />
              </Link>
              <p className="flex-1 text-sm">
                <Link to={"/" + comment.user.user_name} className="font-bold">
                  {comment.user.user_name}{" "}
                </Link>
                {comment.text}
              </p>
              <p className="pr-5 text-xs">
                {moment(comment.date_created).fromNow()}
              </p>
            </div>
          ))}
          {/* <Intersector /> */}
        </div>
      )}
    </div>
  );
};

export default Comments;
