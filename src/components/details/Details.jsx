"use client";
import Content from "@/components/details/Content";
import { useSearchParams } from "next/navigation";

const Details = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <Content id={id} />;
};

export default Details;
