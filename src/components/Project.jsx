const Project = ({ name, year, names }) => {
  return (
    <div className="shadow rounded-lg text-center p-2">
      <p className="project-name text-2xl font-bold mb-0">{name}</p>
      <p className="text-gray-400 text-xl mb-0">{year}</p>
      <p className=" text-gray-400 text-lg">{names.join(", ")}</p>
    </div>
  );
};

export default Project;
