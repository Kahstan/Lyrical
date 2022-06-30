import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="mt-1 block w-50 px-3 mx-1 py-2 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 "
        onClick={props.handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Button;
