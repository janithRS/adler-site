/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { SparklesCore } from "./ui/sparkles";

export const HeroSection: FC = () => (
  <section className="w-full bg-[#25000d] text-white py-12 lg:py-28 md:pt-4">
    <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <Image
          alt="Adler Chorale"
          className="max-w-[200px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] fill-current"
          height={400}
          src="/adler-logo.png"
          width={400}
        />
        <TextGenerateEffect
          className="mx-auto max-w-[600px] text-white px-8"
          words={`Adler is an ensemble of singers and musicians hailing from St.Anthony's College, Kandy.`}
        />
      </div>
    </div>
  </section>
);
