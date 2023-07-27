import React, { useEffect, useState } from 'react';
import { URL, doApiGet } from '../services/apiService';
import Post from './Post';

const posts = [
    {
      username: "itay_mizrachi",
      img_url: "https://cdn.discordapp.com/attachments/1022272232367591547/1089830026792415292/raz_shuker_Coffee_cart_forest_autumn_people_c7d791f9-40d6-4438-9458-098778ad9423.png",
      id: 1,
      desc: "Coffee Table",
    },
    {
      username: "user123",
      img_url: "https://images.unsplash.com/photo-1690151711465-2bfe4e69f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 2,
      desc: "Beautiful Scenery",
    },
    {
      username: "john_doe",
      img_url: "https://images.unsplash.com/photo-1690286727405-ecdf6ab04bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 3,
      desc: "Nature Walk",
    },
    {
      username: "alice_wonderland",
      img_url: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 4,
      desc: "Sunset at the Beach",
    },
    {
      username: "coding_guru",
      img_url: "https://images.unsplash.com/photo-1690122991917-a06094f2e65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      id: 5,
      desc: "Code & Coffee",
    },
    {
      username: "travel_bug",
      img_url: "https://images.unsplash.com/photo-1690215711687-777c0e2cb7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 6,
      desc: "Adventure Awaits",
    },
  ];

  const Posts = () => {
    const [postsInfo, setPostsInfo] = useState([]);

    useEffect(() => {
      doApi();
    }, []);
  
    const doApi = async () => {
      try {
        const url = URL + "/userPosts/allposts";
        const data = await doApiGet(url);
        setPostsInfo(data);
      //  console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
  

  return (
    <div> 
      {postsInfo.map((post) => (
        <Post
            key={post._id}
            _id={post._id}
            user_name={post.user?.user_name}
            profilePic={post.user?.profilePic}
            img_url={post.img_url}
            desc={post.description}
        />
    ))}</div>
  )
}

export default Posts