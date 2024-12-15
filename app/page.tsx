"use client";

import Image from "next/image";
import Carousel from "./components/carousel";
import { WhyteInkTrap } from "@/app/fonts/font";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="bg-primary pt-16 pb-10 border-b-4 border-b-black relative" id="header">
        <Carousel />

        <div className="absolute bottom-0 right-5 xl:right-16 overflow-hidden translate-y-1/2 group w-fit cursor-pointer">
          <Image
            src="/circular_text.svg"
            alt="circular_text"
            width={150}
            height={150}
            className="animate-spin-slow z-10 inset-0 w-28 lg:w-40"
          />

          <Image
            src="/hand_yellow.svg"
            alt="hand_yellow"
            width={150}
            height={150}
            className="absolute inset-0 w-28 lg:w-40 transition-transform duration-300 group-hover:-translate-x-2"
          />
          <Image
            src="/hand_purple.svg"
            alt="hand_purple"
            width={150}
            height={150}
            className="absolute inset-0 w-28 lg:w-40 opacity-0 duration-300 group-hover:opacity-100 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
          />
          <Image
            src="/spark.svg"
            alt="spark"
            width={150}
            height={150}
            className="absolute inset-0 w-28 lg:w-40 opacity-0 delay-100 duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>
      </div>

      <div className="max-w-11xl mx-auto">
        <div
          className={`${WhyteInkTrap.className} mx-3 md:mx-36 lg:mx-48 group text-2xl md:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold uppercase pt-16 lg:pt-28 pb-16`}
        >
          <motion.h2 className="leading-6 md:leading-none lg:leading-tight text-center cursor-default"
          viewport={{ once: true, amount: 0.7 }}
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          // animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0, duration: 0.2 }}>
            <span className="group-hover:opacity-60 transition-all">
              Figma's
            </span>{" "}
            <Image
              src="formes/word-symbol-burst.svg"
              alt="Burst"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">
              collection
            </span>{" "}
            <Image
              src="formes/word-symbol-hourglass.svg"
              alt="Hourglass"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">of</span>{" "}
            <span className="underline cursor-pointer">layers</span>{" "}
            <Image
              src="formes/word-symbol-zag.svg"
              alt="zag"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">and</span>{" "}
            <Image
              src="formes/word-symbol-dots.svg"
              alt="dots"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="underline cursor-pointer">components</span>{" "}
            <Image
              src="formes/word-symbol-sun.svg"
              alt="sun"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">
              for you{" "}
            </span>{" "}
            <Image
              src="formes/word-symbol-comet.svg"
              alt="comet"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">and</span>{" "}
            <Image
              src="formes/word-symbol-snake.svg"
              alt="snake"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">your</span>{" "}
            <Image
              src="formes/word-symbol-tri.svg"
              alt="tri"
              width={50}
              height={50}
              className="inline-block w-7 lg:w-10 mx-1 md:mx-2"
            />{" "}
            <span className="group-hover:opacity-60 transition-all">
              friends
            </span>
          </motion.h2>
        </div>
      </div>
    </>
  );
}
