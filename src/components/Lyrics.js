import React from "react";

const Lyrics = (props) => {
  return (
    <div>
      <form>
        <span>
          <input
            type="text"
            className="mt-1 block w-50 px-3 mx-1 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-60 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
            placeholder="Artist"
            onChange={props.handleArtistChange}
          />
        </span>
        <span>
          <input
            type="text"
            className="mt-1 block w-50 px-3 py-2 mx-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:italic
        "
            placeholder="Song name"
            onChange={props.handleSongChange}
          />
        </span>

        <button
          className="py-2 px-3 w-50 mx-1 block bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Lyrics;
