import React, { useState } from "react";

const APIKEY = "AIzaSyBYqcs4yJLvZWb6ZJK5iEDi_KZn1Hog_Kw";
const result = 5;
const search = "coldplay";

const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${APIKEY}&maxResults=${result}`;

const Youtube = (props) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

      setSearch({ mapData });
      console.log(search.mapData);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearch(finalUrl);
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        Click
      </button>
      {/* {search.mapData.map((link, i) => {
        const frame = ( */}
      <div className="youtube">
        <iframe
          className="ml-10"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yKNxeF4KMsY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      {/* ); */}
      {/* return frame; */}
      {/* })} */}
    </div>
  );
};

export default Youtube;
