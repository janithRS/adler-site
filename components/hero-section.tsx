/* eslint-disable react/no-unescaped-entities */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

export const HeroSection: FC = () => (
  <section className="w-full bg-[#25000d] text-white py-12 lg:py-28 md:pt-4">
    <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <Image
            alt="Adler Chorale"
            className="max-w-[200px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] fill-current"
            height={400}
            src="/adler-logo.png"
            width={400}
          />
          <p className="mx-auto max-w-[600px] text-white px-8 text-lg">
            Adler is an ensemble of singers and musicians hailing from
            St.Anthony's College, Kandy.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
