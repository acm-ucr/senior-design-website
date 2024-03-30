"use client";
import { useSearchParams } from "next/navigation";
import projects from "@/data/projects.json";
import Project from "../Project";

const Cards = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";

  const cards = projects
    .filter(({ name }) => name.includes(search))
    .slice(12 * page, 12 * page + 12);

  return (
    <div className="grid grid-cols-4 gap-6">
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

export default Cards;
