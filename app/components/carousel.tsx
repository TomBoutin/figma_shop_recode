"use client";

import { useRef, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="absolute left-0 top-0 bottom-0 z-10 pl-5 pr-20 rounded-full group">
      <svg className="svg-arrow opacity-0 group-hover:opacity-100 transition-all" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.416 11.136V8.064H5.792L8.48 5.408L11.776 2.144L9.6 0L0 9.6L9.6 19.2L11.776 17.056L8.48 13.792C7.552 12.896 6.688 12.032 5.792 11.136H24.416Z" fill="black"></path>
      </svg>
    </button>
  );
};

const CustomRightArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="absolute right-0 top-0 bottom-0 z-10 pr-5 pl-20 rounded-full group">
      <svg className="svg-arrow opacity-0 group-hover:opacity-100 transition-all" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.583984 8.064V11.136H19.208C18.28 12.032 17.416 12.928 16.52 13.824L13.224 17.056L15.4 19.2L25 9.6L15.4 0L13.224 2.144L16.52 5.408C17.416 6.304 18.28 7.168 19.208 8.064H0.583984Z" fill="black"></path>
      </svg>
    </button>
  );
};

export default function Home() {
  const images = [
    { src: "/image_illu_carousel_1.webp", name: "Butterfly Tote" },
    { src: "/image_illu_carousel_2.webp", name: "Chunky Glyph Cap" },
    { src: "/image_illu_carousel_3.webp", name: "Tidy Up Crewneck" },
    { src: "/image_illu_carousel_4.webp", name: "All Smiles Nalgene" },
    { src: "/image_illu_carousel_5.webp", name: "Inkblot Tee" },
    { src: "/image_illu_carousel_6.webp", name: "Tidy Up Crewneck" },
    { src: "/image_illu_carousel_7.webp", name: "Local Styles Crewneck" },
    { src: "/image_illu_carousel_8.webp", name: "Chunky Glyph Longsleeve" },
    { src: "/image_illu_carousel_9.webp", name: "Figma Doodle Socks" },
    { src: "/image_illu_carousel_10.webp", name: "Chunky Glyph Tee" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 630 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 1
    }
  };

  return (
    <main className="py-2 relative">
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
        customRightArrow={<CustomRightArrow onClick={() => {}} />}
      >
        {images.map((image, index) => (
          <div key={index} className="relative p-2 w-full select-none pointer-events-none group">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 650 650" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='black' strokeWidth='8'>
              <defs>
                <pattern id={`pattern-${index}`} patternUnits="objectBoundingBox" width="1" height="1">
                  <image href={image.src} x="0" y="0" width="100%" height="100%" className="pattern-image" preserveAspectRatio="xMidYMid slice"></image>
                </pattern>
              </defs>
              {index === 0 && (
                <path fillRule="evenodd" clipRule="evenodd" d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z" fill={`url(#pattern-${index})`}></path>
              )}
              {index === 1 && (
                <path d="M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z" fill={`url(#pattern-${index})`}></path>
              )}
              {index === 2 && (
                <rect x="2" y="2" width="646" height="646" rx="103" fill={`url(#pattern-${index})`}></rect>
              )}
              {index === 3 && (
                <path d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z" fill={`url(#pattern-${index})`}></path>
              )}
              {index === 4 && (
                <path d="M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z" fill={`url(#pattern-${index})`}></path>
              )}
              {index === 5 && (
                <rect x="2" y="2" width="646" height="646" rx="103" fill={`url(#pattern-${index})`}></rect>
              )}
              {index === 6 && (
                <path d="M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z" fill={`url(#pattern-${index})`}></path>
              )}
              {index === 7 && (
                <path d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z" fill={`url(#pattern-${index})`}></path>
              )}
              {index === 8 && (
                <rect x="2" y="2" width="646" height="646" rx="103" fill={`url(#pattern-${index})`}></rect>
              )}
              {index === 9 && (
                <path d="M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z" fill={`url(#pattern-${index})`}></path>
              )}
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all opacity-0 group-hover:opacity-100 button-carousel">
              <button className="bg-white py-2 px-8 font-bold rounded-full shrink-0 whitespace-nowrap lg:text-lg">{image.name}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </main>
  );
}