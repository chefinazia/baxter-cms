import React from "react";

const GenericButton = ({
  text = "",
  onClick = () => {},
  className = "",
  type = "button",
  style = {},
  icon = null,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex justify-center 
        items-center 
        border-2 
        px-4 
        py-2 
        rounded-md 
        text-black bg-gray 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-400 ${className}`}
      style={style}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default GenericButton;
