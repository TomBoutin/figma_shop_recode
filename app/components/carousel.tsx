"use client";

import Card from "@/app/components/CardCarousel";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Image from "next/image";

export default function Home() {
  const images = [
    "/Chill-guy.webp",
    "/image_illu_carousel_1.webp",
    "/image_illu_carousel_2.webp",
    "/image_illu_carousel_3.webp",
    "/image_illu_carousel_4.webp",
    "/image_illu_carousel_5.webp",
    "/image_illu_carousel_6.webp",
    "/image_illu_carousel_7.webp",
    "/image_illu_carousel_8.webp",
    "/image_illu_carousel_9.webp",
    "/image_illu_carousel_10.webp",
  ];
  
  return (
    <main className="py-8">
      <motion.div className="carousel cursor-grab overflow-hidden">
        <motion.div drag="x" className="inner-carousel flex">
          {images.map(image => {
            return(
              <motion.div className="item min-h-96 min-w-64 p-1">
                <Image 
                src={image} 
                alt={image}
                width={300}
                height={300}
                className="rounded-lg w-full h-full object-cover"
                />
              </motion.div>
            ) 
          })}
        </motion.div>
      </motion.div>
    </main>
  );
}