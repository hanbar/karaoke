import React, { useState, useRef, useEffect } from "react";
import pauseIcon from "../img/pause-icon.svg";
import playIcon from "../img/play-icon.svg";

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const handleTimeUpdate = (e) => {
    onTimeUpdate(e.target.currentTime);
  };

  return (
    <div className="player-controls">
      <audio controls ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <button
          type="button"
          className={playing ? "play play-button" : "pause play-button"}
          onClick={() => setPlaying((prevState) => !prevState)}
        />
      </div>
    </div>
  );
};

export default Player;
