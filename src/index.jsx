import React, { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Player from "./components/Player";
import Lyrics from "./components/Lyrics";
import lines from "./lyrics-lines";

const App = () => {
  const [activeLine, setActiveLine] = useState(-1);

  const handleTimeUpdate = (currentTime) => {
    const index = lines.findIndex((line) => line.time > currentTime) - 1;
    //const indexes = lines.filter((line) => line.time < currentTime);
    //const index = indexes.pop();

    if (index !== activeLine) {
      console.log(index);
      setActiveLine(index);
    }
  };

  return (
    <div className="container">
      <Player
        src="fools-garden-lemon-tree.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <Lyrics lines={lines} currentLineIndex={activeLine} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
