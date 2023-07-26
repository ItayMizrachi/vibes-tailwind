import { Link } from "react-router-dom";

const SideProfile = () => {
  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <Link to="profile">
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtdUdNId-v7xh7-AtaO54IGVNiwl7eZWkd9Mja2eL8eA4w=s96-c"
          alt="profile pic"
          className="rounded-full border p-[2px] w-16 h-16"
        />
      </Link>

      <div className="flex-1 mx-4">
        <Link to="profile">
          <h2 className="font-bold">itay_mizrachi</h2>
        </Link>
        <h3 className="text-sm text-gray-400">Welcome to Vibes</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  );
};

export default SideProfile;
