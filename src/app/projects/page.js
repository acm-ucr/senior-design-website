"use client";
import Projects from "@/components/projects/Projects";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  let searchContent = "";
  const years = [];
  for (const entry of searchParams.entries()) {
    console.log(entry, searchParams.get(entry));
    if (entry[0] == "query") {
      searchContent = entry[1];
    } else {
      years.push(entry[0]);
    }
  }
  return <Projects searchContent={searchContent} chosenYears={years} />;
};

export default Page;
