import React from "react";

const GradientColor = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-red-500 to-blue-500 h-screen"></div>
      <div className="bg-gradient-to-l from-blue-500 to-violet-500 h-screen"></div>
      <div className="bg-gradient-to-l from-orange-500 to-red-500 h-screen"></div>
      <div className="bg-gradient-to-l from-yellow-500 to-orange-500 h-screen"></div>
    </div>
  );
};

export default GradientColor;
