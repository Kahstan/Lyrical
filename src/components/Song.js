import React from "react";

const Song = (props) => {
  return (
    <span>
      <input
        type="text"
        className="mt-1 block w-50 px-3 py-2 mx-1 bg-white border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:italic
      "
        placeholder="Song name"
        onChange={props.handleSongChange}
      />
    </span>
  );
};

export default Song;
