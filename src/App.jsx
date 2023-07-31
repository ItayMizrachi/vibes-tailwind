import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { MyContext } from "./context/myContext";
import { useUserData } from "./hooks/useUserData";
import Router from "./routes/router";


const App = () => {
  const { userData, doApiUser, userSignOut, userDataFetched } = useUserData();

  return (
    <MyContext.Provider
      value={{
        userData,
        userDataFetched,
        doApiUser,
        userSignOut,
      }}
    >
      <Router />
      <ToastContainer theme="colored" />
    </MyContext.Provider>
  );
};

export default App;
