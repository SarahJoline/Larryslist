import React, { useEffect, useState } from "react";
import API from "../../Components/utility/API";
import "./allpostings.css";
import Axios from "axios";

function AllPostings(props) {
  const [posts, setposts] = useState({ posts: [] });
  const [comment, setComment] = useState({
    comments: [],
    id: ""
  });

  const SubmitValue = event => {
    event.preventDefault();
    //console.log(comment);
    const id = comment.id;
    const userComment = comment.comments;
    //console.log(userComment)
    //console.log(id);
    Axios.patch(`/api/comments/${id}`, {
      comments: userComment
    }).then(newComment => console.log(newComment));
    window.location.reload(true);
  };

  useEffect(() => {
    API.getposts().then(res => {
      //console.log(res.data[0].comments)
      setposts({ posts: res.data });
    });
  }, []);

  useEffect(() => {
    API.getposts().then(res => {
      //console.log(res.data[0].comments)
      setposts({ posts: res.data });
    });
  }, []);

  return (
    <div>
      <div className="header-container">
        <h2 className="header">All Postings:</h2>
      </div>
      <div className="post-container">
        <div className="postingss">
          {posts.posts.map((post, i) => {
            return (
              <div className="render-post">
                <div className="card text-white bg-danger mb-3" key={i}>
                  <div className="card-header">
                    <h5>Title: {post.title}</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Category: {post.category}</h5>
                    <p className="card-text">Description: {post.description}</p>
                    <input
                      className="btn btn-dark"
                      id={post._id}
                      type="submit"
                      value="Save to Favorites"
                      onClick={() => {
                        //console.log(post._id)
                        let id = post._id;
                        Axios.patch(`/api/favorite/${id}`, {
                          saved: true
                        }).then(res => console.log(res));
                      }}
                    ></input>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Add Comment: 🤬
                      </label>
                      <textarea
                        className="form-control"
                        id={post._id}
                        rows="3"
                        onChange={e =>
                          setComment({
                            comments: e.target.value,
                            id: post._id
                          })
                        }
                      ></textarea>
                      <input
                        id={post._id}
                        type="submit"
                        value="add comment"
                        className="btn btn-dark"
                        onClick={SubmitValue}
                      />
                      <textarea
                        className="form-control"
                        id={post._id}
                        rows="2"
                        value={post.comments}
                        placeholder="Your Comment.."
                      />
                    </div>
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
export default AllPostings;
