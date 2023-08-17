import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { URL, doApiGet, doApiMethod } from "../services/apiService";

const EditPost = () => {
    const params = useParams();
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [item, setItem] = useState({});

    useEffect(() => {
        doApiInit();
    }, []);

    const doApiInit = async () => {
        try {
            const url = URL + "/userPosts/single/" + params["id"];
            const data = await doApiGet(url);
            console.log(data);
            setItem(data);
        } catch (error) {
            console.log(error);
        }
    };

    const doApiEdit = async (_bodyData) => {
        try {
            const url = URL + "/userPosts/" + params["id"];
            const data = await doApiMethod(url, "PUT", _bodyData);

            if (data.modifiedCount) {
                toast.success("post updated");
                // nav("/");
            }
        } catch (error) {
            alert("there problem2222");
        }
    };

    const onSub = (_bodyData) => {
        console.log(_bodyData);
        doApiEdit(_bodyData);
    };
    return (
        <div className="container">
            <h2 className="text-center p-3">Edit user! </h2>
            {item.description ? (
                <form onSubmit={handleSubmit(onSub)} className="col-md-6 mx-auto p-2">
                    <label>Description:</label>
                    <input
                        defaultValue={item.description}
                        {...register("description", { required: true, minLength: 2 })}
                        type="text"
                        className="form-control"
                    />
                    {errors.description && (
                        <div className="text-danger">*Enter valid Description(min 2 chars)</div>
                    )}



                    <button className="btn  mt-3">Edit</button>
                    <br></br>

                </form>
            ) : (
                <h2>Loading..</h2>
            )}
        </div>
    );
};

export default EditPost;
