/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";

export const HeroSection: FC = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#400000] text-white mt-12 lg:mt-4 md:mt-4">
    <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <Image
          alt="Adler Chorale"
          className="max-w-[200px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] fill-current"
          height={300}
          src="/adler-logo.png"
          width={300}
        />

        <p className="mx-auto max-w-[600px] text-gray-200 text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Adler is an ensemble of singers and musicians hailing from
          St.Anthony's College, Kandy.
        </p>
      </div>
    </div>
  </section>
);
