import React from "react";

function Display(props) {
  return (
    <div>
      {props.items.map(item => {
        return (
          <React.Fragment>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Display;
