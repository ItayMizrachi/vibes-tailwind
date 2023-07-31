import React from "react";

import NewChatPage from "../components/chatbot/NewChatPage";
import SideBar from "../components/chatbot/SideBar";

const VibesNewChat = () => {
  return (
    <div className="flex">
      <div className="bg-[#202123] max-2-xs h-screen overflow-y-auto md:min-w-[20rem]">
      <SideBar />
      </div>
      {/*ClientProvider - Noftlications */}

      <div className="bg-[#343541] flex-1">
        {/* <ChatbotMessages /> */}
        <NewChatPage/>
      </div>
    </div>
  );
};

export default VibesNewChat;
