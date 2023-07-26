import {
    ChatIcon,
    HeartIcon,
    InformationCircleIcon,
    MenuIcon,
    PlusCircleIcon,
    SearchIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-s ">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
          <Link to="/">
            <img
              src="https://links.papareact.com/ocw"
              className="object-contain w-full h-full"
              alt="logo"
            />
          </Link>
        </div>
        <div className="relative flex-shrink-0 w-10 cursor-pointer lg:hidden">
        <Link to="/">
          <img
            src="https://links.papareact.com/jjm"
            className="object-contain w-full h-full"
            alt="responsive logo"
          />
            </Link>
        </div>

        {/* middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative p-3 mt-1 rounded-md lg:mt-4">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              className="block w-full pl-10 border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm bg-gray-50"
              type="text"
              placeholder="Search.."
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <Link to="/">
            <HomeIcon className="navBtn" />
          </Link>
          <Link to="about">
            <InformationCircleIcon className="navBtn" />
          </Link>
          <MenuIcon className="w-10 h-6 cursor-pointer md:hidden" />

          <>
            <div className="relative navBtn">
              <HeartIcon className="navBtn" />
              <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2 animate-pulse">
                3
              </div>
            </div>
            <PlusCircleIcon onClick={<Upload flag={true} />} className="navBtn" />
            <Link to="groups">
              <UserGroupIcon className="navBtn" />
            </Link>
            <Link to="chatbot">
              <ChatIcon className="navBtn" />
            </Link>
            <Link to="profile">
            <img
              src="https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c"
              alt="profile pic"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            </Link>
          </>

          {/* <button >Sign In</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
