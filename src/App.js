import React, { useState } from "react";
import Lyrics from "./components/Lyrics";
import Youtube from "./components/Youtube";

const apiUrl = "https://api.lyrics.ovh/v1/";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);

  const fetchLyrics = async (url) => {
    setError(null);
    try {
      const res = await fetch(url, { mode: "cors" });
      const lyrics = await res.json();

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

  return (
    <div>
      <h1 className="text-5xl font-medium py-2">Search Lyrics</h1>

      <Lyrics
        handleSubmit={handleSubmit}
        handleArtistChange={handleArtistChange}
        handleSongChange={handleSongChange}
        fetchLyrics={fetchLyrics}
      />
      <div className="grid grid-cols-6 gap-4 border- 2">
        <div className=" block mt-4 mb-10">
          <Youtube />
        </div>
        {/* this is scary */}
        <p
          className=" leading-tight col-start-3 col-end-7 block ml-40 mt-10 mb-10 text-m max-w-2xl text-center border-2 border-sky-500	"
          dangerouslySetInnerHTML={{ __html: lyrics }}
        ></p>
      </div>
    </div>
  );
}

export default App;
