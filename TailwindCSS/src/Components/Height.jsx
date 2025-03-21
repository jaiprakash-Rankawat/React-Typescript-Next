import React from "react";

const Height = () => {
  return (
    <div className="bg-gray-900">
      <div className="text-4xl text-center font-bold mt-8 text-white mb-10">
        Learning Height
      </div>
      <div className="flex gap-8 items-end  ">
        <div className="bg-violet-400 h-16">height-16</div>
        <div className="bg-violet-400 h-32">height-32</div>
        <div className="bg-violet-400 h-64">height-64</div>
        <div className="bg-violet-400 h-128">height-128</div>
      </div>
    </div>
  );
};

export default Height;
