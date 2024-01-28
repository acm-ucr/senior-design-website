import img1 from "../../../public/tempimage.png";
import Image from "next/image";

const Details = () => {
  return (
    <div className="bg-white px-8 md:px-64">
      <div className="flex items-center gap-1">
        <div className="bg-senior-yellow-100 h-5 w-1" />
        <p className="font-bold text-lg pt-3">Inspiration</p>
      </div>
      <p className="pl-4 pt-4 pb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="flex items-center gap-1">
        <div className="bg-senior-yellow-100 h-5 w-1" />
        <p className="font-bold text-lg pt-3">Purpose</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pl-4 pt-4 pb-12 gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
        </p>
        <div>
          <Image src={img1.src} width={350} height={250} alt="projectimage" />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div className="bg-senior-yellow-100 h-5 w-1" />
        <p className="font-bold text-lg pt-3">Video</p>
      </div>

      <div className="pl-4 pt-4 pb-16 flex justify-center">
        <Image src={img1.src} width={450} height={350} alt="projectimage" />
      </div>
    </div>
  );
};

export default Details;
