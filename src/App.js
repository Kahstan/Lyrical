import React, { useState, useEffect } from "react";
import Lyrics from "./components/Lyrics";
import Youtube from "./components/Youtube";

const apiUrl = "https://api.lyrics.ovh/v1/";
const APIKEY = "AIzaSyDkfCnshU7ku2AMAvsLa7U4SfED2ZO84ws";
const result = 5;

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);
  //// Youtube////
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  /////// youtube final api ////////
  const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${APIKEY}&maxResults=${result}`;

  const fetchLyrics = async (url) => {
    setError(null);
    try {
      const res = await fetch(url, { mode: "cors" });
      const lyrics = await res.json();

      setLyrics(lyrics.lyrics.replace(/(\n|\r)/g, "<br />"));
      console.log(lyrics);
    } catch (err) {
      console.log(error);
      setError(err.message);
    }
  };

  const handleArtistChange = (event) => {
    event.preventDefault();
    setArtist(event.target.value);
  };
  const handleSongChange = (event) => {
    event.preventDefault();
    setSong(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(artist + "%20" + song);
  };

  const fetchSearch = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("something is wrong");
      }

      const data = await res.json();
      const mapData = data.items.map(
        (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
      );

      const finalMapData = mapData.map((link, i) => {
        return (
          <div className="youtube" key={i}>
            <iframe
              className="ml-10 relative"
              width="560"
              height="315"
              key={i}
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <br />
          </div>
        );
      });

      setSearch(finalMapData);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (!firstLoad) {
      fetchLyrics(apiUrl + artist + "/" + song);
      fetchSearch(finalUrl);
    } else {
      setFirstLoad(false);
    }
  }, [input]);

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
          <Youtube
            handleInputChange={handleInputChange}
            handleYoutubeSubmit={handleSubmit}
          />
          <div>{search}</div>
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
