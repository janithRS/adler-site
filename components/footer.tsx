import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => (
  <footer id="footer" className="w-full bg-white py-8 dark:bg-gray-800">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
      <div className="flex items-center gap-4">
        <Link
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <FacebookIcon className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <YoutubeIcon className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <InstagramIcon className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Created with
        <span className="text-red-500 mx-1">❤</span>
        by Adler Engineering{"\n            "}
      </p>
    </div>
  </footer>
);
