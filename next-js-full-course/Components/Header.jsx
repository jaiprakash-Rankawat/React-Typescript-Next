// import React from "react";
// import Link from "next/link";
// const Header = () => {
//   return (
//     <div className="flex font-bold justify-around p-4 bg-gray-900 text-white text-2xl ">
//       <div>Logo</div>
//       <div className="flex gap-10">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//         <Link href="/Login">Login</Link>
//         <Link href="/Logout">Logout</Link>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";
import React from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleAboutClick = () => {
    router.push("/about");
    alert("You have clicked on about us");
  };
  return (
    <div className="flex font-bold justify-around p-4 bg-gray-900 text-white text-2xl ">
      <div>Logo</div>
      <div className="flex gap-10">
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={handleAboutClick}>About</div>
        <div onClick={() => router.push("/contact")}>Contact</div>
        <div onClick={() => router.push("/Login")}>Login</div>
        <div onClick={() => router.push("/Logout")}>Logout</div>
      </div>
    </div>
  );
};

export default Header;
