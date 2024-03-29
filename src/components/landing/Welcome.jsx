import Image from "next/image";
import Button from "../Button";
import bournsBuilding from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <>
      <div className="h-min-screen">
        <Image
          src={bournsBuilding}
          alt="bourns building"
          className="w-full bg-cover object-cover "
        />
      </div>
      <div className="w-4/5 md:w-3/5 lg:w-2/5 absolute left-[13%] top-[18%] bg-[#fff] bg-opacity-80">
        <p className="text-purple-10 font-bold lg:text-4xl lg:ml-[13%] lg:mt-[12%] md:text-2xl md:ml-9 md:mt-7 text-xl ml-8 mt-6">
          UCR Senior Designs
        </p>

        <p className="text-purple-10 lg:text-xl text-left lg:mx-[15%] lg:mt-5 md:text-lg md:ml-10 md:mr-9 md:mt-5 text-sm ml-9 mr-5 mt-3">
          Explore a myriad of hands-on learning experiences in our Senior Design
          projects developing cutting-edge solutions for real-world industry
          problems.
        </p>

        <div className="w-3/5 flex justify-center">
          <Button text="PROJECTS" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
