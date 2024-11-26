"use client"

import { useRef } from "react";
import { motion, useAnimate } from "motion/react";
import Image from "next/image";

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
]

export default function Carousel () {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scope, animate] = useAnimate()
  
    return (
      <div className="overflow-hidden relative" ref={carouselRef}>
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={carouselRef}
          
        >
          {images.map((src, index) => (
            <motion.div key={index} className="min-w-[50%]">
              <Image src={src} alt={`Image ${index + 1}`} width={500} height={500} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };
  