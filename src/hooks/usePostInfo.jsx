import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL, doApiGet, doApiMethod } from "../services/apiService";

export const usePostInfo = () => {
  const [postsInfo, setPostsInfo] = useState([]);

  useEffect(() => {
    doApiPosts();
  }, []);

  const doApiPosts = async () => {
    try {
      const url = URL + "/userPosts/allposts";
      const data = await doApiGet(url);
      setPostsInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (_id) => {
    try {
      if (window.confirm("Are you sure you want to delete post?")) {
        const url = URL + "/userPosts/" + _id;
        await doApiMethod(url, "DELETE");
        setPostsInfo((prevData) => prevData.filter((p) => p._id !== _id));
        toast.info(`Post deleted`);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return { deletePost, postsInfo};
};


//TODO: lazyloading after the bug  in the library is fixed
  //lazyloading

  // const [Intersector, data, setData] = useLazyLoading(
  //   { initPage: 0, distance: "50px", targetPercent: 0.5 },
  //   async (page) => {
  //     try {
  //       const url = URL + `/userPosts/allposts?page=${page}`;
  //       const d = await doApiGet(url);
  //       setData(d);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // );


  // useEffect(() => {
  //   setPostsInfo(data);
  // }, [data]);


  //   {/* <Intersector /> */}

