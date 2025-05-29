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
        if (!width || width < 1024) return;
        let timeline: gsap.core.Timeline | null = null;
        let mm: gsap.MatchMedia | null = null;
        const handleRefresh = () => {
            // timeline?.;
            // timeline?.revert();
            // timeline?.scrollTrigger?.refresh();
            mm?.revert();
            timeline?.scrollTrigger?.refresh();


        }
        const buildAnimation = () => {
            const items = gsap.utils.toArray(".reveal-item");
            mm = gsap.matchMedia();
            mm.add("(min-width: 1024px)", () => {
                if ($ref.current) {
                    timeline = gsap.timeline(
                        {
                            scrollTrigger: {
                                trigger: $ref.current,
                                start: "center center",
                                end: "+=1800px",
                                pin: $ref.current,
                                scrub: true,
                            }
                        }
                    );
                    items.forEach((item: any, index) => {
                        const itemTl = gsap.timeline();
                        const duration = 1;
                        const fadeIn = gsap.fromTo(item, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            duration,
                        });
                        const fadeOut = gsap.fromTo(item, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            duration,
                        });
                        if (index == 0) {
                            itemTl.add(fadeOut);
                        } else if (index == items.length - 1) {
                            itemTl.add(fadeIn);
                        } else {
                            itemTl.add(fadeIn, 0);
                            itemTl.add(fadeOut, 1);
                        }
                        timeline?.add(itemTl);
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
    return <div ref={$ref} className="relative h-[100vh] lg:hidden bg-[#F5F5F5]">
        <RevealItem> <LevelUpYourMarketing /></RevealItem>
        <RevealItem> <InteractiveWebsiteSection /></RevealItem>
        <RevealItem>      <SwitchBetweenTemplates /></RevealItem>
        <RevealItem>   <PowerfulCMS /></RevealItem>
        <RevealItem> <BuiltInEmail /></RevealItem>
        <RevealItem>  <SeoReady /></RevealItem>
    </div>;
}

const RevealItem = ({ children }: { children: React.ReactNode }) => {
    return <div className="reveal-item absolute top-[25%] left-0 w-full h-full">
        {children}
    </div>
}