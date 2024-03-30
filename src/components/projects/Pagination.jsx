"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import projects from "@/data/projects.json";

const Pagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const index = parseInt(searchParams.get("page") ?? 0);
  const total = Math.floor(projects.length / 12);

  return (
    <div className="flex gap-3 my-4">
      <button
        className="bg-senior-yellow-100 px-3 py-2 rounded text-white font-semibold text-lg disabled:opacity-75"
        disabled={index <= 0}
        onClick={() =>
          router.push(pathname + "?" + createQueryString("page", index - 1))
        }
      >
        Previous
      </button>
      <button
        className="bg-senior-yellow-100 px-3 py-2 rounded text-white font-semibold text-lg disabled:opacity-75"
        disabled={index >= total}
        onClick={() =>
          router.push(pathname + "?" + createQueryString("page", index + 1))
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
