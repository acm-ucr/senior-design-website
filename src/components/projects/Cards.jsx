"use client";
import { useSearchParams } from "next/navigation";
import projects from "@/data/projects.json";
import Project from "../Project";

const Cards = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";

  const cards = projects
    .filter(({ name }) => name.toLowerCase().includes(search))
    .slice(12 * page, 12 * page + 12);

  return (
    <div className="grid grid-cols-3 gap-6 w-10/12">
      {cards.map(({ name, members, year, id }) => (
        <Project key={id} id={id} name={name} names={members} year={year} />
      ))}
    </div>
  );
};

export default Cards;
