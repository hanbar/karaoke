import React, { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Player from "./components/Player";
import Lyrics from "./components/Lyrics";
import lines from "./lyrics-lines";

const App = () => {
  const [activeLine, setActiveLine] = useState(-1);

  const handleTimeUpdate = (currentTime) => {
    const index = lines.findLastIndex((line) => line.time < currentTime);

    if (index !== activeLine) {
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
