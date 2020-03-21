import React, { useState, useEffect, useRef } from "react";
import API from "../../Components/utility/API";
import { useParams } from "react-router-dom";

let _id = "5e73cd8debd0d346e0c48e9e";

function Detail() {
  const myRef = useRef();
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    API.getpost(id).then(fred => {
      setDetail(fred.data[0]);
      console.log(fred);
    });
  }, []);

  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.description}</p>
      <form>
        <input type="text" ref={myRef} />
        <button
          onClick={() => API.savecomment(id, { text: myRef.current.value })}
          type="button"
        >
          Make a Comment!
        </button>
      </form>
    </div>
  );
}

export default Detail;
