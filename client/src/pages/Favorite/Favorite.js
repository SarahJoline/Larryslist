import React, { useEffect, useState } from "react"
import API from "../../Components/utility/API"

function Favorite() {
    const [posts, setposts] = useState({ posts: [] })
    useEffect(() => {
        API.getposts().then(res => {
            console.log(res)
            setposts({ posts: res.data })
        })
    }, [])


    return (
        <div>
            <h1 className="header">Posts you saved:</h1>
            {posts.posts.map((post, i) => {
                return (
                    <div>
                        <h5>Posting Category: {post.category}</h5>
                        <h5>Posting Title: {post.title}</h5>
                        <h6>Posting Description: {post.description}</h6>
                        <input type="submit" value="Save to Favorites"></input>
                    </div>
                )
            })}
        </div>
    )

}
export default Favorite

