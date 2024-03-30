import projects from "@/data/projects.json";
import Project from "../Project";

const PastProjects = () => {
  const cards = projects.slice(0, 12);

  return (
    <div className="grid grid-cols-4 gap-6 w-11/12">
      {cards.map(({ name, names, description, year }, index) => (
        <Project
          key={index}
          name={name}
          names={names}
          year={year}
          description={description}
        />
      ))}
    </div>
  );
};

export default PastProjects;
