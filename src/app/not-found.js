import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-screen my-auto min-h-full flex flex-col items-center">
      <p className="m-0 text-5xl font-black">404 Page Not Found</p>
      <p className="p-3 text-2xl">Return to Home</p>
      <div className="flex justify-center md:justify-start mt-4">
        <Link
          href="/"
          className="bg-buttons-orange text-white font-bold rounded-md px-3 py-2 no-underline hover:opacity-75"
        >
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
