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
    //console.log(e.target.currentTime);
    onTimeUpdate(e.target.currentTime);
  };

  return (
    <>
      <audio autoPlay controls ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <button
          type="button"
          onClick={() => setPlaying((prevState) => !prevState)}
        >
          <img src={playing ? playIcon : pauseIcon} />
          Button
        </button>
      </div>
    </>
  );
};

export default Player;
