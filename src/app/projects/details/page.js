"use client";
import Details from "@/components/details/Details";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      <Details id={id} />
    </div>
  );
};

export default Page;
