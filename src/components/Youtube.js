import React from "react";

const Youtube = (props) => {
  return (
    <div>
      <form className="ml-40 mb-10">
        <input
          placeholder="Youtube Search"
          onChange={props.handleInputChange}
        ></input>
        <button
          className="py-2 px-3 w-50 mx-1 block bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
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
