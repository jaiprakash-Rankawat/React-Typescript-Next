// import React from 'react'

// const page = () => {
//   const add = (a: string, b: number) => {
//     return a + b;
//   }
//   console.log(add("10", 20));
//   return (
//     <div>page</div>
//   )
// }

// export default page

// import React from "react";

// const page = () => {
//   const greet = (a: string = "jai") => {
//     console.log("Hello", a);
//     console.log(`Hello ${a}`);
//   };
//   greet();
//   greet("Radha");
//   return <div>page</div>;
// };

// export default page;

import React from "react";

const page = () => {
  function Add(a: number, b: number): number {
    // return 18 + "jai"
    // return a+b;
    console.log(a, b);
    return a + b;
  }
  console.log(Add(10, 20));
  return <div>page</div>;
};

export default page;
