import React from "react";

const Shadow = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold mt-8">Shadow</div>
      <div className="w-96 m-10 p-5 shadow-md">medium</div>
      <div className="w-96 m-10 p-5 shadow-lg">large</div>
      <div className="w-96 m-10 p-5 shadow-xl">extra large</div>
      <div className="w-96 m-10 p-5 shadow-md shadow-red-400">COLOR SHADOW</div>
    </div>
  );
};

export default Shadow;
