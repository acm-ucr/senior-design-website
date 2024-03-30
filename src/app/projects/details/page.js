import Details from "@/components/details/Details";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <Details />
    </Suspense>
  );
};

export default Page;
