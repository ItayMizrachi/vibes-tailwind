import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../context/myContext";
import { TOKEN_KEY } from "../services/apiService";

const SideProfile = () => {
  const { userSignOut, userData } = useContext(MyContext);
  
  const onLogOut = () => {
    if (window.confirm("Are you sure you want to log out")) {
      localStorage.removeItem(TOKEN_KEY);
      userSignOut();
      toast.info("You logged out, see you soon...");
    }
  };

  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <Link to={userData.user_name}>
        <img
          src={userData?.profilePic}
          alt="profile pic"
          className="rounded-full border p-[2px] w-16 h-16"
        />
      </Link>

      <div className="flex-1 mx-4">
        <Link to={userData.user_name}>
          <h2 className="font-bold">{userData.user_name}</h2>
        </Link>
        <h3 className="text-sm text-gray-400">{userData.name}</h3>
      </div>

      <button
        onClick={onLogOut}
        className="text-sm font-semibold text-blue-400"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SideProfile;
