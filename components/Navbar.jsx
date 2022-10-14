import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function Navbar() {
  const { status } = useSession();

  return (
    <div className="shadow-md sticky top-0 z-50 bg-teal-100">
      <nav className="flex justify-between py-5 max-w-7xl text-xl mx-auto">
        <div className="flex items-center text-5xl">
          <span className="text-teal-700">P & H Explore</span>
        </div>
        <ul className="flex gap-5 mt-3">
          <li>
            <Link href="/">
              <a className="hover:text-red-700"> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/regions">
              <a className="hover:text-red-700"> Region </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-red-700"> Contact </a>
            </Link>
          </li>
          <li>
            {status === "authenticated" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="hover:text-red-700"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="hover:text-red-700">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
