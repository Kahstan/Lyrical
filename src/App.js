import React from "react";
import Lyrics from "./components/Lyrics";
import Youtube from "./components/Youtube";

function App() {
  return (
    <div>
      <h1 className="text-5xl font-medium py-2">Search Lyrics</h1>
      <Lyrics />
      <Youtube />
    </div>
  );
}

export default App;
