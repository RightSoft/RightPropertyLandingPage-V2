import { useEffect, useRef } from "react";
import SectionTitle from "../section-title";
import MultiPlatform from "./multi-platform";
import WallPlatform from "./wall-platform";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function PlatformsSection() {
    const container = useRef(null);
    const wallContainer = useRef(null);
    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wallContainer.current,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom center+=300",
                },
            });
            tl.fromTo(wallContainer.current, { scale: 0.5 }, {
                scale: 1
            });
        });


    }, { scope: container });
    return <div className="section" ref={container}>
        <div ref={wallContainer}>
            <WallPlatform />
        </div>
        <SectionTitle className="mobile:leading-[2rem] mobile:h-[6.25rem] mobile:flex mobile:items-center mobile:justify-center mobile:mb-0 text-center" text={<div>
            All devices<br />in one platform
        </div>} />
        <div className="pt-[8.75rem] mobile:pt-[2.28125rem]">
            <MultiPlatform />
        </div>
    </div>
}