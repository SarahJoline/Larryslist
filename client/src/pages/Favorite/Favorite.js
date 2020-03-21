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
    API.getFavorites().then(res => {
      //console.log(res.data[0]._id)
      setposts({ posts: res.data });
    });
  }, []);

  return (
    <div>
      <div className="header-container">
        <h2 className="header">Favorite Postings:</h2>
      </div>
      <div className="post-container">
        <div className="postingss">
          {posts.posts.map((post, i) => {
            return (
              <div className="render-post" key={i}>
                <div className="card text-white bg-danger mb-3">
                  <div className="card-header">
                    <h5>Title: {post.title}</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Category: {post.category}</h5>
                    <p className="card-text">Description: {post.description}</p>
                    <div className="form-group">
                      {/* <label>
                        Add Comment:
                                        </label> */}
                      {/* <textarea
                        className="form-control"
                        id={post._id}
                        rows="3"
                        onChange={e => setComment({
                          comments: e.target.value,
                          id: post._id
                        })}
                      ></textarea>
                      <input
                        id={post._id}
                        type="submit"
                        value="add comment"
                        className="btn btn-dark"
                      />
                      <textarea
                        className="form-control"
                        id={post._id}
                        rows="2"
                        value={post.comments}
                        placeholder="Your Comment.."
                      ></textarea> */}
                      <input
                        id={post._id}
                        type="submit"
                        value="Delete From Favorite"
                        className="btn btn-dark"
                        onClick={() => {
                          //console.log(post._id)
                          let id = post._id;
                          Axios.patch(`/api/favorite/${id}`, {
                            saved: false
                          }).then(res => console.log(res));
                          // window.location.reload(true);
                          props.history.push("/allpostings");
                        }}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div >
    </div>
  )
}
export default Favorite;
