import { useEffect, useState } from "react";
import { TOKEN_KEY, URL, doApiGet } from "../services/apiService";

export const useUserData = () => {
  const [userData, setUserData] = useState({});
  const [userDataFetched, setUserDataFetched] = useState(false);

  const doApiUser = async () => {
    const url = URL + "/users/userInfo";
    const data = await doApiGet(url);
    console.log({ data })
    setUserData(data);
    setUserDataFetched(true); // Set userDataFetched to true after data is received
  };

  useEffect(() => {
    if (localStorage[TOKEN_KEY]) {
      doApiUser();
    }
  }, []);

  const userSignOut = () => {
    setUserData({});
    setUserDataFetched(false); // Reset userDataFetched when user signs out
  };

  // We are returning the userData and userDataFetched state variables as well
  return { userData, userDataFetched, doApiUser, userSignOut };
};
