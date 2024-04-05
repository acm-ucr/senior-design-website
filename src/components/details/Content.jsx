"use client";
import Image from "next/image";
import Title from "./Title";
import img2 from "../../../public/image1.png";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import projects from "@/data/projects.json";

const Content = ({ id }) => {
  const project = projects[id];

  if (!project) {
    throw Error("Page Not Found");
  }

  const { repo, members, year, name } = project;

  const [content, setContent] = useState(null);

  const convertMarkdownToHtml = async (content) =>
    (await remark().use(html).process(content)).toString();

  const link = `https://api.github.com/repos/${repo}/contents/README.md`;

  useEffect(() => {
    const getREADME = async () => {
      const response = await fetch(link, { method: "GET" });
      const data = await response.json();
      const markdown = await convertMarkdownToHtml(atob(data.content));

      setContent(markdown);
    };

    getREADME();
  }, [link]);

  return (
    <div className="min-w-full flex items-center justify-center flex-col flex-auto">
      <div className="relative h-96 w-full">
        <Image src={img2} layout="fill" objectFit="cover" alt="projectImage" />
      </div>
      <div className="flex flex-col items-start justify-center w-10/12">
        <Title
          year={year}
          name={name}
          members={members.join(", ")}
          repo={repo}
        />
        <article
          className="w-10/12"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Content;
