import React from "react";

const Lyrics = (props) => {
  return (
    <div>
      <button
        className="py-2 px-3 w-50 mx-1 block bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={props.handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Lyrics;
