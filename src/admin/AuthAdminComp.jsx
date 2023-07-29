import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { URL, doApiGet } from '../services/apiService';
import { toast } from "react-toastify";




export default function AuthAdminComp() {
    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, [])



    const doApi = async () => {
        try {
            const url = URL + "/users/checkToken";
            const data = await doApiGet(url);
            if (data.role != "admin") {
                toast.error("You cant be here (just admin) ");
                localStorage.removeItem(TOKEN_KEY);
                nav("/admin")
            }

        } catch (error) {
            toast.error("There problem, try login again ");
            nav("/admin")
            // console.log(error);
        }

    }



    return (

        <React.Fragment></React.Fragment>

    )

}