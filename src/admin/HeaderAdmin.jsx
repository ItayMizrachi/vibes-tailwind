import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOKEN_KEY } from "../services/apiService";

const HeaderAdmin = () => {
    const nav = useNavigate();

    const onLogOut = () => {
        localStorage.removeItem(TOKEN_KEY);
        nav("/admin");
        toast.info("You logged out, see ya");
    }

    return (
        <header className="bg-blue-400 shadow-lg mb-4">
            <div className="container mx-auto py-4">
                <div className="flex items-center">

                    <div className="mx-3">
                        <h2 className="text-xl font-bold">Admin</h2>
                    </div>
                    <nav className="flex justify-between items-center flex-grow">
                        <ul className="flex space-x-4">
                            {localStorage[TOKEN_KEY] && (
                                <>
                                    <li><Link to="/admin/users">Users</Link></li>
                                    <li><Link to="/admin/groups">Groups</Link></li>
                                    <li><Link to="/admin/posts">Posts</Link></li>
                                </>
                            )}
                        </ul>
                        <div>
                            {localStorage[TOKEN_KEY] && (
                                <button onClick={onLogOut} className="p-2 rounded-lg mx-3 bg-red-500 hover:bg-red-700 ">Log out</button>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderAdmin