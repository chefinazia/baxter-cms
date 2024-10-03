import React from "react";

const Pagination = ({ total, pageSize, current, onChange }) => {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`px-4 py-2 mx-1 border ${
          current === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white"
        }`}
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          className={`px-4 py-2 mx-1 border ${
            current === i + 1 ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 mx-1 border ${
          current === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white"
        }`}
        onClick={() => onChange(current + 1)}
        disabled={current === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
