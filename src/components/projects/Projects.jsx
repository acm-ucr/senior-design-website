"use client";
import React, { useState } from "react";
import Filterbuttons from "../../components/projects/filterbuttons";
import Search from "@/components/projects/Search";
import ProjectCards from "@/components/projects/ProjectCards";
import ProjectThumnail from "@/components/projects/ProjectThumbnail";

const Projects = ({ searchContent, chosenYears }) => {
  const [selectedYears, setSelectedYears] = useState(chosenYears);
  const handleRemoveYear = (year) => {
    setSelectedYears(selectedYears.filter((item) => item !== year));
  };

  const [searchBarText, setSearchBarText] = useState(searchContent);

  console.log(searchBarText);

  return (
    <>
      <ProjectThumnail />
      <Search
        selectedYears={selectedYears}
        onRemoveYear={handleRemoveYear}
        setSearchBarText={setSearchBarText}
      />
      <Filterbuttons
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
      />

      <ProjectCards
        searchBarText={searchBarText}
        selectedYears={selectedYears}
      />
    </>
  );
};

export default Projects;
