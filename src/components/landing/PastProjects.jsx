import projects from "@/data/projects.json";
import Project from "../Project";

const PastProjects = () => {
  const cards = projects.slice(0, 6);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-11/12">
      {cards.map(({ name, members, year, id }) => (
        <Project key={id} name={name} names={members} year={year} id={id} />
      ))}
    </div>
  );
};

export default PastProjects;
