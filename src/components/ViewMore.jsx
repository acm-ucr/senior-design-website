import React from "react";
import Link from "next/link";

const ViewMore = () => {
  return (
    
    <div className="mx-auto w-35  text-center px-6 py-2.5 bg-yellow-400 font-bold text-xl rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:outline-none focus:shadow-outline">
      {" "}
      <Link href="/projects" className="no-underline text-white">
        view more
      </Link>
    </div>
  );
};

export default ViewMore;
