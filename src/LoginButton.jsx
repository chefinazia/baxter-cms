import React from "react";

const LoginButton = () => {
  return (
    <>
      <button
        class="middle rounded-[3px] duration-500 ease-in-out center bg-green-700 py-3 px-6 font-serif text-sm font-medium text-white text-ellipsis shadow-md transition-all hover:shadow-lg border border-collapse border-x-2 border-y-4 border-green-800"
        data-ripple-light="true"
      >
        Login
      </button>
    </>
  );
};

export default LoginButton;
