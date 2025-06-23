import { useEffect, useRef } from "react";
import InteractiveWebsiteSection from "./sliding-sections/interactive-website";
import SwitchBetweenTemplates from "./sliding-sections/switch-between-templates";
import PowerfulCMS from "./sliding-sections/powerful-cms";
import BuiltInEmail from "./sliding-sections/built-in-email";
import SeoReady from "./sliding-sections/seo-ready";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useWindowSize } from "hamo";
import LevelUpYourMarketing from "./sliding-sections/level-up-your-marketing";
gsap.registerPlugin(ScrollTrigger);
export default function BackToBackReveal({
}: {
    }) {
    const $ref = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();
    useEffect(() => {
        if (!width || width < 768) return;
        let mm: gsap.MatchMedia | null = null;
        const handleRefresh = () => {
            mm?.revert();
        }
        const buildAnimation = () => {
            const items = gsap.utils.toArray<HTMLElement>(".reveal-item");
            mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => {
                gsap.set(items.slice(1), { opacity: 0 });
                if ($ref.current) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: $ref.current,
                            start: "center center",
                            end: "+=1800",
                            pin: true,
                            scrub: true,
                        }
                    });
                    const D = 1;                           // tween duration

                    items.forEach((item, i) => {
                        const first = i === 0;
                        const last = i === items.length - 1;

                        if (first) {
                            // 1️⃣ only fade OUT the first card
                            tl.to(item, { opacity: 0, duration: D });
                        } else {
                            // 2️⃣ fade IN current card …
                            tl.fromTo(item, { opacity: 0 }, { opacity: 1, duration: D });

                            // 3️⃣ … then fade it OUT again unless it’s the last one
                            if (!last) {
                                tl.to(item, { opacity: 0, duration: D });
                            }
                        }
                    });
                }
            });
        }
        setTimeout(() => {
            buildAnimation();
        }, 500);
        window.addEventListener("resize", handleRefresh);
        return () => {
            window.removeEventListener("resize", handleRefresh);
        };
    }, [width])
    return <section ref={$ref} className="relative h-[100vh] lg:hidden bg-[#F5F5F5]">
        <RevealItem> <LevelUpYourMarketing /></RevealItem>
        <RevealItem> <InteractiveWebsiteSection /></RevealItem>
        <RevealItem>      <SwitchBetweenTemplates /></RevealItem>
        <RevealItem>   <PowerfulCMS /></RevealItem>
        <RevealItem> <BuiltInEmail /></RevealItem>
        <RevealItem>  <SeoReady /></RevealItem>
    </section>;
}

const RevealItem = ({ children }: { children: React.ReactNode }) => {
    return <div className="reveal-item absolute top-[25%] left-0 w-full h-full">
        {children}
    </div>
}