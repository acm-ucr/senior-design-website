import React from "react";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <div className="w-fit mb-5">
      <Link
        href="/projects"
        className="trsnasition ease-in-out bg-yellow-400 hover:opacity-80 hover:scale-105 duration-300 text-white font-bold py-2 px-7 text-lg md:text-2xl no-underline rounded-md"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
