import React from "react";
import Login from "./Login";
import Logout from "./Logout";

const Conditional = ({ value }) => {
  return <div>{value ? <Login /> : <Logout />}</div>;
};

export default Conditional;
