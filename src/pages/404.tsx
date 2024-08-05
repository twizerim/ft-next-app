import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/shared/layout/navigation";
import Signup from "@/component/signup";

const inter = Inter({ subsets: ["latin"] });

export default function Notfound() {
  return (
    <>
      <main
        className={`flex  flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar />
      </main>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-red-500 w-[30%] h-[300px] flex justify-center items-center">
          <h1 className="text-[100px] text-bold">404</h1>
        </div>
      </div>
    </>
  );
}
