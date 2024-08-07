import { Inter } from "next/font/google";
import Navbar from "@/component/shared/layout/navigation";
import Signup from "@/component/signup";

const inter = Inter({ subsets: ["latin"] });

export default function Registration() {
  return (
    <>
      <main
        className={`flex  flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar />
      </main>
      <Signup />
    </>
  );
}
