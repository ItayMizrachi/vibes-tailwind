import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import React from "react";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto ">
      {/* if theres no messages  */}
      <>
        <p className="mt-10 text-center text-white">
          Type a prompt in below to get started!
        </p>
        <ArrowCircleDownIcon className="w-10 h-10 mx-auto mt-5 text-white animate-bounce" />
      </>
      {/* mapping the messages */}
      <Message />
    </div>
  );
};

export default Chat;
