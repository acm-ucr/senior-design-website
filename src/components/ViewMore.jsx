import React from "react";
import Link from "next/link";

const ViewMore = () => {
  return (
    <div className="px-6 py-2.5 mx-auto w-35 mb-5 text-center text-xl  font-bold bg-yellow-400 hover:bg-yellow-500 rounded shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline">
      {" "}
      <Link href="/projects" className="no-underline text-white">
        view more
      </Link>
    </div>
  );
};

export default ViewMore;
