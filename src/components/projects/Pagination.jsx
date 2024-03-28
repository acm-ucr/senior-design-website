"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
const Pagination = (totalPages) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <Link key={i} href={createPageURL(i)}>
        <a className={currentPage === i ? "active" : ""}>{i}</a>
      </Link>
    );
  }

  return <div className="pagination">{paginationLinks}</div>;
};

export default Pagination;
