import React from "react";

const DropDownInput = ({ label, options }) => {
  return (
    <div>
      <label className="block text-black mb-2">{label}</label>
      {(
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

export default DropDownInput;
