import React, { useEffect, useState } from "react";
import API from "../../Components/utility/API";
import "./favorite.css";
import Axios from "axios";

function Favorite(props) {
  const [posts, setposts] = useState({ posts: [] });
  const [comment, setComment] = useState();

  // const handleSubmit = event => {
  //     event.preventDefault();
  //     console.log(comment)
  // }

  useEffect(() => {
    API.getFavorites().then((res) => {
      //console.log(res.data[0]._id)
      setposts({ posts: res.data });
    });
  }, []);

  return (
    <div>
      <div className="post-container">
        <h2 className="header">Favorite Postings:</h2>
      </div>
      <div className="post-container">
        <div className="postings">
          {posts.posts.map((post, i) => {
            return (
              <div className="render-posts">
                <div className="post" key={i}>
                  <div className="card-header">
                    <h5>Posting Title: {post.title}</h5>
                  </div>
                  <div className="card-body">
                    <h5>Posting Category: {post.category}</h5>

                    <p className="card-text">
                      Posting Description: {post.description}
                    </p>

                    {/* <form onSubmit={handleSubmit}> */}
                    <input
                      id={post._id}
                      className="form-control"
                      value={post.comments}
                      type="text"
                      placeholder="Add Comment"
                    />
                    <input
                      id={post._id}
                      type="submit"
                      value="Add Comment"
                      className="btn btn-dark"
                      onClick={(handleSubmit) => {
                        console.log(post._id);
                        console.log(post.comments);
                      }}
                    />
                    {/* </form> */}

                    <input
                      id={post._id}
                      type="submit"
                      value="Delete"
                      className="btn btn-dark"
                      onClick={() => {
                        //console.log(post._id)
                        let id = post._id;
                        Axios.patch(`/api/favorite/${id}`, {
                          saved: false,
                        }).then((res) => console.log(res));
                        // window.location.reload(true);
                        props.history.push("/allpostings");
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Favorite;
