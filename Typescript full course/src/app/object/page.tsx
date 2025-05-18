// old way (most popular way)
// import React from "react";

// const page = () => {
//   const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//   };

//   // let number = 30;
//   // number = "jai"

//   console.log(typeof person.name);
//   console.log(typeof person.age);
//   console.log(typeof person.city);
//   return (
//     <div>
//       <div>Person's Details</div>
//       <div>{person.name}</div>
//       <div>{person.age}</div>
//       <div>{person.city}</div>
//     </div>
//   );
// };

// export default page;

// type inference

// best way

// import React from "react";

// const page = () => {
//   const person: { name: string; age: number; city: string } = {
//     name: "jai parakash",
//     age: 22,
//     city: "Lucknow",
//   };

//   return (
//     <div>
//       <div>Person's Details</div>
//       <div>{person.name}</div>
//       <div>{person.age}</div>
//       <div>{person.city}</div>
//     </div>
//   );
// };

// export default page;

// concept 1  : true and false are boolean values (they will never rendered at browser)

// Advance way (99%)

import React from "react";

const page = () => {
  type manoj = {
    name: string;
    age: number;
    city: string;
  };

  // const person: manoj = {
  //   name: "jai parakash",
  //   age: 22,
  //   city: "Lucknow",
  // };

  const student: manoj = {
    name: "jai parakash",
    age: 22,
    city: "Lucknow",
  };

  return (
    <div>
      <div>Person's Details</div>
      <div>{student.name}</div>
      <div>{student.age}</div>
      <div>{student.city}</div>
    </div>
  );
};

export default page;
