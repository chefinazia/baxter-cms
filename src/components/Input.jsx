import React from "react";

const Input = ({ label, className = "", ...props }) => {
  return (
    <div>
      <label className="block text-black mb-2">{label}</label>
      {
        <input
          className={`border border-gray-300 p-2 rounded w-64 ${className}`}
          {...props}
        />
      }
    </div>
  );
};

export default Input;
