import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Icons = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 min-h-screen">
      <FaYoutube className="text-3xl text-red-500" />
      <FaGithub className="text-3xl text-white" />
    </div>
  );
};

export default Icons;
