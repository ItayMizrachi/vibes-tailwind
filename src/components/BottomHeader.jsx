import {
  ChatIcon,
  HeartIcon,
  InformationCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../context/myContext";
import { TOKEN_KEY } from "../services/apiService";

const Header = () => {
  const { userSignOut, userData, userDataFetched } = useContext(MyContext);
  const nav = useNavigate();
  const inputRef = useRef();

  const onKeyboardClick = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    let input_val = inputRef.current.value;
    nav(`/${input_val}`);
  };

  const onLogOut = () => {
    if (window.confirm("Are you sure you want to log out")) {
      localStorage.removeItem(TOKEN_KEY);
      userSignOut();
      nav("/");
      toast.info("You logged out, see you soon...");
    }
  };

  return (
    <header className="fixed bottom-0 p-5 left-0 right-0 z-50 px-6 bg-white border-t shadow-s  lg:hidden md:hidden">
     
        <div className="flex items-center justify-center space-x-7">
          {localStorage[TOKEN_KEY] && userData ? (
            <>
              <div className="relative lowNavBtn">
                <HeartIcon className="lowNavBtn" />
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2 animate-pulse">
                  3
                </div>
              </div>
              <Link to="chatbot">
                <ChatIcon className="lowNavBtn" />
              </Link>
              <Link to="addpost">
                <PlusCircleIcon className="lowNavBtn" />
              </Link>
              <Link to="about">
                <InformationCircleIcon className="lowNavBtn" />
              </Link>
              <Link to="/">
                <HomeIcon className="lowNavBtn" />
              </Link>
            </>
          ) : (
            <>
              <Link to="signin" className="text-sm font-semibold text-blue-400">
                sign in
              </Link>
              <p className="font-semibold text-gray-400"> | </p>
              <Link to="signup" className="text-sm font-semibold text-blue-400">
                sign up
              </Link>
            </>
          )}
        </div>
   
    </header>
  );
};

export default Header;
