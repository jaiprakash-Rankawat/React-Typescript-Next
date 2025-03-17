import React, { useState } from "react";

const Background = () => {
  const [bg, setBg] = useState("#fff");
  const handleClick = () => {
    setBg(
      `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`
    );
  };
  //   bactics in javascript
  return (
    <div
      className="text-white p-4 min-h-screen w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <button
        className="bg-yellow-500 p-2 rounded hover:bg-yellow-600 hover: cursor-pointer    "
        onClick={handleClick}
      >
        Change Background
      </button>
    </div>
  );
};

export default Background;
