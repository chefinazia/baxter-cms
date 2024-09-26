import React from "react";

const Input = ({ label, options, isInput = false, placeholder = "" }) => {
  return (
    <div>
      <label className="block text-black mb-2">{label}</label>
      {isInput ? (
        <input
          type="text"
          placeholder={placeholder}
          className="border border-gray-300 p-2 rounded w-64"
        />
      ) : (
        <select className="border border-gray-300 p-2 rounded w-64">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;
