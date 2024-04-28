import { FC } from "react";
import Image from "next/image";

export const Performances: FC = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Experience the best choral music in Sri Lanka
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Here are some of the best choral music performances by Adler Chorale.
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
);
