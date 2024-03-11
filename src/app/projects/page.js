"use client";
import Projects from "@/components/projects/Projects";

const Page = ({ searchParams }) => {
  const searchContent = searchParams?.query || "";
  return <Projects searchContent={searchContent} />;
};

export default Page;
