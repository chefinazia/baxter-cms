import React from "react";

const Input = ({ label, type= "text", placeholder= "" }) => {
  return (
    <div>
      <label className="block text-black mb-2">{label}</label>
      {(
        <input
        type= {type}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded w-64"
      />
      )}
    </div>
  );
};

export default Input;
