import laptopImage from "@/assets/gallery/laptop_optimized.webp";
import lounge01 from "@/assets/gallery/lounge01_optimized.webp";
import lounge02 from "@/assets/gallery/lounge02_optimized.webp";
import lounge03 from "@/assets/gallery/lounge03_optimized.webp";
import lounge04 from "@/assets/gallery/lounge04_optimized.webp";
import chevronLeft from "@/assets/icons/chevron_left.png";
import chevronRight from "@/assets/icons/chevron_right.png";
import { useState } from "react";
import SimpleGallery from "../gallery/simple-gallery";
export default function MadeToFit() {

    const imagesSources = [
        laptopImage,
        lounge01,
        lounge02,
        lounge03,
        lounge04
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextIndex = () => {
        setActiveIndex((activeIndex + 1) % imagesSources.length);
    }

    const handlePreviousIndex = () => {
        setActiveIndex((activeIndex - 1 + imagesSources.length) % imagesSources.length);
    }
    return (
        <div className="bg-[#0F0F0F] text-white">
            <div className="rp-container py-[7.5rem] px-[11.75rem] lg:px-0 lg:py-[5rem]">
                <h3 className="mb-[2rem] lg:px-6 lg:mb-6 font-general-sans text-80 lg:text-40 font-semibold leading-[100%] tracking-[0em]">
                    Made to fit,<br />wherever you work
                </h3>
                <div className="flex justify-between lg:px-6">
                    <p className="mb-[1rem]  lg:mb-[3.5rem] w-[33.125rem] lg:w-full font-geist text-24 lg:text-18 font-normal leading-[140%] tracking-[0em]">
                        From boutique offices to full-scale lounges,Right Property works just as well in a sales suite as it does on a single laptop.
                    </p>
                    <div className="flex gap- items-center gap-[2rem] lg:gap-3">
                        <img src={chevronLeft} className="w-16 lg:w-8 h-auto object-contain cursor-pointer" alt="chevron-left" onClick={handlePreviousIndex} />
                        <img src={chevronRight} className="w-16 lg:w-8 h-auto object-contain cursor-pointer" alt="chevron-right" onClick={handleNextIndex} />
                    </div>
                </div>
                <SimpleGallery images={imagesSources} activeIndex={activeIndex} />
            </div>
        </div>
    )
}