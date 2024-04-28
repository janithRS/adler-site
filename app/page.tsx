import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { MusicIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#510400] text-white hidden">
        <div className="flex items-center">
          <MusicIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Acme Inc</span>
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
      <main className="flex-1">
        <section className="flex items-center text-center justify-center py-12 md:py-24 lg:py-16">
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
              className="relative"
              src="/adler-logo.png"
              alt="Next.js Logo"
              width={380}
              height={37}
              priority
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-20 py-12 md:py-24 lg:py-16">
          <div className="overflow-hidden rounded-lg flex items-center text-center justify-center">
            <Image
              alt="Image 1"
              className="aspect-square"
              height={200}
              src="/themagula-logo.svg"
              width={200}
            />
          </div>
          <div className="overflow-hidden rounded-lg flex items-center text-center justify-center">
            <Image
              alt="Image 2"
              className="aspect-square"
              height={200}
              src="/tkic-logo.svg"
              width={200}
            />
          </div>
          <div className="overflow-hidden rounded-lg flex items-center text-center justify-center">
            <Image
              alt="Image 3"
              className="aspect-square"
              height={200}
              src="/ihw-logo.svg"
              width={200}
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Latest Blogs
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our latest blog posts.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
                <CardHeader>
                  <CardTitle>Blog Post 1</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut risus in augue luctus venenatis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
                    href="#"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
                <CardHeader>
                  <CardTitle>Blog Post 2</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut risus in augue luctus venenatis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
                    href="#"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
                <CardHeader>
                  <CardTitle>Blog Post 3</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut risus in augue luctus venenatis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
                    href="#"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our upcoming events.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
                <CardHeader>
                  <CardTitle>Event 1</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut risus in augue luctus venenatis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
                <CardHeader>
                  <CardTitle>Event 2</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut risus in augue luctus venenatis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
                <CardHeader>
                  <CardTitle>Event 3</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut risus in augue luctus venenatis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
