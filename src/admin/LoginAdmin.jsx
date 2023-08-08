import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOKEN_KEY, URL, doApiMethod } from "../services/apiService";

const LoginAdmin = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPost(_bodyData);
  };
  const doApiPost = async (_bodyData) => {
    try {
      const url = URL + "/users/login";
      const data = await doApiMethod(url, "POST", _bodyData);

      if (data.token) {
        toast.success("Welcome");
        localStorage.setItem(TOKEN_KEY, data.token);
        nav("/admin/users");
      }
    } catch (err) {
      console.log(err);
      alert("User or password is worng!");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center">Login to admin</h1>
      <form
        className="w-1/2 p-2 border mx-auto"
        onSubmit={handleSubmit(onSubForm)}
      >
        <label>User name</label>
        <input
          {...register("user_name", { required: true, minLength: 2 })}
          className="form-control border p-1 w-full"
          type="text"
        />
        {errors.user_name && (
          <div className="text-red-500">
            * Enter valid user_name(min 3 chars)
          </div>
        )}
        <label>password</label>
        <input
          {...register("password", { required: true, minLength: 3 })}
          className="form-control border p-1 w-full"
          type="password"
        />
        {errors.password && (
          <div className="text-red-500">
            * Enter valid password (min 3 chars)
          </div>
        )}
        <div className="text-center">
          <button className="btn btn-blue mt-3 ">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
