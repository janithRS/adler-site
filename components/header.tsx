import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => (
  //   <header className="px-4 lg:px-6 flex items-center bg-[#400000] text-white justify-center ">
  <div className="fixed inset-x-0 h-20 top-0 px-4 lg:px-6 items-center bg-[#400000] text-white justify-center flex  backdrop-blur border-white">
    <nav className="flex gap-6 lg:gap-20 md:gap-8 py-3 px-6 text-white uppercase min-w-max">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#performances"
      >
        Performances
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#upcoming-events"
      >
        Events
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#blogs"
      >
        Blogs
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#footer"
      >
        Contact
      </Link>
    </nav>
  </div>
  //   </header>
);
