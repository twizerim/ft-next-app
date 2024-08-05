import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/shared/layout/navigation";
import Signup from "@/component/signup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between ${inter.className}`}
    >
      <Navbar />
      <nav className="flex bg-red-700 w-[100%] flex-row items-center justify-between p-[20px]">
        <div>
          <h1 className="text-white text-xl">Design</h1>
        </div>
        <ul className="flex justify-center items-center gap-[20px]">
          <li>
            <a href="#" className="text-white">
              Sign up
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Calculator
            </a>
          </li>
        </ul>
      </nav>
      <Signup />
    </main>
  );
}
