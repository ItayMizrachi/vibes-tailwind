import { useEffect, useState } from "react";
import { URL, doApiGet } from "../services/apiService";
import { useUserData } from "./useUserData";

export const useShowNoftlications = () => {
  const [showNoftlications, setShowNoftlications] = useState(false);
  const { userData } = useUserData();

  const toggleNoftlications = () => {
    setShowNoftlications(!showNoftlications);
  };

  const [isRead, setIsRead] = useState({ unreadCount: 0 });

  useEffect(() => {
    if (userData && userData._id) {
      const doApiUnreadCount = async () => {
        try {
          const url = URL + "/notifications/unread-count/" + userData._id;
          const data = await doApiGet(url);
          setIsRead(data);
          // console.log(data);
        } catch (err) {
          console.log(err);
        }
      };

      doApiUnreadCount();
    }
  }, [userData]);

  return { showNoftlications, setShowNoftlications, toggleNoftlications, isRead, setIsRead };
};
