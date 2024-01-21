/* eslint-disable new-cap */
import "./globals.css";
import { Raleway } from "next/font/google";

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
        className={`${raleway.className} flex flex-col lg:flex-row h-full text-senior-purple-100`}
      >
        {children}
      </body>
    </html>
  );
}
