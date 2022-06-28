import React from "react";

const Artist = (props) => {
  return (
    <span>
      <input
        type="text"
        className="mt-1 block w-50 px-3 mx-1 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-60 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
        placeholder="Artist"
        onChange={props.handleArtistChange}
      />
    </span>
  );
};

export default Artist;
