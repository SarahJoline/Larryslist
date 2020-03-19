import React from "react";

function AutocompleteItem(props) {
  console.log("This is PROPS: ", props);
  return (
    <div className="result">
      <div className="bubble">
        <h2>{props.title.title}</h2>
        <div className="text">{props.title.image}</div>
        <a
          style={{
            padding: "0px 10px 5px",
            display: "block",
            textAlign: "right"
          }}
          target="_blank"
          href="/fix-this"
        >
          See full article
        </a>
      </div>
    </div>
  );
}

export default AutocompleteItem;
