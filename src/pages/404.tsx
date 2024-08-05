import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/shared/layout/navigation";
import Signup from "@/component/signup";
import { WarningOutlined } from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Notfound() {
  return (
    <>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar />
      </main>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-red-400 w-[30%] h-[300px] flex flex justify-center items-center gap-[20px]">
          <h1 className="text-[100px] font-bold">404</h1>
          <WarningOutlined style={{ fontSize: "100px", color: "white" }} />
        </div>
      </div>
    </>
  );
}
