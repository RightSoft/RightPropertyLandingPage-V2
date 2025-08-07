import { useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery({
    images
}: {
    images: string[]
}) {

    useEffect(() => {
        let tl: gsap.core.Timeline;
        
        // Wait for DOM to be ready
        const timeoutId = setTimeout(() => {
            const gallery = document.querySelector("#made-to-fit");
            const inner = gallery?.querySelector(".gallery__inner");
            const items = gsap.utils.toArray(inner?.querySelectorAll(".item") || []) as HTMLElement[];
            
            if (!gallery || !inner || items.length === 0) return;

            const offsetStep = 96; // pixels each one starts lower than the last

            // Clear any existing ScrollTriggers for this element
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === gallery) {
                    trigger.kill();
                }
            });

            // 1) set up initial vertical offsets
            items.forEach((el, i) => {
                gsap.set(el, { y: offsetStep * i });
            });

            // Calculate scroll distance more precisely
            const scrollDistance = inner.scrollWidth - window.innerWidth;
            const slideDuration = 1
            // timeline length = one chunk per slide
            const totalDuration = slideDuration * (items.length + 1)
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: gallery,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                    scrub: 1, // Add some smoothness
                    pin: true,
                    id: "horizontal-gallery",
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    refreshPriority: -1,
                },
            });
            
            // Horizontal movement with precise calculation
            tl.to(inner, {
                x: () => -(inner?.scrollWidth ?? 0) * 0.6,
                ease: "none",
                duration: totalDuration
            }, 'start+=0');
            // tl.add(anim, 0)
            // for each item, schedule its y → 0 at the right scroll-position
            items.forEach((el: HTMLElement, i: number) => {
                // we spread these out evenly over the scroll range by placing
                // each tween at a normalized time of i (with default duration = 1)
                tl.to(el, {
                    y: 0,
                    ease: "power1.out",
                    duration: slideDuration * i,
                }, i == 0 ? '<' : '>');
            });

        }, 200); // Increased timeout for stability

        return () => {
            clearTimeout(timeoutId);
            if (tl) {
                tl.kill();
            }
            // Clean up any ScrollTriggers for this component
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.id === "horizontal-gallery") {
                    trigger.kill();
                }
            });
        };
    }, [images])
    return <div className="gallery relative h-[100vh] overflow-hidden">
        <div className="max-w-[1680px] mx-auto w-full">
            <div className="gallery__inner flex h-full gap-[3.75rem]">
                {images.map((image, index) => (
                    <img src={image} key={index} className="item w-[42.375rem] h-[42.375rem] object-cover relative" />
                ))}
            </div>
        </div>
    </div>
}