import { ChatIcon, HeartIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL, doApiGet } from "../services/apiService";

const Profile = () => {
  const [postsInfo, setPostsInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const { user_name } = useParams(); // Get the user_name from the URL parameter

  useEffect(() => {
    if (user_name) {
      doApi(user_name);
    }
  }, [user_name]);

  const doApi = async (user_name) => {
    try {
      const url = URL + "/userPosts/userInfo/" + user_name;
      const data = await doApiGet(url);
      setPostsInfo(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user_name) {
      doApiUserInfo(user_name);
    }
  }, [user_name]);

  const doApiUserInfo = async (user_name) => {
    try {
      const url = URL + "/users/userInfo/" + user_name;
      const data = await doApiGet(url);
      setUserInfo(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full p-10 mx-0 lg:max-w-6xl md:mx-5 xl:mx-auto">
      {/* Profile Info */}
      {userInfo.user_name ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="justify-center avatar md:col-span-1">
              <div>
                <img
                  className="mx-auto rounded-full w-36 h-36 md:mx-0"
                  src={userInfo.profilePic}
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="mr-20 text-2xl text-gray-700">
                {userInfo.user_name}
              </span>
              {/* <div className="inline text-sm font-semibold text-blue-400 cursor-pointer">
        Edit Profile
      </div> */}
              <div className="flex mt-2 md:mt-4">
                <div className="mr-6">
                  <span className="font-semibold">{postsInfo.length} </span>posts
                </div>
                <div className="mr-6">
                  <span className="font-semibold">
                    {userInfo.followers?.length}{" "}
                  </span>
                  followers
                </div>
                <div className="mr-6">
                  <span className="font-semibold">
                    {userInfo.followings?.length}{" "}
                  </span>
                  following
                </div>
              </div>
              <div className="mt-2 md:mt-4">
                <div className="pt-2">
                  <span className="text-lg font-semibold text-gray-700">
                    {userInfo.name}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-base text-blue-700">{userInfo.desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <hr className="mt-6 border-gray-500" />
          <div className="flex justify-center gap-10">
            <button className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-800 focus:border-t focus:text-gray-600">
              Posts
            </button>
            <button className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-800 focus:border-t focus:text-gray-600">
              Liked
            </button>
            <button className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-800 focus:border-t focus:text-gray-600">
              Saved
            </button>
            <button className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-800 focus:border-t focus:text-gray-600">
              Gallery
            </button>
          </div>



          {/* Gallery */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {postsInfo.map((post) => (
              <div key={post._id} className="relative cursor-pointer group">
                <div className="overflow-hidden">
                  <img
                    className="object-cover w-full h-96"
                    src={post.img_url}
                    alt="post"
                  />
                </div>
                <div className="absolute top-0 flex items-center justify-center w-full h-full text-white -translate-x-1/2 opacity-0 group-hover:opacity-100 left-1/2 bg-black-rgba">
                  <div className="mr-3 space-x-1">
                    <HeartIcon className="inline h-6" />
                    <span className="font-semibold">57</span>
                  </div>
                  <div className="space-x-1">
                    <ChatIcon className="inline h-6" />
                    <span className="font-semibold">57</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center my-20">
          <h1 className="mb-2 text-3xl font-semibold text-center">User not found</h1>
          <Link to="/">
            <button className="sm:w-full p-3 bg-blue-500 rounded-lg lg:w-auto my-2 border py-4 px-8 text-center text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Take me home!
            </button>
          </Link>
        </div>


      )}

    </div>
  );
};

export default Profile;
