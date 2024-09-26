import React from "react";

const LoginButton = () => {
  return (
    <>
      <button
        className="btn middle rounded-[3px] duration-500 ease-in-out center font-medium text-white text-ellipsis shadow-md transition-all hover:shadow-lg border border-collapse border-x-2 border-y-4 border-green-800"
        data-ripple-light="true"
      >
        Login
      </button>
    </>
  );
};

export default LoginButton;
