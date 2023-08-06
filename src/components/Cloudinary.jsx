import React, { useRef } from 'react';
import { URL, TOKEN_KEY, doApiCloud } from "../services/apiService";
import { toast } from "react-toastify";



const Cloudinary = () => {

    const uploadRef = useRef();
    const onSub = (e) => {
        e.preventDefault();
        doApiCloudUpload();
    }
    const doApiCloudUpload = () => {
        const myFile = uploadRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(myFile)
        reader.onloadend = async () => {
            const url = URL + "/upload/cloud";
            try {
                const resp = await doApiCloud(url, reader.result);
                console.log(resp.data);

                const url2 = resp.data.secure_url;
                console.log(url2);
                toast.success("nice picture!.");
            }
            catch (err) { console.log(err); }
        }
    }

    return (

        <div className="container mx-auto text-center">
            {/* encType='multipart/form-data' -> כדי לעבוד עם קבצים */}
            <form onSubmit={onSub} className="col-md-6 bg-gray-200 p-3 rounded-md">
                <h1 className="text-center text-gray-900 mb-5">Upload to Clouds</h1>
                <input
                    ref={uploadRef}
                    type="file"
                    className="border border-gray-400 py-2 px-3 rounded-md mb-3"
                />
                <button className="bg-gray-800 text-white py-2 px-4 rounded-md mt-3 mx-2">
                    Upload Image
                </button>
            </form>
        </div>

    )

}
export default Cloudinary;