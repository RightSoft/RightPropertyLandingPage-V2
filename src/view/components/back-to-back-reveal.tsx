import { useEffect, useRef } from "react";
import InteractiveWebsiteSection from "./sliding-sections/interactive-website";
import SwitchBetweenTemplates from "./sliding-sections/switch-between-templates";
import PowerfulCMS from "./sliding-sections/powerful-cms";
import BuiltInEmail from "./sliding-sections/built-in-email";
import SeoReady from "./sliding-sections/seo-ready";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function BackToBackReveal({
}: {
    }) {
    const $ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const items = gsap.utils.toArray(".reveal-item");
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            if ($ref.current) {
                const tl = gsap.timeline(
                    {
                        scrollTrigger: {
                            trigger: $ref.current,
                            start: "center center",
                            end: "+=1800px",
                            pin: true,
                            scrub: true,
                        }
                    }
                );
                items.forEach((item: any, index) => {
                    const itemTl = gsap.timeline();
                    const a = gsap.from(item, {
                        opacity: 0,
                        duration: 1,
                    });
                    const b = gsap.to(item, {
                        opacity: 0,
                        duration: 1,
                        delay: 1.5,
                    });
                    if (index == 0) {
                        itemTl.add(b);
                    } else if (index == items.length - 1) {
                        itemTl.add(a);
                    } else {
                        itemTl.add(a, 0);
                        itemTl.add(b, 1);
                    }
                    tl.add(itemTl);
                });
            }
        });
    }, [])
    return <div ref={$ref} className="relative h-[100vh] lg:hidden">
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