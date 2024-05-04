/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { SparklesCore } from "./ui/sparkles";

export const HeroSection: FC = () => (
  <section className="w-full bg-[#4C1C24] text-white py-12 lg:py-28 md:pt-4">
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
        <div className="w-full md:w-[40rem] h-40 relative flex justify-center">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={0.5}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-[#4C1C24] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  </section>
);
