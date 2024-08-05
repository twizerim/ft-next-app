import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/shared/layout/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between ${inter.className}`}
    >
    
      <Navbar/>
     
      
    </main>
  );
}
