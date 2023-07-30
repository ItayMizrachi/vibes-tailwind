import React, { useEffect, useState } from 'react'
import { URL, doApiGet, doApiMethod } from '../services/apiService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PagesBtns from './PagesBtns';

export default function GroupsList() {
    const [query] = useSearchParams();
    const nav = useNavigate();
    const [ar, setAr] = useState([]);


    useEffect(() => {
        doApi();
    }, [query])

    const doApi = async () => {
        const page = query.get("page") || 1;
        const url = URL + "/groups/groupsList?page=" + page;
        try {
            const data = await doApiGet(url);
            console.log(data);
            setAr(data);
        } catch (error) {
            console.log(error)
        }
    }


    const deleteGroup = async (_id) => {
        if (window.confirm("Are you sure you want to delete?")) {

            try {
                const url = URL + "/groups/" + _id;
                const data = await doApiMethod(url, "DELETE")

                if (data.deletedCount) {
                    doApi();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    const navi = () => {
        nav("/createGroup");
    }

    return (

        <div className='container'>


            <h1 className='display-4 '>Groups List</h1>
            <button className='btn btn-success my-2' onClick={navi}>Create new group</button>
            <hr></hr>
            <PagesBtns
                apiUrl={URL + "/groups/count"}
                linkTo={"/admin/groups?page="} />
            <table className='table table-striped my-3'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>name</td>
                        <td>desc</td>
                        <td>_id</td>
                        <td>admin</td>
                        <td>delete</td>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <tr key={i + 1}>
                                <td>{i + 1}</td>
                                <td>{item.group_name}</td>
                                <td title={item.description}> {item.description && item.description.substring(0, 15)}...</td>
                                <td>{item.group_admin}</td>
                                <td>{item._id}</td>
                                <td><button onClick={() => {
                                    deleteGroup(item._id);
                                }} className='btn btn-danger'>DEL</button>
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}



