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
                nav("/");
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
        <div className="mt-5 bg-grey-lighter lg:mt-20">
            <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md border border-black border-solid">
                    <h2 className="text-center p-3">Edit Post! </h2>
                    {item.description ? (
                        <form onSubmit={handleSubmit(onSub)}>
                            <div className="relative p-1 mt-1 rounded-md lg:mt-4">
                                <label className="mr-2">Description:</label>

                                <input
                                    defaultValue={item.description}
                                    {...register("description", { required: true, minLength: 2 })}
                                    type="text"
                                    className="block w-full pl-10 border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm bg-gray-50"
                                />
                                {errors.description && (
                                    <div className="text-danger">*Enter valid Description(min 2 chars)</div>
                                )}


                                <button className="w-full py-3 my-1 mt-2 font-semibold text-center text-white bg-blue-500 rounded hover:bg-blue-600">Edit</button>
                            </div>
                        </form>
                    ) : (
                        <h2>Loading..</h2>
                    )}
                </div>
            </div>
        </div >
    );
};

export default EditPost;
