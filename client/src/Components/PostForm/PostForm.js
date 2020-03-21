import React from 'react'
import { useForm } from 'react-hook-form'
import './postform.css'
import axios from 'axios'

function PostForm() {
    const { register, handleSubmit } = useForm()
    //const onSubmit = data => console.log(data);

    const onSubmit = data => {
        console.log(data)
        axios.post(
            '/api/newpost',
            {
                category: data.category,
                title: data.title,
                description: data.description
            },
        ).then(response => console.log(response))
    }

    return (
        <form className="test" onSubmit={handleSubmit(onSubmit)}>
            <label> Posting Title:</label>
            <input name="title"
                ref={register} />
            <label>Posting Description:</label>
            <input className="description" name="description"
                ref={register} />
            <label>Posting Category:</label>
            <select name="category" ref={register}>
                <option value="">Select One</option>
                <option value="cars">Cars</option>
                <option value="jobs">Jobs</option>
                <option value="pets">Pets</option>
                <option value="housing">Housing</option>
                <option value="connect">Missied Connections</option>
            </select>
            <br />
            <input type="submit" />
        </form>
    )
}

export default PostForm
