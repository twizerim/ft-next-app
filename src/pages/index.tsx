import Link from "next/link";
import Notfound from "@/pages/404";

export default function Home() {
  return (
    <main className={`flex items-center justify-center h-[100vh]`}>
      <div className="flex justify-center bg-red-500 w-[200px] p-[10px] rounded-[20px]">
        <Link href="/404" legacyBehavior>
          <a className="text-center text-white">Get started</a>
        </Link>
      </div>
    </main>
  );
}
