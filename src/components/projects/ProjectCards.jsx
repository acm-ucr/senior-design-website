import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/Projectcard";

const PastProjects = ({ searchBarText, selectedYear }) => {
  const selectProjects = () => {
    if (searchBarText == "" && selectedYear.length == 0) {
      return FakeData.events.slice(0, 18);
    }

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

  return (
    <div className="bg-white flex justify-center items-center text-center flex-col py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center sm:gap-6 gap-14 ">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={0} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PastProjects;
