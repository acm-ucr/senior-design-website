const Project = ({ name, year, names, description }) => {
  return (
    <div className="shadow rounded-lg text-center p-2">
      <p className="project-name text-2xl font-bold">{name}</p>
      <p className="text-gray-400 text-xl">{year}</p>
      <div className="collaborators text-lg text-gray-400">
        <p className="collaborators-text text-lg">{names.join(", ")}</p>
      </div>
      <div className="max-w-xs mx-auto">
        <p className="project-description text-base display: inline ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
