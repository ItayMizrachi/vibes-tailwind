import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import About from "../pages/About";
import ChatBot from "../pages/ChatBot";
import Groups from "../pages/Groups";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Header />} />
      </Routes>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chatbot" element={<ChatBot />} />
        <Route path="groups" element={<Groups />} />
      </Routes>

      
      {/* <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/*" element={<Header />} />
      </Routes> */}

      {/* <Routes>
        <Route path="home" element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="search/:user_name" element={<OtherUserProfile />} />

        <Route path="login" element={<SignIn />} />
        <Route index element={<SignUp />} />
        <Route path="/createGroup" element={<CreateGroup />} />
        <Route path="/about" element={<About />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="*" element={<Page404 />} />

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/groups" element={<GroupsList />} />
        <Route path="/admin/users/edit/:id" element={<EditUser />} />
        <Route path="/admin/posts" element={<PostsAdmin />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Routes>
        <Route path="/admin/:dir/*" element={<AuthAdminComp />} />
      </Routes> */}

      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
