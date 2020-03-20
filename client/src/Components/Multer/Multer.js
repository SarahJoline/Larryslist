import React, { useState } from 'react'

export const Multer = () => {

    const [file, setFile] = useState();
    const [filename, setFilename] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="file"
                    onChange={onChange}
                ></input>
            </form>
            {filename}
        </div>
    )
}


export default Multer
