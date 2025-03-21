import React from "react";

const TextTransform = () => {
  return (
    <div>
      <div className="text-4xl text-center font-bold mt-8">
        Text Transformation{" "}
      </div>
      <div className="w-96 bg-violet-400 p-10 m-10 text-4xl font-bold ">
        Radha rani
      </div>
      <div className="w-96 bg-violet-400 uppercase p-10 m-10 text-4xl font-bold ">
        Radha rani
      </div>
      <div className="w-96 bg-violet-400 lowercase p-10 m-10 text-4xl font-bold ">
        Radha rani
      </div>
      <div className="w-96 bg-violet-400 capitalize p-10 m-10 text-4xl font-bold ">
        Radha rani
      </div>
    </div>
  );
};

export default TextTransform;
