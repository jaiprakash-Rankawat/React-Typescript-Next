import React from "react";

const DateINReact = () => {
  const date = new Date();
  return (
    <div>
      <p>Today is {date.toDateString()}</p>
    </div>
  );
};

export default DateINReact;
