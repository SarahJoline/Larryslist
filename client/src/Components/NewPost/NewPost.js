// import { navigate } from "@reach/router";
// import React, { Component, useState } from "react";

// const NewPost = () => {
//   const [userId, setUserId] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   //   const [image, setImage] = useState("");

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const result = await (
//       await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           userId: userId,
//           title: title,
//           description: description,
//           category: category
//         })
//       })
//     ).json();
//     if (!result.error) {
//       console.log(result.message);
//       navigate("/Login");
//     } else {
//       console.log(result.error);
//     }
//   };

//   const handleChange = e => {
//     if (e.currentTarget.name === "title") {
//       setTitle(e.currentTarget.value);
//       setDescription(e.currentTarget.value);
//       setCategory(e.currentTarget.value);
//     } else {
//       setDescription(e.currentTarget.value);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <div>
//             <label>Title</label>
//           </div>
//           <div>
//             <input
//               value={title}
//               onChange={handleChange}
//               type="text"
//               name="title"
//               autoComplete="title"
//             />
//           </div>
//           <div>
//             <label>Category</label>
//           </div>
//           <div>
//             <input
//               value={category}
//               onChange={handleChange}
//               type="text"
//               name="category"
//               autoComplete="category"
//             />
//           </div>
//           <div>
//             <label>Description</label>
//           </div>
//           <div>
//             <input
//               value={description}
//               onChange={handleChange}
//               type="text"
//               name="description"
//               autoComplete=""
//             />
//           </div>
//           <div>
//             <label>Image</label>
//           </div>
//           <div>
//             <input
//               //   value={Image}
//               onChange={handleChange}
//               type="file"
//               name="image"
//               autoComplete="file"
//             />
//           </div>
//           <div>
//             <button type="submit">Add Post</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewPost;
