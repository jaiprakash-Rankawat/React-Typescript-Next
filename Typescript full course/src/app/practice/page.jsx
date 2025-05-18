// import React from "react";

// const page = () => {
//   //   let name = "jai parakash";
//   //   let age = 22;
//   //   console.log(name * age); // Nan = not a number
//   //   console.log(typeof (name * age));

//   const num1 = "20";
//   const num2 = "30a";
//   console.log(num1 + num2); //concatenation
//   console.log(num1 * num2); //multiplication
//   return (
//     <div>
//       <div>{num1 + num2}</div>
//       <div>{num1 * num2}</div>
//     </div>
//   );
// };

// export default page;

// point 1  :
// point 2 : if any two or more than two variable having mathematical operation then it will consider as number

// import { type } from "os";
// import { stringify } from "querystring";
// import React from "react";

// const page = () => {
//   let age = "20";
//   console.log(typeof age);
//   console.log(Number(age));
//   console.log(String(age));
//   return <div>page</div>;
// };

// export default page;

// json

// Seo

// 15 launch

// import React from "react";

// const page = () => {
//   let age: number = 20;
//   let newAge = String(age);
//   console.log(typeof age);
//   console.log(typeof newAge);
//   let name = "Radha";
//   console.log(name * newAge);
//   console.log(name * age);
//   return <div>page</div>;
// };

// export default page;

// type conversion
// 1. Number
// 2. String
// 3. Boolean
"use client";
import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState(null);
  const [isHaveValue, setIsHaveValue] = useState(false);
  let name;

  return (
    <div>
      {<div className="text-2xl">{`value is ${value}`}</div>}
      <div>
        <input
          className="border border-black p-2 bg-blue-300"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="border border-black p-2 bg-blue-900"
          onClick={() => setIsHaveValue(true)}
        >
          Submit
        </button>
      </div>
      {isHaveValue && <div className="text-2xl">{`value is ${name}`}</div>}
    </div>
  );
};

export default page;

// null
// undefined
// nan
