import React, { useState } from "react";

const APIKEY = "AIzaSyBYqcs4yJLvZWb6ZJK5iEDi_KZn1Hog_Kw";
const result = 5;
const search = "coldplay";

const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${APIKEY}&maxResults=${result}`;

const Youtube = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchSearch = async (url) => {
    setError(null);
    try {
      const res = await fetch(url, { mode: "cors" });
      const data = await res.json();
      const mapData = data.items.map(
        (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
      );
      console.log(mapData);
      setSearch({ mapData });
      console.log(search.mapData);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearch(finalUrl);
  };

  console.log(finalUrl);
  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        Click
      </button>
      {/* {search.mapData.map((link, i) => { */}
      {/* const frame = */}
      <div className="youtube">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c6t3bW7kx6E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* })} */}
    </div>
  );
};

export default Youtube;
