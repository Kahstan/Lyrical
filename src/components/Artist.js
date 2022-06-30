import React from "react";

const Artist = (props) => {
  return (
    <span>
      <input
        type="text"
        className="mt-1 block w-50 px-3 mx-1 py-2 bg-white border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:italic"
        placeholder="Artist"
        onChange={props.handleArtistChange}
        required
        minlength="1"
      />
    </span>
  );
};

export default Artist;
