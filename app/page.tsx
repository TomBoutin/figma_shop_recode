import Image from "next/image";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
    <div className="bg-primary pt-16 ">
      <Carousel />
    </div>
    </>
  );
}
