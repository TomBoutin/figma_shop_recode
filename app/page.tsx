import Image from "next/image";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
    <div className="bg-primary pt-16 ">
      <Carousel />
      
      <div className="relative">

        <Image 
        src="circular_text.svg"
        alt="circular_text"
        width={150}
        height={150}
        className="animate-spin-slow z-10 inset-0"
        />
        <Image 
              src="hand_yellow.svg"
              alt="hand_yellow"
              width={150}
              height={150}
              className="absolute inset-0"
               />
        
        <Image 
      src="hand_purple.svg"
      alt="hand_purple"
      width={150}
      height={150}
      className="absolute inset-0"
       />

        <Image
        src="spark.svg"
        alt="spark"
        width={150}
        height={150}
        className="absolute inset-0"
        />

      </div>

    </div>
    </>
  );
}
