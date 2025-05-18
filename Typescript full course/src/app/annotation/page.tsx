// import React from "react";

// const page = () => {
//   let name: boolean = true;

//   return <div>{name}</div>;
// };

// export default page;

// import React from "react";

// const page = () => {
//   const name = "jai parakash";
//   const age = "eighty-nine";
//   const isStudent = true;
//   console.log(typeof name);
//   console.log(typeof age);
//   console.log(typeof isStudent);
//   return (
//     <div>
//       <div>{name}</div>
//       <div>{age}</div>
//       <div>{isStudent}</div>
//     </div>
//   );
// };

// export default page;
// import React from "react";

// const page = () => {
//   const name: string = "jai parakash";
//   const age: number = 22;
//   const isStudent: boolean = true;

//   console.log(typeof name);
//   console.log(typeof age);
//   console.log(typeof isStudent);
//   return (
//     <div>
//       <div>{name}</div>
//       <div>{age}</div>
//       <div>{isStudent}</div>
//     </div>
//   );
// };

// export default page;

// point 1 :
"use client";
import React, { useState } from "react";

const page = () => {
  const [number, setNumber] = useState("");
  let name: any = "Radha";
  name = 22;
  return <div>{name}</div>;
};

export default page;
