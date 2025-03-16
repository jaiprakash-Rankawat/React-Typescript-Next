import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-gray-900 text-white p-2">
      <div>Logo</div>
      <div className="flex gap-4">
        <div className="hover:text-blue-300 hover:cursor-pointer">Home</div>
        <div className="hover:text-blue-300 hover:cursor-pointer">About</div>
        <div className="hover:text-blue-300 hover:cursor-pointer">Services</div>
        <div className="hover:text-blue-300 hover:cursor-pointer">Contact</div>
        <div className="hover:text-blue-300 hover:cursor-pointer">Product</div>
      </div>
    </div>
  );
};

export default Header;
