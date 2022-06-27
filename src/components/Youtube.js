import React, { useState } from "react";

const APIKEY = "AIzaSyBYqcs4yJLvZWb6ZJK5iEDi_KZn1Hog_Kw";
const result = 5;

const Youtube = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${APIKEY}&maxResults=${result}`;

  const fetchSearch = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("something is wrong");
      }

      const data = await res.json();
      console.log(data.items[0].id.videoId);
      const mapData = data.items.map(
        (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
      );

      setSearch({ mapData });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearch(finalUrl);
  };
  //still not able to map it out, the website crashes when the jsx gets loaded without value, thinking whether or not to just display the first video first.
  console.log(search.mapData);

  return (
    <div>
      <form className="ml-40 mb-10">
        <input
          placeholder="Youtube Search"
          onChange={handleInputChange}
        ></input>
        <button
          className="py-2 px-3 w-50 mx-1 block bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      {search.mapData}
      {/* {search.mapData.map((link, i) => {
        const frame = (
          <div className="youtube">
            <iframe
              className="ml-10 relative"
              width="560"
              height="315"
              key={i}
              src={link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        );
        return frame;
      })} */}
    </div>
  );
};

export default Youtube;
