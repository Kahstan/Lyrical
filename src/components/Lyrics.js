import React, { useState } from "react";

const apiUrl = "https://api.lyrics.ovh/v1/";

const Lyrics = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);

  const fetchLyrics = async (url) => {
    setError(null);
    try {
      const res = await fetch(url, { mode: "cors" });
      const lyrics = await res.json();

      //couldnt get the replace to work. Needs help on this.
      setLyrics(lyrics.lyrics.replace(/(\n|\r)/g, "<br />"));
      console.log(lyrics);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };
  const handleSongChange = (event) => {
    setSong(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchLyrics(apiUrl + artist + "/" + song);
  };

  const artistSong = artist + " - " + song;

  return (
    <div>
      <form>
        <span>
          <input
            type="text"
            className="mt-1 block w-50 px-3 mx-1 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-60 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
            placeholder="Artist"
            onChange={handleArtistChange}
          />
        </span>
        <span>
          <input
            type="text"
            className="mt-1 block w-50 px-3 py-2 mx-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 capitalize
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:italic
        "
            placeholder="Song name"
            onChange={handleSongChange}
          />
        </span>

        <button
          className="py-2 px-3 w-50 mx-1 block bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <h2 className="capitalize mt-2 text-3xl">{artistSong}</h2>
      {/* this is some scary shit */}
      <p
        className="ml-40 mt-10 mb-10 text-l max-w-lg text-center border-2 border-sky-500	"
        dangerouslySetInnerHTML={{ __html: lyrics }}
      ></p>
    </div>
  );
};

export default Lyrics;
