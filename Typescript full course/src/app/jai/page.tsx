import React from "react";

const page = () => {
  let age = 20;
  console.log(typeof age);
  let newAge = String(age);
  console.log(typeof newAge);
  let a: number[] = [];
  console.log(typeof a);
  let b = Boolean(a);
  console.log(typeof b);
  console.log(b);
  //   const isStudent = true;
  //   console.log(isStudent);
  return <div>page</div>;
};

export default page;

// 1. Number
// 2. String
// 3. Boolean
