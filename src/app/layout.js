/* eslint-disable new-cap */
import "./globals.css";
import { Raleway } from "next/font/google";
import Navigation from "@/components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

/* eslint-disable-next-line no-unused-vars */
const Footer = () => {
  return (
    <div className="text-center bg-[#eaf5f8] m-5">
      <p className="mt-4 text-yellow-400 font-bold text-2xl inline-block">
        {" "}
        UCR
      </p>
      <p className="inline-block ml-2 font-bold text-2xl">Senior Designs</p>
      <p className="text-xs mb-12">
        Copyright © ACM UCR - All Rights Reserved.
      </p>
    </div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${raleway.className} flex flex-col min-h-screen text-senior-purple-100`}
      >
        <div className="flex-grow">
          <Navigation />
          <div className="w-full mt-14 md:mt-16">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
