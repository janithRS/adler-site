import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center bg-[#400000] text-white">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold tracking-tighter">A.</h1>
    </div>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4 text-white"
        href="#"
      >
        Music
      </Link>

      <Link
        className="text-sm font-medium hover:underline underline-offset-4 text-white"
        href="#"
      >
        Blogs
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4 text-white"
        href="#"
      >
        Events
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4 text-white"
        href="#"
      >
        Contact
      </Link>
    </nav>
  </header>
);
