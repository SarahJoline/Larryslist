import React from "react";
import AutocompleteItem from "./../AutocompleteItem/AutocompleteItem";

function Autocomplete(props) {
  return (
    <div className="list">
      {props.data.map(item => {
        return (
          <AutocompleteItem
            key={item.title}
            title={item.title}
            image={item.image}
            {...item}
          />
        );
      })}
    </div>
  );
}

export default Autocomplete;
