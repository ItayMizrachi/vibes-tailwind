import { useEffect, useState } from "react";
import { TOKEN_KEY, URL, doApiGet } from "../services/apiService";

export const useUserData = () => {
  const [userData, setUserData] = useState({});
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [loading ,setLoading] = useState(false);

  const doApiUser = async () => {
    setLoading(true)
    const url = URL + "/users/userInfo";
    const data = await doApiGet(url);
    setUserData(data);
    setUserDataFetched(true); // Set userDataFetched to true after data is received
    setLoading(false)
  };



  useEffect(() => {
    if (localStorage[TOKEN_KEY]) {
      doApiUser();
    }
  }, [localStorage[TOKEN_KEY]]);

  const userSignOut = () => {
    setUserData({});
    setUserDataFetched(false); // Reset userDataFetched when user signs out
  };

  

  // We are returning the userData and userDataFetched state variables as well
  return { userData, userDataFetched, doApiUser, userSignOut};
};



// import { useEffect, useState } from "react";
// import { TOKEN_KEY, URL, doApiGet } from "../services/apiService";

// export const useUserData = () => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     if (localStorage[TOKEN_KEY]) {
//       doApiUser();
//     }
//   }, []);

//   const doApiUser = async () => {
//     const url = URL + "/users/userInfo";
//     const data = await doApiGet(url);
//     // console.log(data);
//     setUserData(data);
//   };

//   // מנקה את הדאטא במיוחד כאשר המתשמש עושה
//   // LOG OUT
//   // כך שלא יהיו שיבושים כאשר כבר נמחק הטוקן מהלוקאל
//   const userSignOut = () => {
//     setUserData({});
//   };

//   //  doApiUser -> נצטרך את הפונקציה כאשר משתמש
//   // מתחבר
//   return { userData, doApiUser, userSignOut };
// };



