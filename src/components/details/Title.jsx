import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Title = ({ repo, year, name, members }) => {
  return (
    <div className="mt-5 px-15">
      <p className="text-yellow-500 font-bold text-xl mb-1">{year}</p>
      <p className="text-senior-purple-100 font-bold text-3xl mb-1">{name}</p>
      <p className="text-senior-gray-100 text-normal mb-1">by {members}</p>
      <Link
        href={"https://github.com/" + repo}
        className="flex md:border-2 rounded pr-2 py-1 w-fit no-underline text-black"
      >
        <FaGithub className="mx-2 my-auto" />
        <p className="p-0 m-0 mr-2 my-auto">Github</p>
      </Link>
    </div>
  );
};

export default Title;
