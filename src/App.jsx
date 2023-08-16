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
  const { deletePost, postsInfo, Intersector, singlePostInfo } = usePostInfo();
  const { followUser, followFlag } = useFollow();
  const { showNoftlications, setShowNoftlications, toggleNoftlications } =
    useShowNoftlications();

  return (
    <MyContext.Provider
      value={{
        userData,
        doApiUser,
        userSignOut,
        deletePost,
        postsInfo,
        followUser,
        followFlag,
        Intersector,
        showNoftlications,
        setShowNoftlications,
        toggleNoftlications,
        singlePostInfo
      }}
    >
      <Router/>
      <ToastContainer theme="colored" />
    </MyContext.Provider>
  );
};

export default App;
