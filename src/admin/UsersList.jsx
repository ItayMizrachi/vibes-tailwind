import React, { useEffect, useState } from 'react'
import { URL, doApiGet, doApiMethod } from '../services/apiService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PagesBtns from './PagesBtns';

export default function UsersList() {

    const nav = useNavigate();
    const [query] = useSearchParams();
    const [ar, setAr] = useState([]);


    useEffect(() => {
        doApi();
    }, [query])

    const doApi = async () => {
        const page = query.get("page") || 1;
        const url = URL + "/users/usersList?page=" + page;
        try {
            const data = await doApiGet(url);
            console.log(data);
            setAr(data);
        } catch (error) {
            console.log(error)
        }
    }

    const changeRole = async (userInfo) => {
        const newRole = userInfo.role == "admin" ? "user" : "admin";
        try {
            const url = `${URL}/users/changeRole/${userInfo._id}/${newRole}`;
            const data = await doApiMethod(url, "PATCH");
            if (data.modifiedCount) {
                doApi();
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    const deleteUser = async (_id) => {
        if (window.confirm("Are you sure you want to delete?")) {

            try {
                const url = `${URL}/users/${_id}`
                const data = await doApiMethod(url, "DELETE")

                if (data.deletedCount) {
                    doApi();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (

        <div className='container'>

            <h1>Users List</h1>
            <PagesBtns
                apiUrl={URL + "/users/count"}
                linkTo={"/admin/users?page="} />
            <table className='my-3'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>user_name</td>
                        <td>name</td>
                        <td>email</td>
                        <td>_id</td>
                        <td>role</td>
                        <td>delete</td>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        const page = query.get("page") || 1;
                        return (
                            <tr key={i + 1}>
                                <td>{(page - 1) * 5 + i + 1}</td>
                                <td>{item.user_name}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item._id}</td>
                                <td><button style={{ background: item.role == "admin" ? "orange" : "green" }} onClick={() => {
                                    changeRole(item);
                                }} className='btn'>{item.role}</button></td>
                                <td><button onClick={() => {
                                    deleteUser(item._id);
                                }} className='btn'>DEL</button></td>
                                <td><button onClick={() => {
                                    if (item._id != "64c27124871892c1bd068dc6") {
                                        nav("/admin/users/edit/" + item._id)
                                    }
                                }} className='btn'>Edit</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}





