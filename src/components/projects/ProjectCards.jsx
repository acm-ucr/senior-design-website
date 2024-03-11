import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/projectcard";

const PastProjects = ({ searchBarText, selectedYears }) => {
  // const numberOfCardsToShow = 18;

  // console.log("hello???", searchBarText);
  const selectProjects = () => {
    if (searchBarText == "" && selectedYears.length == 0) {
      return FakeData.events.slice(0, 18);
    }

    const chosen = [];
    for (let i = 0; i < FakeData.events.length; i++) {
      const currentData = FakeData.events[i];

      if (selectedYears.length != 0) {
        let matchYear = false;
        for (let j = 0; j < selectedYears.length; j++) {
          if (Number(selectedYears[j].substring(0, 4)) == currentData.year) {
            matchYear = true;
            break;
          }
        }
        if (!matchYear) continue;
      }

      if (
        searchBarText == "" ||
        searchBarText ==
          FakeData.events[i].projectName.substring(0, searchBarText.length)
      ) {
        const tmp = Object.assign({}, FakeData.events[i]);
        chosen.push(tmp);
      }
    }
    return chosen;
  };

  const visibleProjects = selectProjects();

  return (
    <div className="bg-white  flex justify-center items-center text-center flex-col py-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-14 ">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PastProjects;
