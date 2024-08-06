import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex bg-red-700 w-[100%] flex-row items-center justify-between p-[20px]">
      <div>
        <h1 className="text-white text-xl">Design</h1>
      </div>
      <ul className="flex justify-center items-center gap-[20px]">
        <li>
          <Link href="/404" legacyBehavior>
            <a className="text-center text-white">Sign up</a>
          </Link>
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
  );
}
