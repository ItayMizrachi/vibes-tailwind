import {
  BellIcon,
  ChatIcon,
  InformationCircleIcon,
  PlusCircleIcon
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/myContext";
import { TOKEN_KEY, URL, doApiGet } from "../services/apiService";
import Noftlications from "./Noftlications";

const BottomHeader = () => {
  const { userData } = useContext(MyContext);
  const [showNoftlications, setShowNoftlications] = useState(false);

  const toggleNoftlications = () => {
    setShowNoftlications(!showNoftlications);
  };
  const [isRead, setIsRead] = useState({ unreadCount: 0 });

  const doApiUnreadCount = async () => {
    try {
      const url = URL + "/notifications/unread-count/" + userData?._id;
      const data = await doApiGet(url);
      setIsRead(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userData._id) {
      doApiUnreadCount();
    }
  }, [userData]);
  return (
    <header className="sticky bottom-0 p-5 left-0 right-0 z-50  bg-white border-t shadow-s  lg:hidden md:hidden">
      <div className="flex items-center justify-center space-x-7">
        {showNoftlications && (
          <Noftlications setIsRead={setIsRead} setShowNoftlications={setShowNoftlications} />
        )}
        {localStorage[TOKEN_KEY] && userData ? (
          <>
            <div onClick={toggleNoftlications} className="relative lowNavBtn">
              <BellIcon className="lowNavBtn" />
              {isRead.unreadCount > 0 && (
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2 animate-pulse">
                  {isRead.unreadCount}
                </div>
              )}
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

export default BottomHeader;
