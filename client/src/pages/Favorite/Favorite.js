import React, { useEffect, useState } from "react";
import API from "../../Components/utility/API";

function Favorite() {
  const [posts, setposts] = useState({ posts: [] });
  useEffect(() => {
    API.getposts().then(res => {
      console.log(res);
      setposts({ posts: res.data });
    });
  }, []);

  return (
    <div>
      <h1 className="header">Posts you saved:</h1>
      {posts.posts.map((post, i) => {
        return <h1>{post.title}</h1>;
      })}
    </div>
  );
}
export default Favorite;
