import { Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { URL, doApiGet, doApiMethod } from "../services/apiService";
import PagesBtns from "./PagesBtns";

const UsersList = () => {
  const nav = useNavigate();
  const [query] = useSearchParams();
  const [ar, setAr] = useState([]);
  const HEAD = ["#", "User_name", "Name", "Email", "_id", "Role", "Edit", "Delete"];

  useEffect(() => {
    doApi();
  }, [query]);

  const doApi = async () => {
    const page = query.get("page") || 1;
    const url = URL + "/users/usersList?page=" + page;
    try {
      const data = await doApiGet(url);
      console.log(data);
      setAr(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeRole = async (userInfo) => {
    const newRole = userInfo.role == "admin" ? "user" : "admin";
    try {
      const url = `${URL}/users/changeRole/${userInfo._id}/${newRole}`;
      const data = await doApiMethod(url, "PATCH");
      if (data.modifiedCount) {
        doApi();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (_id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const url = `${URL}/users/${_id}`;
        const data = await doApiMethod(url, "DELETE");

        if (data.deletedCount) {
          doApi();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container  mx-auto mt-20">

      <h1 className="text-center  text-4xl font-bold text-blue-500 m-3" >Users List</h1>

      <div className="m-2 my-6 ">
        <PagesBtns
          apiUrl={URL + "/users/count"}
          linkTo={"/admin/users?page="} />
      </div>
      <hr></hr>
      <Card className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-black">
        <table className="w-full min-w-max table-auto text-left  ">
          <thead className="shadow-lg">
            <tr>
              {HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 "
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ar.map((item, i) => {
              const page = query.get("page") || 1;
              return (
                <tr key={i + 1} className="even:bg-blue-gray-50/50 hover:bg-gray-100">
                  <td className="p-6">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {(page - 1) * 8 + i + 1}
                    </Typography>
                  </td>
                  <td className="p-6">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.user_name}
                    </Typography>
                  </td>
                  <td className="p-6">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.name}
                    </Typography>
                  </td>
                  <td className="p-6">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.email}
                    </Typography>
                  </td>
                  <td className="p-6">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item._id}
                    </Typography>
                  </td>
                  <td className="p-6">
                    <Typography variant="small" className="font-normal">
                      <button
                     
                        onClick={() => {
                          changeRole(item);
                        }}
                        className={`transition-all  duration-150 ease-out cursor-pointer
                                       text-white font-bold py-2 px-4 rounded
                                       ${item.role == "user" && "bg-green-600 hover:bg-green-800 "} 
                                        ${item.role == "admin" && "bg-orange-400 hover:bg-orange-500 "} `}
                      >
                        {item.role}
                      </button>
                    </Typography>
                  </td>
                  <td className="p-6">
                    <button
                      onClick={() => {
                        if (item._id != "64c27124871892c1bd068dc6") {
                          nav("/admin/users/edit/" + item._id);
                        }
                      }}
                      className="transition-all duration-150 ease-out cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-6">
                    <button
                      onClick={() => {
                        deleteUser(item._id);
                      }}
                      className="transition-all duration-150 ease-out cursor-pointer s bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
                    >
                      DEL
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default UsersList;
