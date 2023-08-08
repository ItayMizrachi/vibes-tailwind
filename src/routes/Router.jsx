import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthAdminComp from "../admin/AuthAdminComp";
import EditUser from "../admin/EditUser";
import GroupsList from "../admin/GroupsList";
import HeaderAdmin from "../admin/HeaderAdmin";
import LoginAdmin from "../admin/LoginAdmin";
import PostsAdmin from "../admin/PostsAdmin";
import UsersList from "../admin/UsersList";
import BottomHeader from "../components/BottomHeader";
import Header from "../components/Header";
import Uploader from "../components/Uploader";
import About from "../pages/About";
import Chatbot from "../pages/ChatBot";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin*" element={<HeaderAdmin />} />
        <Route path="/*" element={<Header />} />
      </Routes>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/:user_name" element={<Profile />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="addpost" element={<Uploader />} />
        {/* <Route path="groups" element={<Groups />} /> */}

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/groups" element={<GroupsList />} />
        <Route path="/admin/users/edit/:id" element={<EditUser />} />
        <Route path="/admin/posts" element={<PostsAdmin />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>

    
      <Routes>
        <Route path="/admin/:dir/*" element={<AuthAdminComp />} />
      </Routes>

      {/* <Footer /> */}
      <BottomHeader />
    </BrowserRouter>
  );
};

export default Router;
