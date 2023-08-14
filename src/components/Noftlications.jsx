import {
  ArrowRightIcon,
  ChatIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import React, { useContext } from "react";
import { MyContext } from "../context/myContext";
import moment from "moment";

const Noftlications = ({ show, setShow }) => {
  const { userData } = useContext(MyContext);

  return (
    <div className="flex fixed right-0 z-40">
      {/* sidebar */}
      <div className={`  transition-all transform duration-300 ease-in-out`}>
        <div className="max-2-xs h-[100vh] border-l-2 overflow-x-hidden min-w-[20rem] bg-white custom-scrollbar">
          <div className="flex flex-col h-[100vh] pt-0 p-2">
            {/* Title */}
            <div className="bg-white p-2 sticky top-0 z-50">
              <div className="bg-white ">
                <div
                  onClick={() => setShow(false)}
                  className="border-b-2 border-gray-200 chatRow flex justify-between"
                >
                  <h3 className="text-lg font-semibold">Noftlications</h3>
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                  <p className="text-gray-400">
                    {moment("2023-08-12T10:25:44.869Z").fromNow()}
                  </p>
                </div>
              </div>
              {/* end of Noftlication */}
              {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Commented on your post!</p>
                  <p className="text-gray-400">
                    {moment("2023-08-12T10:25:44.869Z").fromNow()}
                  </p>
                </div>
              </div>
              {/* end of Noftlication */}
              {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Started Following you ! </p>
                  <p className="text-gray-400">
                    {moment("2023-08-12T10:25:44.869Z").fromNow()}
                  </p>
                </div>
              </div>
              {/* end of Noftlication */}
              {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */} {/* Noftlication */}
              <div className="justify-center chatRow">
                <div className="w-10 h-10">
                  <img
                    src={userData?.profilePic}
                    alt="profile pic"
                    className="object-cover w-full h-full rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-1 truncate md:inline-flex flex-col">
                  <h3 className="font-semibold">{userData.user_name}</h3>
                  <p>Liked your post!</p>
                </div>
              </div>
              {/* end of Noftlication */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noftlications;
