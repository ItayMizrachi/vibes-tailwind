import {
  ChatIcon,
  HeartIcon,
  InformationCircleIcon,
  PlusCircleIcon,
  SearchIcon
} from "@heroicons/react/outline";
import { HomeIcon, LogoutIcon } from "@heroicons/react/solid";
import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context/myContext";
import { TOKEN_KEY } from "../services/apiService";

const Header = () => {
  const { userSignOut, userData, userDataFetched } = useContext(MyContext);
  const nav = useNavigate();
  const inputRef = useRef();

  // useEffect(() => {
  //   onSearchClick();
  // },[inputRef])

  const onKeyboardClick = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    let input_val = inputRef.current.value;
    nav(`/${input_val}`);
  };

  return (
    <header className="sticky top-0 z-50 px-6 bg-white border-b shadow-s">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
          <Link to="/">
            <img
              src="/images/vibes-logo.png"
              className="object-contain w-full h-full"
              alt="logo"
            />
          </Link>
        </div>
        <div className="relative flex-shrink-0 w-10 cursor-pointer lg:hidden">
          <Link to="/">
            <img
              src="/images/vibes-logo-responsive.png"
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
              onKeyDown={onKeyboardClick}
              ref={inputRef}
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

          {/* <MenuIcon className="w-10 h-6 cursor-pointer md:hidden" /> */}

          {localStorage[TOKEN_KEY] && userData ? (
            <>
              <div className="relative navBtn">
                <HeartIcon className="navBtn" />
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2 animate-pulse">
                  3
                </div>
              </div>
              <Link to="addpost">
                <PlusCircleIcon className="navBtn" />
              </Link>
              {/* <Link to="groups">
                <UserGroupIcon className="navBtn" />
              </Link> */}
              <Link to="chatbot">
                <ChatIcon className="navBtn" />
              </Link>
              <LogoutIcon onClick={userSignOut} className="lowNavBtn" />
              <Link to={userData.user_name}>
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to="signin" className="text-sm hidden md:inline-flex font-semibold text-blue-400 ">
                sign in
              </Link>
              <p className="font-semibold text-gray-400 hidden md:inline-flex"> | </p>
              <Link to="signup" className="text-sm hidden md:inline-flex font-semibold text-blue-400">
                sign up
              </Link>
            </>
          )}

          {/* <button >Sign In</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
