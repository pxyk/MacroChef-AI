import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-700 gap-2">
      <h1 className="sm:text-3xl text-xl font-bold tracking-tight cursor-pointer">
        MacroChef
        <span className="bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text rounded-md px-4 py-1">
          AI
        </span>
      </h1>
      <div className="flex space-x-4">
        <a
          href="https://github.com/pxyk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-gradient-to-r"
        >
          <AiOutlineGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/mertaytemiz/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-gradient-to-r"
        >
          <AiFillLinkedin size={30} />
        </a>
      </div>
    </header>
  );
}
