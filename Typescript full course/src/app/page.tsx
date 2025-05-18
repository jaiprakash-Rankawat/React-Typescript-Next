import React from "react";

const page = () => {
  let name = "Radha";
  name = 22;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default page;

// 1. compile time error
// 2. there will no effect at browser
