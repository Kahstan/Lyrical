import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Artist from "./components/Artist";
import Song from "./components/Song";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorModal from "./components/ErrorModal";
import googleApi from "./secret.js";

// new lyrics searcher
const musicMatchApiKey = "1538e2542ebac4878de127b5193d9854";

///// lyrics api /////
// const apiUrl = "https://api.lyrics.ovh/v1/";
//insert your own API here
const APIKEY = googleApi.apikey;
const result = 2;

function App() {
  ///// lyrics /////
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);
  //// Youtube////
  const [youtube, setYoutube] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  /////// youtube api ////////
  const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${APIKEY}&maxResults=${result}`;
  const lyricsUrl = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=${musicMatchApiKey}`;

  const fetchLyrics = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      const lyrics = await res.json();

      setLyrics(
        lyrics.message.body.lyrics.lyrics_body.replace(/(\n|\r)/g, "<br />")
      );
      console.log(lyrics);
    } catch (err) {
      console.log(error);
      setError(err.message);
    }
    setIsLoading(false);
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

  const fetchYoutube = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);

      if (res.status === 403) {
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
              height="327"
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

      setYoutube(finalMapData);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!firstLoad) {
      fetchLyrics(lyricsUrl);
      fetchYoutube(finalUrl);
      window.scrollBy(0, 140);
      setIsLoading(true);
    } else {
      setFirstLoad(false);
    } // eslint-disable-next-line
  }, [input]);

  const handleModelOkay = () => {
    setError(false);
  };

  return (
    <div>
      <h1 className="text-5xl tracking-wide py-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 scroll-smooth">
        Lyrical
      </h1>
      <form>
        <Artist handleArtistChange={handleArtistChange} />
        <Song handleSongChange={handleSongChange} />
        <Button handleSubmit={handleSubmit} />
      </form>

      <div className="grid grid-cols-6 gap-4">
        <div className=" block mt-4 mb-12">
          <div className="mt-6 ml-10">{youtube}</div>
        </div>
        {/* this is scary */}
        {!isLoading && (
          <p
            className="leading-tight col-start-3 col-end-7 block ml-48 mt-10 rounded-xl mb-10 h-86 text-l max-w-2xl h-screen text-center text-zinc-50 overflow-auto"
            dangerouslySetInnerHTML={{ __html: lyrics }}
          ></p>
        )}
        {isLoading && <LoadingSpinner />}

        {error && (
          <ErrorModal
            title="Error Encountered"
            message="The database might not have the song you are looking for.."
            okayClicked={handleModelOkay}
          />
        )}
      </div>
    </div>
  );
}

export default App;
