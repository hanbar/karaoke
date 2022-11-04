import React, { useState, useRef, useEffect } from "react";

const Lyrics = ({ lines, currentLineIndex }) => {
  const activeLineRef = useRef();

  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [currentLineIndex]);

  return (
    <>
      {lines.map((line, index) => {
        if (currentLineIndex === index) {
          return (
            <p key={index} className="current-line" ref={activeLineRef}>
              {line.text}
            </p>
          );
        }
        return <p key={index}>{line.text}</p>;
      })}
    </>
  );
};

export default Lyrics;
