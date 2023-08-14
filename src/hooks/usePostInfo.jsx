import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { URL, doApiGet, doApiMethod } from "../services/apiService";

export const usePostInfo = () => {
  const [postsInfo, setPostsInfo] = useState([]);
  const [singlePostInfo, setSinglePostInfo] = useState({}); 
  const { post_id } = useParams();

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

  // TODO: lazyloading after the bug  in the library is fixed
  // lazyloading

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
  //   );

    const doApiSinglePost = async () => {
      try {
        const url = URL + "/userposts/single/" + post_id;
        const data = await doApiGet(url);
        setSinglePostInfo(data);
        console.log(post_id)
        console.log(data);
      } catch (err) {
        console.log(err);
        console.log(URL + post_id);
      }
    };

  // useEffect(() => {
  //   setPostsInfo(data);
  //   console.log(postsInfo)
  // }, [data]);

  useEffect(() => {
    doApiSinglePost();
  }, []);


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

  return { deletePost, postsInfo,  singlePostInfo };
};
