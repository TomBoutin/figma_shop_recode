import { useState, useEffect } from "react";
import Image from "next/image";

interface CardProductSmallProps {
    image: string;
    imageHover?: string;
    title: string;
    price: number;
    nouveau: boolean;
}

export default function CardProductLarge({ image, imageHover, title, price, nouveau }: CardProductSmallProps) {
    const patterns = [
        "/pattern/pattern-1.webp",
        "/pattern/pattern-2.webp",
        "/pattern/pattern-3.webp",
        "/pattern/pattern-4.webp",
        "/pattern/pattern-5.webp",
        "/pattern/pattern-6.webp",
        "/pattern/pattern-7.webp",
        "/pattern/pattern-8.webp",
        "/pattern/pattern-9.webp",
        "/pattern/pattern-10.webp",
        "/pattern/pattern-11.webp",
        "/pattern/pattern-12.webp",
        "/pattern/pattern-13.webp",
        "/pattern/pattern-14.webp",
        "/pattern/pattern-15.webp",
        "/pattern/pattern-16.webp",
        "/pattern/pattern-17.webp",
    ];

    const [selectedPattern, setSelectedPattern] = useState<string | null>(null);

    useEffect(() => {
        const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
        setSelectedPattern(randomPattern);
    }, []);

    return (
        <div className="w-fit cursor-pointer group">
            <div className="relative h-110 aspect-square rounded-5xl overflow-hidden border-2 border-transparent group-hover:border-black transition-all">
                {selectedPattern && (
                    <Image 
                        src={selectedPattern}
                        alt="pattern"
                        width={1000}
                        height={1000}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )}
                <Image
                    src={`/products/${image}`}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="relative group-hover:opacity-0 transition-all duration-300 h-full w-full object-cover"
                />
                {imageHover && (
                    <Image
                        src={`/products/${imageHover}`}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full w-full object-cover"
                    />
                )}
            </div>
            <div className="flex justify-between items-start mt-3 max-w-110">
                <div>
                    {nouveau && (
                        <p className="leading-3 md:text-2xl">New!</p>
                    )}
                    <p className="font-bold pr-2 md:text-2xl md:leading-6">{title}</p>
                </div>
                <p className="md:text-xl">€{price}</p>
            </div>
        </div>
    );
}