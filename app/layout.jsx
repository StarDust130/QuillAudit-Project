import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./utils/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuillAudits Project",
  description: "QuillAudits Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
