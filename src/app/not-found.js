import Link from "next/link";
const NotFound = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen -mb-40 -mt-10">
      <h1 class="text-7xl font-bold text-error-teal">404</h1>
      <h2 class="text-2xl font-bold">Page not found</h2>

      <Link
        className="bg-buttons-orange rounded-lg flex relative no-underline"
        href="/"
      >
        <p className="text-0.5xl text-white px-2.5 pt-1.5 pb-2 -mb-0.5 font-semibold">
          {" "}
          BACK TO HOME{" "}
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
