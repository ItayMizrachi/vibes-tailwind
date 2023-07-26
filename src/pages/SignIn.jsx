import { LockClosedIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mt-5 lg:mt-20 bg-grey-lighter">
      <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl font-semibold text-center ">Sign In</h1>

          <div className="relative p-1 mt-1 rounded-md lg:mt-4">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <UserIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              className="block w-full pl-10 border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm bg-gray-50"
              type="text"
              placeholder="username"
            />
          </div>

          <div className="relative p-1 mt-2 rounded-md ">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <LockClosedIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              className="block w-full pl-10 border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm bg-gray-50"
              type="password"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 my-1 mt-2 font-semibold text-center text-white bg-blue-500 rounded hover:bg-blue-600 bg-green hover:bg-green-dark focus:outline-none"
          >
            Login
          </button>
        </div>

        <div className="mt-6 text-grey-dark">
          <p className="inline"> Don't have an account? </p>
          <Link to="/signup" className="font-semibold text-blue-500">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
