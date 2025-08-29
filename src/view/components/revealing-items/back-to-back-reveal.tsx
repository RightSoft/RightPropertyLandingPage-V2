import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { flippingCardContents } from "./flipping-card-contents";
import FlippingCardContent from "./flipping-card-content";
import RevealItemsIndicator from "./reveal-items-indicator";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import revealItem1Overlay from "@/assets/v3/reveal_item_1_overlay.png"
import revealItem2Overlay from "@/assets/v3/reveal_item_2_overlay.png"
import revealItem3Overlay from "@/assets/v3/reveal_item_3_overlay.png"
import revealItem4Overlay from "@/assets/v3/reveal_item_4_overlay.png"
import revealItem5Overlay from "@/assets/v3/reveal_item_5_overlay.png"
import revealItem6Overlay from "@/assets/v3/reveal_item_6_overlay.png"
import revealItem1Road from "@/assets/v3/reveal_item_1_road.png"
import revealItem2Road from "@/assets/v3/reveal_item_2_road.png"
import revealItem3Road from "@/assets/v3/reveal_item_3_road.png"
import revealItem5Road from "@/assets/v3/reveal_item_5_road.png"
import cmsVideo from "@/assets/v3/cms.webm"
import emailMarketingVideo from "@/assets/v3/email_marketing.webm"
import interactiveVideo from "@/assets/v3/interactive_website.webm"
import marketingOption1 from "@/assets/v3/marketing_option1.webm"
import websiteTemplates from "@/assets/v3/website_templates.webm";
import seoVideo from "@/assets/v3/seo.webm";
gsap.registerPlugin(ScrollTrigger, Flip);
export default function BackToBackReveal({
}: {
    }) {
    const $ref = useRef<HTMLDivElement>(null);
    const $pinRef = useRef<HTMLDivElement>(null);
    const $cardRef = useRef<HTMLDivElement>(null);
    const $previousIndexRef = useRef<number>(0);
    const cardContents = flippingCardContents;
    const [currentItem, setCurrentItem] = useState(0);
    const $flipTl = useRef<GSAPTimeline>(null);
    const [frontFaceContent, setFrontFaceContent] = useState(flippingCardContents[0]);
    const [backFaceContent, setBackFaceContent] = useState(flippingCardContents[1]);
    const $direction = useRef<1 | -1>(null);
    const animationQueue = useRef<Array<{ direction: 1 | -1, index: number }>>([]);
    const isAnimating = useRef(false);


    const processAnimationQueue = () => {
        if (isAnimating.current || animationQueue.current.length === 0) return;

        const nextAnimation = animationQueue.current.shift();
        if (!nextAnimation) return;

        executeFlipAnimation(nextAnimation.direction, nextAnimation.index);
    };

    const queueFlipAnimation = (direction: 1 | -1, index: number) => {
        // Add to queue
        animationQueue.current.push({ direction, index });
        // Process queue
        processAnimationQueue();
    };

    const executeFlipAnimation = (direction: 1 | -1, targetIndex: number) => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        const timing = 1;
        const rotationX = direction === 1 ? "-=180" : "+=180";

        $flipTl.current = gsap.timeline({
            onComplete: () => {
                const totalCards = cardContents.length;

                if (direction === 1) {
                    if (targetIndex == totalCards - 1) {
                        if (targetIndex % 2 != 0) {
                            setFrontFaceContent(cardContents[targetIndex - 1]);
                        } else {
                            setBackFaceContent(cardContents[targetIndex - 1]);
                        }
                    } else {
                        if (targetIndex % 2 != 0) {
                            setFrontFaceContent(cardContents[((targetIndex + 1) % totalCards)]);
                        } else {
                            setBackFaceContent(cardContents[(targetIndex + 1) % totalCards]);
                        }
                    }
                } else {
                    if (targetIndex == 0) {
                        if (targetIndex % 2 != 0) {
                            setFrontFaceContent(cardContents[(targetIndex - 1) % totalCards + (totalCards - 1)]);
                        } else {
                            setBackFaceContent(cardContents[(targetIndex - 1) % totalCards + (totalCards - 1)]);
                        }
                    } else {
                        if (targetIndex % 2 != 0) {
                            setFrontFaceContent(cardContents[targetIndex - 1]);
                        } else {
                            setBackFaceContent(cardContents[targetIndex - 1]);
                        }
                    }
                }

                isAnimating.current = false;
                // Process next animation in queue
                setTimeout(() => processAnimationQueue(), 0);
            }
        });

        $flipTl.current.to(".qf-card", { rotationX, duration: timing });
        $flipTl.current.to(".quickflip", { z: 50, duration: timing / 2, yoyo: true, repeat: 1 }, 0);
    };
    useEffect(() => {
        if ($direction.current !== null) {
            queueFlipAnimation($direction.current, currentItem);
        }
    }, [currentItem])
    useEffect(() => {
        let tl: gsap.core.Timeline;
        setTimeout(() => {
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: $ref.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: $pinRef.current,
                    scrub: true,
                    id: "back-to-back-reveal", // Add unique ID
                    refreshPriority: 5, // Medium priority, after meet-right-property
                    invalidateOnRefresh: true, // Recalculate on refresh
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const totalCards = cardContents.length;
                        const newIndex = Math.floor(progress * totalCards);
                        const clampedIndex = Math.min(newIndex, totalCards - 1);
                        console.log(clampedIndex);
                        if (clampedIndex !== $previousIndexRef.current) {
                            $direction.current = self.direction as 1 | -1;
                            setCurrentItem(clampedIndex);
                            $previousIndexRef.current = clampedIndex;
                        }
                    }
                }
            });
        }, 100);


        return () => {
            // Clean up timeline and ScrollTrigger
            tl.kill();
            // Clear animation queue
            animationQueue.current = [];
            isAnimating.current = false;
            // Clean up any remaining flip timelines
            if ($flipTl.current) {
                $flipTl.current.kill();
            }
        };
    }, [])
    return <section id="why-right-property" ref={$ref} className="relative h-[600vh] mt-[13.4375rem] lg:hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EDF7FC 20.67%)" }}>
        <div className="max-w-[1680px] mx-auto w-full relative z-[50]">
            <div ref={$pinRef} className="absolute top-[215px] left-[109px]" >
                <div ref={$cardRef} className="card quickflip relative w-[48.9375rem] h-[561px]" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
                    <div className="qf-card card-front relative top-0 left-0 w-full h-full backface-hidden transform-3d origin-center">
                        <FlippingCardContent key={currentItem} {...frontFaceContent} />
                    </div>
                    <div className="qf-card card-back absolute top-0 left-0 w-full h-full backface-hidden transform-3d origin-center rotate-y-180 rotate-z-180">
                        <FlippingCardContent key={currentItem + 1} {...backFaceContent} />
                    </div>
                </div>

                <div className="absolute top-[7.8125rem] -left-[4.375rem]">
                    <RevealItemsIndicator items={cardContents.length} currentItem={currentItem} />
                </div>
            </div>
        </div>
        <div className="rp-container">
            <VideoContainer videoUrl={marketingOption1} road={revealItem1Road}>
                <img src={revealItem1Overlay} className=" absolute -top-[7.375rem] left-[3rem] w-[41.9375rem] h-auto object-contain" />
                <GreenGradient />
                <BlueGradient />
            </VideoContainer>
            <VideoContainer videoUrl={interactiveVideo} road={revealItem2Road}>
                <img src={revealItem2Overlay} className="absolute -top-[13.625rem] left-[5.625rem] w-[41rem] h-auto object-contain" />
                <GreenGradient />
                <BlueGradient />
            </VideoContainer>
            <VideoContainer videoUrl={websiteTemplates} road={revealItem3Road}>
                <img src={revealItem3Overlay} className="absolute left-[13.75rem] -top-[1.25rem] -translate-y-full w-[24.375rem] h-auto object-contain" />
                <GreenGradient />
                <BlueGradient />
            </VideoContainer>
            <VideoContainer videoUrl={cmsVideo}>
                <img src={revealItem4Overlay} className="absolute top-[15.75rem] left-[3.75rem] w-[11.5625rem] h-auto object-contain" />
                <GreenGradient />
                <BlueGradient />
            </VideoContainer>
            <VideoContainer videoUrl={emailMarketingVideo} road={revealItem5Road}>
                <img src={revealItem5Overlay} className="absolute -top-[21.25rem] left-[13.75rem] w-[24.0625rem] h-auto object-contain`" />
                <BlueGradient />
            </VideoContainer>
            <VideoContainer videoUrl={seoVideo}>
                <img src={revealItem6Overlay} className="absolute top-[20.75rem] left-[3.75rem] w-[33.375rem] h-auto object-contain" />
                <BlueGradient />
            </VideoContainer>
        </div>

    </section>
}
export const GreenGradient = () => {
    return <div className="z-[-1] absolute top-[3.375rem] -left-[4.5625rem] w-[55.375rem] h-[55.375rem]" style={{ background: "radial-gradient(50% 50% at 50% 50%, #C4EEE3 0%, #EFF9FF 50.13%, rgba(255, 255, 255, 0) 100%)" }}>
    </div>
}
export const BlueGradient = () => {

    return <div className="z-[-1] absolute top-1/2 -translate-y-1/2 -left-[150%] w-[113.5rem] h-[113.5rem]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" }}>

    </div>
}
export const VideoContainer = ({
    children,
    road,
    videoUrl
}: {
    videoUrl: string
    children: React.ReactNode,
    road?: string
}) => {
    return <div className="relative w-full h-[100vh] flex items-center justify-end pr-[6.875rem]">
        <img src={road} className="absolute left-0 top-0 w-full h-auto object-contain" />

        <div className="relative">
            <video src={videoUrl} autoPlay muted loop playsInline className=" w-[40.1875rem] h-[26.75rem] object-cover" />
            {children}
        </div>

    </div>
}
