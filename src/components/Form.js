import React, { useState } from "react";

const apiUrl = "https://api.lyrics.ovh/v1/";

const Form = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setError(null);
    try {
      const res = await fetch(url, { mode: "cors" });

      const lyrics = await res.json();
      console.log(lyrics);
      setLyrics(lyrics.lyrics);
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
    fetchPost(apiUrl + artist + "/" + song);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Artist name"
          onChange={handleArtistChange}
        />

        <input
          type="text"
          placeholder="Song name"
          onChange={handleSongChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <p>{lyrics}</p>
    </>
  );
};

export default Form;
