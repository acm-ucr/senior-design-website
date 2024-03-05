"use client";
import React, { useState } from "react";
import Filterbuttons from "../../components/projects/filterbuttons";
import Search from "@/components/projects/Search";
import ProjectCards from "@/components/projects/ProjectCards";

const Page = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const handleRemoveYear = (year) => {
    setSelectedYears(selectedYears.filter((item) => item !== year));
  };

  return (
    <>
      <div>Projects</div>
      <Search selectedYears={selectedYears} onRemoveYear={handleRemoveYear} />
      <Filterbuttons
        selectedYears={selectedYears}
        onYearSelect={setSelectedYears}
      />
      <ProjectCards />
    </>
  );
};

export default Page;
