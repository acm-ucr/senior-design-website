"use client";
import Projects from "@/components/projects/Projects";

const Page = ({ searchParams }) => {
  const searchContent = searchParams?.query || "";
  const years = [];
  for (const x in searchParams) {
    if (x == "query") continue;
    years.push(x);
  }
  return <Projects searchContent={searchContent} chosenYears={years} />;
};

export default Page;
