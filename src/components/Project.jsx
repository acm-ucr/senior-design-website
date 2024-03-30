import Link from "next/link";

const Project = ({ id, name, year, names }) => {
  return (
    <Link
      href={`/projects/details?id=${id}`}
      className="shadow rounded-lg text-center p-2 no-underline text-black"
    >
      <p className="project-name text-2xl font-bold mb-0">{name}</p>
      <p className="text-gray-400 text-xl mb-0">{year}</p>
      <p className=" text-gray-400 text-lg">{names.join(", ")}</p>
    </Link>
  );
};

export default Project;
