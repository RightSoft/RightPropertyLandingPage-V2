import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery({
    images
}: {
    images: string[]
}) {
    const horizontalPinTl = useRef<gsap.core.Timeline>(null);
    useEffect(() => {
        // Wait for DOM to be ready
        const timeoutId = setTimeout(() => {
            horizontalPin();

        }, 200); // Increased timeout for stability

        return () => {
            clearTimeout(timeoutId);
          
            // Clean up any ScrollTriggers for this component
            if(horizontalPinTl.current) {
                horizontalPinTl.current?.scrollTrigger?.kill();
                horizontalPinTl.current.kill();
            }
        };
    }, [images])
    const horizontalPin = () => {
        console.log("horizontalPin");
        const gallery = document.querySelector("#made-to-fit");
        const inner = gallery?.querySelector(".gallery__inner");
        const items = gsap.utils.toArray(inner?.querySelectorAll(".item") || []) as HTMLElement[];
        
        if (!gallery || !inner || items.length === 0) return;

        const offsetStep = 96; // pixels each one starts lower than the last

      
        // 1) set up initial vertical offsets
        items.forEach((el, i) => {
            gsap.set(el, { y: offsetStep * i });
        });

        // Calculate scroll distance more precisely
        const scrollDistance = inner.scrollWidth - window.innerWidth;
        const slideDuration = 1
        // timeline length = one chunk per slide
        const totalDuration = slideDuration * (items.length + 1)
        horizontalPinTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: inner,
                start: "center center",
                end: () => `+=${scrollDistance}`,
                scrub: 1, // Add some smoothness
                pin: '#made-to-fit',
                id: "horizontal-gallery",
                anticipatePin: 1,
                invalidateOnRefresh: true,
                refreshPriority: -1,
            },
        });
        
        // Horizontal movement with precise calculation
        horizontalPinTl.current.to(inner, {
            x: () => -(inner?.scrollWidth ?? 0) * 0.6,
            ease: "none",
            duration: totalDuration
        }, 'start+=0');
        // tl.add(anim, 0)
        // for each item, schedule its y → 0 at the right scroll-position
        items.forEach((el: HTMLElement, i: number) => {
            // we spread these out evenly over the scroll range by placing
            // each tween at a normalized time of i (with default duration = 1)
            horizontalPinTl.current?.to(el, {
                y: 0,
                ease: "power1.out",
                duration: slideDuration * i,
            }, i == 0 ? '<' : '>');
        });
    }
    useLayoutEffect(() => {
        const handleResize = () => {
            // Debounce resize to avoid excessive recalculations
            horizontalPinTl.current?.refresh();
            horizontalPinTl.current?.scrollTrigger?.refresh();
        }

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [horizontalPin])
    return <div className="gallery relative min-h-[100vh] overflow-hidden max-w-[100vw]">
        <div className="max-w-[1680px] mx-auto w-full">
            <div className="gallery__inner flex h-full gap-[3.75rem]">
                {images.map((image, index) => (
                    <img src={image} key={index} className="item w-[42.375rem] h-[42.375rem] object-cover relative" />
                ))}
            </div>
        </div>
    </div>
}