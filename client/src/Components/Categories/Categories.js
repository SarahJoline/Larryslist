import React, { useState, useEffect } from "react";
//import { Button } from "reactstrap";

import API from "../Utility/API"

function Categories() {
  const [posts, setPosts] = useState([])
  //get all posts
  useEffect(() => {
    API.getposts().then(getposts => {
      console.log(getposts)
      setPosts(getposts.data)
    })
  }, [])
  //render them to jsx
  return (
    <div>
      <div> {posts.map(post => {
        return (
          <p><a href={"/detail/" + post._id}>
            {post.title}
          </a>
          </p>
        )
      })}
      </div>

      {/* <Button color="danger">Cars</Button>
      <Button color="danger">Jobs</Button>
      <Button color="danger">Pets</Button>
      <Button color="danger">Housing</Button>
      <Button color="danger">Missed Connections</Button> */}
    </div>
  );
}

export default Categories;
