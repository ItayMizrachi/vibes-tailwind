import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { URL, doApiMethod } from '../services/apiService';

const Uploader = () => {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Add state for loading

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    setIsLoading(true); // Start loading when form is submitted
    doApiPost(_bodyData);
  };

  const doApiPost = async (_bodyData) => {
    try {
      const url = URL + "/userPosts";
      const data = await doApiMethod(url, "POST", _bodyData);
      nav("/");
      if (data._id) {
        toast.success("Post added");
      }
    } catch (error) {
      console.log(error);
      toast.error("There's a problem");
    } finally {
      setIsLoading(false); // Stop loading after redirecting
    }
  };

  return (
    <div className="flex justify-center mt-5 lg:my-20">
      <div className="container max-w-md p-4 mx-auto">
        <div className="w-full px-6 py-8 bg-white border rounded shadow-md">
          <h1 className="mb-8 text-3xl font-semibold text-center">Add a new post</h1>

          <form onSubmit={handleSubmit(onSubForm)}>
            <div className="mb-4">
              <label className="block">Description</label>
              <input
                {...register("description", { required: true, minLength: 2 })}
                className="w-full p-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="green apple tree"
              />
              {errors.description && (
                <div className="mt-1 text-red-500">* Enter a valid description</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block">Image</label>
              <input
                {...register("img_url", { required: true, minLength: 2 })}
                className="w-full p-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="img url"
              />
              {errors.img_url && (
                <div className="mt-1 text-red-500">* Enter a valid image</div>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-3 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''}`
              }
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
