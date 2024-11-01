import "@sass/globals.scss";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import CustomToaster from "@/components/CustomToast/CustomToaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aerolab Challenge by Facundo Ortiz",
  description: "Aerolab Challenge by Facundo Ortiz",
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
