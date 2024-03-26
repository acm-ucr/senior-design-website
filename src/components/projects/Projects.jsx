"use client";
import React, { useEffect, useState } from "react";
import Filterbuttons from "../../components/projects/filterbuttons";
import Search from "@/components/projects/Search";
import ProjectCards from "@/components/projects/ProjectCards";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import Pagination from "@/components/projects/Pagination";

const Projects = ({ searchContent, chosenYears }) => {
  const [selectedYears, setSelectedYears] = useState(chosenYears);
  const handleRemoveYear = (year) => {
    setSelectedYears(selectedYears.filter((item) => item !== year));
  };

  const [searchBarText, setSearchBarText] = useState(searchContent);

  console.log(searchBarText);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 15;

  const fetchTotalPages = async (content) => {
    return Math.ceil(content / itemsPerPage);
  };

  useEffect(() => {
    const getTotalPages = async () => {
      const totalPages = await fetchTotalPages(searchContent);
      setTotalPages(totalPages);
    };
    getTotalPages();
  }, [searchContent]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProjectThumbnail />
      <Search
        selectedYears={selectedYears}
        onRemoveYear={handleRemoveYear}
        setSearchBarText={setSearchBarText}
      />
      <Filterbuttons
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <ProjectCards
        searchBarText={searchBarText}
        selectedYears={selectedYears}
        projectsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Projects;
