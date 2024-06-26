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
        className={`${raleway.className} min-h-screen flex flex-col flex-auto justify-between`}
      >
        <Navigation />
        <div className="w-full mt-14 md:mt-16 h-full flex flex-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
