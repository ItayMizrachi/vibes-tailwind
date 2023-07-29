import React, { useEffect, useState } from 'react'
import { URL, doApiGet, doApiMethod } from '../services/apiService';
import { useSearchParams } from 'react-router-dom';
import PagesBtns from './PagesBtns';


export default function PostsAdmin() {


    const [query] = useSearchParams();
    const [ar, setAr] = useState([]);


    useEffect(() => {
        doApi();
    }, [query])

    const doApi = async () => {
        const page = query.get("page") || 1;
        const url = URL + "/userPosts/postsList?page=" + page;
        try {
            const data = await doApiGet(url);
            console.log(data);
            setAr(data);
        } catch (error) {
            console.log(error)
        }
    }


    const deletePost = async (_id) => {
        if (window.confirm("Are you sure you want to delete?")) {

            try {
                const url = `${URL}/userPosts/${_id}`
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

            <h1 className='display-4 '>ALL posts List</h1>
            <PagesBtns
                apiUrl={URL + "/userPosts/count"}
                linkTo={"/admin/posts?page="} />
            <table className='table table-striped my-3'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>user_name</td>
                        <td>name</td>
                        <td>_id</td>
                        <td>description</td>
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
                                <td>{item._id}</td>
                                <td>{item.description}</td>


                                <td><button onClick={() => {
                                    deletePost(item._id);
                                }} className='btn btn-danger'>DEL</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}



