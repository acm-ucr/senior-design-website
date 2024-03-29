/* eslint-disable new-cap */
import "./globals.css";
import { Raleway } from "next/font/google";
import Navigation from "@/components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

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
