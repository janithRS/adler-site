/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#400000] text-white">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tighter">ADLER</h1>
          <span className="sr-only">ADLER</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#400000] text-white">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <Image
                alt="Adler Chorale"
                className="max-w-[200px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] fill-current"
                height={300}
                src="/adler-logo.png"
                width={300}
              />

              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Adler is an ensemble of singers and musicians hailing from
                St.Anthony's College, Kandy.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the best choral music in Sri Lanka
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the best choral music performances by Adler
                Chorale.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-2 mt-10 flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 gap-10 sm:gap-2 sm:grid-cols-3 lg:grid-cols-3 items-center lg:gap-20 md:gap-20">
                <div className="overflow-hidden flex items-center justify-center">
                  <Image
                    alt="Themagula Logo"
                    className="fill-current opacity-100 lg:opacity-75 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
                    height={150}
                    src="/Themagula-logo.svg"
                    width={150}
                  />
                </div>
                <div className="overflow-hidden flex items-center justify-center">
                  <Image
                    alt="TKIC Logo"
                    className="fill-current opacity-100 lg:opacity-75 hover:opacity-100  hover:cursor-pointer transition-opacity duration-300"
                    height={100}
                    src="/TKIC-logo2.svg"
                    width={100}
                  />
                </div>
                <div className="overflow-hidden flex items-center justify-center">
                  <Image
                    alt="IHW Logo"
                    className="fill-current opacity-100 lg:opacity-75 hover:opacity-100  hover:cursor-pointer transition-opacity duration-300"
                    height={150}
                    src="/IHW-logo.svg"
                    width={150}
                  />
                </div>
              </div>
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
      </main>
    </div>

    // <div className="flex flex-col min-h-[100dvh]">
    //   <header className="px-4 lg:px-6 h-14 flex items-center bg-[#510400] text-white hidden">
    //     <div className="flex items-center">
    //       <MusicIcon className="h-6 w-6 text-white" />
    //       <span className="sr-only">Acme Inc</span>
    //     </div>
    //     <nav className="ml-auto flex gap-4 sm:gap-6">
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4 text-white"
    //         href="#"
    //       >
    //         Music
    //       </Link>
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4 text-white"
    //         href="#"
    //       >
    //         Blogs
    //       </Link>
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4 text-white"
    //         href="#"
    //       >
    //         Events
    //       </Link>
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4 text-white"
    //         href="#"
    //       >
    //         Contact
    //       </Link>
    //     </nav>
    //   </header>
    //   <main>
    //     <section className="flex items-center text-center justify-center py-12 md:py-24 lg:py-16">
    //       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //         <Image
    //           className="relative"
    //           src="/adler-logo.png"
    //           alt="Next.js Logo"
    //           width={380}
    //           height={37}
    //           priority
    //         />
    //       </div>
    //     </section>

    //     <section className="grid grid-cols-1 md:grid-cols-3 gap-20 py-12 md:py-24 lg:py-16">
    //       <div className="overflow-hidden rounded-lg flex items-center text-center justify-center">
    //         <Image
    //           alt="Image 1"
    //           className="aspect-square"
    //           height={200}
    //           src="/themagula-logo.svg"
    //           width={200}
    //         />
    //       </div>
    //       <div className="overflow-hidden rounded-lg flex items-center text-center justify-center">
    //         <Image
    //           alt="Image 2"
    //           className="relative"
    //           height={200}
    //           src="/tkic.png"
    //           width={200}
    //         />
    //       </div>
    //       <div className="overflow-hidden rounded-lg flex items-center text-center justify-center">
    //         <Image
    //           alt="Image 3"
    //           className="relative"
    //           height={200}
    //           src="/ihw.png"
    //           width={200}
    //         />
    //       </div>
    //     </section>
    //     <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    //       <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
    //         <div className="space-y-3">
    //           <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
    //             Latest Blogs
    //           </h2>
    //           <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Check out our latest blog posts.
    //           </p>
    //         </div>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
    //           <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
    //             <CardHeader>
    //               <CardTitle>Blog Post 1</CardTitle>
    //               <CardDescription>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 ut risus in augue luctus venenatis.
    //               </p>
    //             </CardContent>
    //             <CardFooter>
    //               <Link
    //                 className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
    //                 href="#"
    //               >
    //                 Read More
    //               </Link>
    //             </CardFooter>
    //           </Card>
    //           <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
    //             <CardHeader>
    //               <CardTitle>Blog Post 2</CardTitle>
    //               <CardDescription>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 ut risus in augue luctus venenatis.
    //               </p>
    //             </CardContent>
    //             <CardFooter>
    //               <Link
    //                 className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
    //                 href="#"
    //               >
    //                 Read More
    //               </Link>
    //             </CardFooter>
    //           </Card>
    //           <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
    //             <CardHeader>
    //               <CardTitle>Blog Post 3</CardTitle>
    //               <CardDescription>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 ut risus in augue luctus venenatis.
    //               </p>
    //             </CardContent>
    //             <CardFooter>
    //               <Link
    //                 className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
    //                 href="#"
    //               >
    //                 Read More
    //               </Link>
    //             </CardFooter>
    //           </Card>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="w-full py-12 md:py-24 lg:py-32 border-t">
    //       <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
    //         <div className="space-y-3">
    //           <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
    //             Upcoming Events
    //           </h2>
    //           <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Check out our upcoming events.
    //           </p>
    //         </div>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
    //           <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
    //             <CardHeader>
    //               <CardTitle>Event 1</CardTitle>
    //               <CardDescription>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 ut risus in augue luctus venenatis.
    //               </p>
    //             </CardContent>
    //             <CardFooter>
    //               <Link
    //                 className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
    //                 href="#"
    //               >
    //                 Learn More
    //               </Link>
    //             </CardFooter>
    //           </Card>
    //           <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
    //             <CardHeader>
    //               <CardTitle>Event 2</CardTitle>
    //               <CardDescription>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 ut risus in augue luctus venenatis.
    //               </p>
    //             </CardContent>
    //             <CardFooter>
    //               <Link
    //                 className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
    //                 href="#"
    //               >
    //                 Learn More
    //               </Link>
    //             </CardFooter>
    //           </Card>
    //           <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
    //             <CardHeader>
    //               <CardTitle>Event 3</CardTitle>
    //               <CardDescription>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 ut risus in augue luctus venenatis.
    //               </p>
    //             </CardContent>
    //             <CardFooter>
    //               <Link
    //                 className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
    //                 href="#"
    //               >
    //                 Learn More
    //               </Link>
    //             </CardFooter>
    //           </Card>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
  );
}
