import React from "react";

const ListItem = (props) => {
  const { name, link, icon, bgColor } = props.item;

  return (
    <div
      className="ListItem"
      style={{
        backgroundColor: bgColor,
        padding: "10px",
        margin: "10px",
      }}
    >
      <img src={icon} alt={name} />
      <a href={link} >
        {name}
      </a>
    </div>
  );
};

export default ListItem;
