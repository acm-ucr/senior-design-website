import React from "react";
import Link from "next/link";

const ViewMore = () => {
  return (
    <Link
      href="/projects"
      className="no-underline text-white px-6 py-2.5 text-xl font-bold bg-buttons-orange hover:opacity-75 rounded my-8"
    >
      view more
    </Link>
  );
};

export default ViewMore;
