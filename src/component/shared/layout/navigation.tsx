import Link from "next/link";

export default function Navbar() {
  return (
    <main className="w-full">
      <div className="flex justify-between px-[20px] py-[20px]">
        <div>
          <h1 className="text-red-400 text-xl"> News Letter</h1>
        </div>
        <form action="">
          <label htmlFor="">
            <input
              type="text"
              placeholder="Search"
              className="shadow-md rounded-lg px-4 py-2"
            />
          </label>
        </form>
        <div>
          <h1>Notification</h1>
        </div>
      </div>

      <nav className="flex bg-red-400 w-[100%] flex-row items-center justify-between p-[20px]">
        <ul className="flex justify-center items-center gap-[20px]">
          <li>
            <Link href="/registration" legacyBehavior>
              <a className="text-center text-white">Sign up</a>
            </Link>
          </li>
          <li>
            <a href="#" className="text-white">
              {" "}
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
    </main>
  );
}
