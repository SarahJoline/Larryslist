import React from "react";

function Display(props) {
  return (
    <div>
      {props.items.map((item,index) => {
        return (
          <React.Fragment key={index}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Display;
