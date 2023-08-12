import { useState } from "react";
import { URL, doApiMethod } from "../services/apiService";
import { useUserData } from "./useUserData";

export const useFollow = () => {
  const [  followFlag, setFollowFlag ] = useState(false);
  const { userData } = useUserData();
 

  const followUser = async (otherUser_id) => {
    try {
      if (otherUser_id._id !== userData?._id) {
        const url = URL + "/users/follow/" + otherUser_id;
        await doApiMethod(url, "PUT");
        setFollowFlag(!followFlag); 
        //console.log(flag);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return { followUser,  followFlag };
};
