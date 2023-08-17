import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { MyContext } from "./context/myContext";
import { useFollow } from "./hooks/useFollow";
import { usePostInfo } from "./hooks/usePostInfo";
import { useShowNoftlications } from "./hooks/useShowNoftlications";
import { useUserData } from "./hooks/useUserData";
import Router from "./routes/Router";

const App = () => {
  const { userData, doApiUser, userSignOut } = useUserData();
  const { deletePost, postsInfo, Intersector } = usePostInfo();
  const { followUser, followFlag } = useFollow();
  const {  showNoftlications, setShowNoftlications, toggleNoftlications, isRead, setIsRead } = useShowNoftlications();

  return (
    <MyContext.Provider
      value={{
        userData,
        doApiUser,
        userSignOut,
        deletePost,
        followUser,
        followFlag,
        Intersector,
        showNoftlications, 
        setShowNoftlications, 
        toggleNoftlications, 
        isRead, 
        setIsRead
      }}
    >
      <Router />
      <ToastContainer theme="colored" />
    </MyContext.Provider>
  );
};

export default App;
