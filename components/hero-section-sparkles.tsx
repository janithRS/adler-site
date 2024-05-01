/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";

export const HeroSectionSparkles: FC = () => {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <Image
          alt="Adler Chorale"
          className="max-w-[200px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] fill-current"
          height={400}
          src="/adler-logo.png"
          width={400}
        />
      </div>
    </div>
  );
};
