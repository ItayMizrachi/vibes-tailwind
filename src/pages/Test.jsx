import { ChatIcon, HeartIcon } from "@heroicons/react/outline";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import { URL, doApiGet } from "../services/apiService";

function Test() {
  const [toggler, setToggler] = useState(false);
  const [postsInfo, setPostsInfo] = useState([]);
  const [flag, setFlag] = useState(false);
  const user_name = "Apple";

  useEffect(() => {
    if (user_name) {
      doApiUserPosts(user_name);
    }
  }, [user_name, flag]);

  const doApiUserPosts = async (user_name) => {
    try {
      const url = URL + "/userPosts/userInfo/" + user_name; // Make sure to define 'URL'
      const data = await doApiGet(url);
      setPostsInfo(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        {postsInfo.map((post) => (
          <div  onClick={() => setToggler(!toggler)} key={post._id} className="relative cursor-pointer group">
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
                <span className="font-semibold">{post.likes.length}</span>
              </div>
              <div className="space-x-1">
                <ChatIcon className="inline h-6" />
                <span className="font-semibold">5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/Images/Example.jpg",
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
    </>
  );
}

export default Test;
