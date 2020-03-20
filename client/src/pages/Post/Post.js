import React, { useState } from 'react';
import axios from "axios";

function Post() {
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    const handleTitleChange = event => {
        setTitle(event.target.value)
        console.log(title)
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value)
        console.log(description);
        
    }

    const submitBtn = () => {
        console.log({ title, description });
        
        axios.post('/api/newPost',{title,description
        
    }).then(x=>window.location="/cats")


    }

    return (
     
           <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Title</label>
    <input type="text" onChange={handleTitleChange} className="form-control" id="Title" value={title} />
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Description</label>
                <input type="text" onChange={handleDescriptionChange} className="form-control" id="Description" value={description}/>
            </div>
            <button onClick={submitBtn} type="button">Submit</button>
        </form>

 
    )
}

export default Post
