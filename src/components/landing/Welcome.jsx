import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";
import Link from "next/link";
const Welcome = () => {
  return (
    <>
      <Image
        src={bournsBuilding}
        alt="Winston Chung Hall Patio"
        className="bg-cover object-cover h-screen"
      />
      <div className="w-4/5 md:w-1/2 absolute left-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded">
        <p className="flex justify-center md:justify-start font-bold lg:text-4xl md:text-2xl">
          UCR Senior Designs
        </p>
        <p className="lg:text-lg text-left">
          Explore a myriad of hands-on learning experiences in our Senior Design
          projects developing cutting-edge solutions for real-world industry
          problems.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            href="/projects"
            className="bg-buttons-orange text-white font-bold rounded-md px-3 py-2 no-underline hover:opacity-75"
          >
            PROJECTS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
