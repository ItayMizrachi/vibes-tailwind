import { ChatIcon, HeartIcon } from "@heroicons/react/solid";
import React from "react";

const Profile = () => {
  const posts = [
    {
      username: "itay_mizrachi",
      img_url:
        "https://cdn.discordapp.com/attachments/1022272232367591547/1089830026792415292/raz_shuker_Coffee_cart_forest_autumn_people_c7d791f9-40d6-4438-9458-098778ad9423.png",
      id: 1,
      desc: "Coffee Table",
    },
    {
      username: "user123",
      img_url:
        "https://images.unsplash.com/photo-1690151711465-2bfe4e69f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 2,
      desc: "Beautiful Scenery",
    },
    {
      username: "john_doe",
      img_url:
        "https://images.unsplash.com/photo-1690286727405-ecdf6ab04bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 3,
      desc: "Nature Walk",
    },
    {
      username: "alice_wonderland",
      img_url:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 4,
      desc: "Sunset at the Beach",
    },
    {
      username: "coding_guru",
      img_url:
        "https://images.unsplash.com/photo-1690122991917-a06094f2e65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 5,
      desc: "Code & Coffee",
    },
    {
      username: "travel_bug",
      img_url:
        "https://images.unsplash.com/photo-1690215711687-777c0e2cb7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 6,
      desc: "Adventure Awaits",
    },
  ];

  console.log(posts);

  return (
    <div className="w-full max-w-6xl p-10 mx-0 md:mx-5 xl:mx-auto">
      {/* Profile Info */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="justify-center avatar md:col-span-1">
          <div>
            <img
              className="mx-auto rounded-full w-36 h-36 md:mx-0"
              src="https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c"
              alt="profile pic"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <span className="mr-20 text-2xl text-gray-700">Itay Mizrachi</span>
          {/* <div className="inline text-sm font-semibold text-blue-400 cursor-pointer">
        Edit Profile
      </div> */}
          <div className="flex mt-2 md:mt-4">
            <div className="mr-6">
              <span className="font-semibold">222 </span>posts
            </div>
            <div className="mr-6">
              <span className="font-semibold">242 </span>followers
            </div>
            <div className="mr-6">
              <span className="font-semibold">123 </span>following
            </div>
          </div>
          <div className="mt-2 md:mt-4">
            <div className="pt-2">
              <span className="text-lg font-semibold text-gray-700">
                itay_mizrachi fullstack developer
              </span>
            </div>
            <div className="pt-2">
              <p className="text-base text-blue-700">
                react tailwind nodejs mongo
              </p>
              <p className="text-base text-blue-700">
                https://github.com/ItayMizrachi/vibes-tailwind
              </p>
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
        {posts.map((post) => (
          <div className="relative cursor-pointer group">
            <div className="overflow-hidden" key={post.id}>
              <img
                className="object-cover w-full h-96"
                src={post.img_url}
                alt="post"
              />
            </div>
            <div className="absolute top-0 flex items-center justify-center w-full h-full text-white -translate-x-1/2 opacity-0 group-hover:opacity-100 left-1/2 bg-black-rgba">
              <div className="space-x-1">
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
    </div>
  );
};

export default Profile;
