import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

const PastProjects = ({
  searchBarText,
  selectedYear = [],
  projectsPerPage,
  currentPage,
}) => {
  const selectProjects = () => {
    const chosen = [];
    for (let i = 0; i < FakeData.events.length; i++) {
      const currentData = FakeData.events[i];

      if (selectedYear.length != 0) {
        let matchYear = false;
        for (let j = 0; j < selectedYear.length; j++) {
          if (Number(selectedYear[j].substring(0, 4)) == currentData.year) {
            matchYear = true;
            break;
          }
        }
        if (!matchYear) continue;
      }

      if (
        searchBarText == "" ||
        searchBarText.toLowerCase() ==
          FakeData.events[i].projectName
            .substring(0, searchBarText.length)
            .toLowerCase()
      ) {
        const tmp = Object.assign({}, FakeData.events[i]);
        chosen.push(tmp);
      }
    }
    return chosen;
  };

  const visibleProjects = selectProjects();

  const [startIndex, setStartIndex] = useState(
    (currentPage - 1) * projectsPerPage
  );
  const [endIndex, setEndIndex] = useState(currentPage * projectsPerPage);
  const [currentPageNum, setCurrentPage] = useState(currentPage);
  console.log(startIndex);
  console.log(endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const newStartIndex = (newPage - 1) * projectsPerPage;
    const newEndIndex = newPage * projectsPerPage;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  return (
    <div className="bg-white flex justify-center items-center text-center flex-col py-8">
      <div className="grid md:w-11/12 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 ml-10">
        {visibleProjects.slice(startIndex, endIndex).map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      <br />
      <div>
        {currentPageNum > 1 && (
          <button
            className="mt-4 px-6 py-2.5 font-bold text-white text-xl bg-yellow-400 hover:bg-yellow-500 mr-8 rounded"
            onClick={() => handlePageChange(currentPageNum - 1)}
          >
            Previous
          </button>
        )}
        {endIndex < visibleProjects.length && (
          <button
            className="px-6 py-2.5 font-bold text-white text-xl bg-yellow-400 hover:bg-yellow-500 ml-8 rounded"
            onClick={() => handlePageChange(currentPageNum + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PastProjects;
