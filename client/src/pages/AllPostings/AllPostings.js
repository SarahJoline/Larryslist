import React, { useEffect, useState } from "react"
import API from "../../Components/utility/API"
import './allpostings.css'
import Axios from "axios"

function AllPostings(props) {
    const [posts, setposts] = useState({ posts: [] })


    useEffect(() => {
        API.getposts().then(res => {
            //console.log(res.data[0].comments)
            setposts({ posts: res.data })
        })
    }, [])


    return (
        <div className="post-container">
            <h2 className="header">All Postings:</h2>
            <div className="postings">
                {posts.posts.map((post, i) => {
                    return (
                        <div className="post" key={i}>
                            <h5>Posting Category: {post.category}</h5>
                            <h5>Posting Title: {post.title}</h5>
                            <h6>Posting Description: {post.description}</h6>
                            <input
                                id={post._id}
                                type="submit"
                                value="Save to Favorites"
                                onClick={
                                    () => {
                                        //console.log(post._id)
                                        let id = post._id
                                        Axios.patch(`/api/favorite/${id}`, { saved: true })
                                            .then(res => console.log(res))
                                    }
                                }
                            ></input>
                            <input
                                type="submit"
                                id={post._id}
                                value="View Posting"
                                onClick={
                                    () => {
                                        let id = post._id
                                        console.log(id)
                                        Axios.get(`/api/find/${id}`)
                                            .then(viewPosting => {
                                                console.log(viewPosting)
                                            })
                                    }
                                }
                            />
                            <label>Add Comments:😎</label>
                            <input type="text" />
                            <input type="submit" value="add comment" />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default AllPostings
