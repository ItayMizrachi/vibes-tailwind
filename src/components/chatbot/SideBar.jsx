import React, { useContext } from "react";
import { MyContext } from "../../context/myContext";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

const SideBar = () => {
  const { userData } = useContext(MyContext);
  return (
    <div className="flex flex-col h-screen p-2 ">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatRows  */}
          <div className="mt-3">
            <ChatRow />
          </div>
        </div>
      </div>
      {/* <img
        src={userData?.profilePic}
        alt="profile pic"
        className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
      /> */}
    </div>
  );
};

export default SideBar;
