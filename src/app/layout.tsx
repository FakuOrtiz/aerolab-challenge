import "@sass/globals.scss";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import CustomToaster from "@/components/CustomToast/CustomToaster";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaming Haven Z (Aerolab challenge)",
  description:
    "This is an app that gets information about videogames a allows you to save your favorites. Created by Facundo Ortiz",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomToaster />
        <Background />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
