import React from "react";

const Temp = ({ temperature }) => {
  if (temperature > 30) {
    return <div>It is too hot</div>;
  } else if (temperature > 10 && temperature < 30) {
    return <div>It is too Normal</div>;
  } else {
    return <div>It is too cold</div>;
  }
};

export default Temp;
