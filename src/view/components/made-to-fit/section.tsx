import laptopImage from "@/assets/gallery/laptop_optimized.webp";
import lounge01 from "@/assets/gallery/lounge01_optimized.webp";
import lounge02 from "@/assets/gallery/lounge02_optimized.webp";
import lounge03 from "@/assets/gallery/lounge03_optimized.webp";
import lounge04 from "@/assets/gallery/lounge04_optimized.webp";
import HorizontalGallery from "./horizontal-gallery";
export default function MadeToFit() {

    const imagesSources = [
        laptopImage,
        lounge01,
        lounge02,
        lounge03,
        lounge04
    ]


    return (
        <section id="made-to-fit" className="bg-[#0F0F0F] min-h-[100vh] lg:min-h-[60vh] text-white pt-[7.5rem] px-[5rem] pb-[9rem] lg:p-4" aria-label="Right Property platform adaptability showcase">
            <div className="rp-container lg:px-0 lg:py-[5rem]" style={{ height: "auto" }}>
                <p className="mb-8 font-geist-mono text-base lg:font-sm font-medium leading-[140%] text-[#E2E2E2] tracking-[0.02em] uppercase">
                    An experience that matters
                </p>
                <h2 className="mb-[3.75rem] text-[#E2E2E2] lg:mb-6 font-general-sans text-40 lg:text-32 font-semibold leading-[140%] lg:leading-[130%] tracking-[0.01em]">
                    Made to Fit, Wherever<br />You Work
                </h2>
            </div>
            <HorizontalGallery images={imagesSources} />
        </section>

    )
}