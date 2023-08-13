import { Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PagesBtns from "../admin/PagesBtns";
import { URL, doApiGet, doApiMethod } from "../services/apiService";

const Table = () => {

    const [query] = useSearchParams();

    const HEAD = ["#", "User_name", "Name", "email", "_id"];
    const [ar, setAr] = useState([]);
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
        <div className="container">
            <PagesBtns
                apiUrl={URL + "/users/count"}
                linkTo={"/admin/users?page="} />

            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ar.map((item, i) => (
                                <tr key={i + 1} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {(page - 1) * 5 + i + 1}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.user_name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.email}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item._id}
                                        </Typography>
                                    </td>

                                </tr>
                            ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default Table;