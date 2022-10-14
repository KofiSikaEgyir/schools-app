import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="p-4 mt-10 bg-teal-200  shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-gray-800 sm:text-center">
          <a>Ruphil@All rights reserved</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 sm:mt-0">
          <li>
            <Link href="/about">
              <a href="#" className="mr-4 hover:text-red-700 md:mr-6 ">
                About
              </a>
            </Link>
          </li>
          <li>
            <a href="#" className="mr-4 hover:text-red-700 md:mr-6"></a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:text-red-700  md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <Link href="/contact">
              <a href="#" className="hover:text-red-700">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
