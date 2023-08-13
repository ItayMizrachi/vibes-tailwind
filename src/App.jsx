import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { MyContext } from "./context/myContext";
import { useFollow } from "./hooks/useFollow";
import { usePostInfo } from "./hooks/usePostInfo";
import { useUserData } from "./hooks/useUserData";
import Router from "./routes/router";

const App = () => {
  const { userData, doApiUser, userSignOut } = useUserData();
  const { deletePost, postsInfo, Intersector } = usePostInfo();
  const { followUser, followFlag } = useFollow();

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
      }}
    >
      <Router />
      <ToastContainer theme="colored" />
    </MyContext.Provider>
  );
};

export default App;
