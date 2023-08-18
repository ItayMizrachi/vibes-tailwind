import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import Post from "../components/Post";
import UserNotFound from "../components/UserNotFound";
import { MyContext } from "../context/myContext";
import { URL, doApiGet } from "../services/apiService";
import { useLazyLoading } from "mg-js";
import PopWindow from "../components/PopWindow";

const Profile = () => {
  const [postsInfo, setPostsInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const { user_name } = useParams(); // Get the user_name from the URL parameter
  const [showGallery, setShowGallery] = useState(true);
  const [showUserPosts, setShowUserPosts] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const { userData, followUser, followFlag } = useContext(MyContext);
  const [isPop, setIsPop] = useState(false)

  const show = (type) => {
    if (type === "userPosts") {
      setShowGallery(false);
      setShowUserPosts(true);
    } else if (type === "gallery") {
      setShowGallery(true);
      setShowUserPosts(false);
    }
  };

  const doApiUserPosts = async (user_name) => {
    try {
      const url = URL + "/userPosts/userInfo/" + user_name;
      const data = await doApiGet(url);
      setPostsInfo(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
      setUserNotFound(true);
    }
  };

  // const [Intersector, data, setData] = useLazyLoading(
  //   { initPage: 0, distance: "50px", targetPercent: 0.5 },
  //   async (page) => {
  //     try {
  //       // const url = URL + `/userPosts/userInfo/Apple?page=${page}}`;
  //       // const url = "http://localhost:3002/userPosts/userInfo/Apple?page=1";
  //       const url = `/userPosts/allposts?page=${page}`;
  //       const d = await doApiGet(url);
  //       setData(d);
  //       console.log(data);
  //       console.log("noy");
  //     } catch (err) {
  //       console.log(err);
  //       setUserNotFound(true);
  //       console.log("blabla");
  //     }
  //   }
  // );

  // useEffect(() => {
  //   setPostsInfo(data);
  // }, [data]);

  const doApiUserInfo = async (user_name) => {
    try {
      const url = URL + "/users/userInfo/" + user_name;
      const data = await doApiGet(url);
      setUserInfo(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
      setUserNotFound(true);
    }
  };

  useEffect(() => {
    if (user_name) {
      doApiUserPosts(user_name);
      doApiUserInfo(user_name);
    }
  }, [user_name, followFlag]);


  const closeWindow = () => {
    setIsPop(false)
  }
  const openWindow = () => {
    setIsPop(true)
  }

  return (
    <div className=" p-4 sm:p-10 mx-0 lg:max-w-6xl md:mx-5 xl:mx-auto">
      {/* Profile Info */}
      {userInfo?.user_name ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="justify-center avatar md:col-span-1">
              <div>
                <img
                  className="mx-auto rounded-full w-36 h-36 md:mx-0 cursor-pointer"
                  src={userInfo.profilePic}
                  alt="profile pic"
                  onClick={openWindow}
                />
                {isPop && <PopWindow onClose={closeWindow} />}
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="mr-20 text-2xl text-gray-700">
                {userInfo.user_name}
              </span>
              {userData._id !== userInfo._id && (
                <button
                  className="p-2 my-2 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => followUser(userInfo._id)}
                >
                  {userInfo.followers.find((follower_id) => {
                    return follower_id === userData._id;
                  })
                    ? "Unfollow"
                    : "Follow"}
                </button>
              )}
              {/* <div className="inline text-sm font-semibold text-blue-400 cursor-pointer">
                Edit Profile
              </div> */}
              <div className="flex mt-2 md:mt-4">
                <div className="mr-6">
                  <span className="font-semibold">
                    {postsInfo.length + " "}
                  </span>
                  posts
                </div>
                <div className="mr-6">
                  <span className="font-semibold">
                    {userInfo.followers?.length + " "}
                  </span>
                  followers
                </div>
                <div className="mr-6">
                  <span className="font-semibold">
                    {userInfo.followings?.length + " "}
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
                <div></div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <hr className="mt-6 border" />
          <div className="flex justify-center gap-10">
            <button
              onClick={() => show("userPosts")}
              className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-300 focus:border-t focus:text-gray-600"
            >
              Posts
            </button>
            <button className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-300 focus:border-t focus:text-gray-600">
              Liked
            </button>
            <button className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-300 focus:border-t focus:text-gray-600">
              Saved
            </button>
            <button
              onClick={() => show("gallery")}
              className="flex gap-2 py-4 text-sm font-semibold text-gray-400 border-gray-300 focus:border-t focus:text-gray-600"
            >
              Gallery
            </button>
          </div>

          {/* Gallery */}
          {showGallery && <Gallery postsInfo={postsInfo} />}
          {showUserPosts && (
            <>
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
                />
              ))}
              {/* <Intersector /> */}
            </>
          )}
        </>
      ) : (
        userNotFound && <UserNotFound />
      )}
    </div>
  );
};

export default Profile;
