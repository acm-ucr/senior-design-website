"use client";
import React, { useState } from "react";
import Filterbuttons from "../../components/projects/filterbuttons";
import Search from "@/components/projects/Search";
import ProjectCards from "@/components/projects/ProjectCards";
import ProjectThumbnails from "@/components/projects/ProjectThumbnail.jsx";

const Projects = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const handleRemoveYear = (year) => {
    setSelectedYears(selectedYears.filter((item) => item !== year));
  };

  return (
    <>
      <ProjectThumbnails />
      <Search selectedYears={selectedYears} onRemoveYear={handleRemoveYear} />
      <Filterbuttons
        selectedYears={selectedYears}
        onYearSelect={setSelectedYears}
      />
      <ProjectCards />
    </>
  );
};

export default Projects;
