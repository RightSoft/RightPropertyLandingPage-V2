import easyOnboarding from "@/assets/v3/easy_onboarding_desktop.png"
import EasyOnboardingPath from "./easy-onboarding-path"
import { useCallback, useEffect, useRef } from "react"
import BinarySection, { BinaryBlockImage } from "../binary-section"
import rBlockImage from "@/assets/r-block.webp"
import automated from "@/assets/v3/automated.png"
import { interpolateColor } from "@/lib/utils"
import purpleCheck from "@/assets/v3/purple_check.png";
import gsap from "gsap"
export default function EasyOnboardingSection() {
    const pathRef = useRef<SVGPathElement>(null)
    const gradientRef = useRef<HTMLDivElement>(null)
    const motionTimeline = useRef<GSAPTimeline>(null)
    const items = [
        {
            icon: <img src={purpleCheck} alt="check-circle" className="w-[2.5rem] h-auto object-contain" />,
            title: "Live in 48 hours",
            description: "Launch your 2D setup in as little as two days. No delays, no complex handovers.",
        },
        {
            icon: <img src={purpleCheck} alt="check-circle" className="w-[2.5rem] h-auto object-contain" />,
            title: "Transparent pricing, always",
            description: "No hidden costs, no vague estimates.What you see is what you pay.",
        },
        {
            icon: <img src={purpleCheck} alt="check-circle" className="w-[2.5rem] h-auto object-contain" />,
            title: "Built to grow with you",
            description: "Whether you’re showcasing 10 units or 300,The experience stays the same.",
        }
    ]
    const startMotionPath = useCallback(() => {
        if (gradientRef.current && pathRef.current) {
            // Stop any existing motion path animation
            if (motionTimeline.current) {
                motionTimeline.current.kill()
            }
            motionTimeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#easy-onboarding",
                    start: "center-=20% center",
                    end: 'center top',
                    // end: '+=' + ((window.innerHeight * 3) + 50),
                    scrub: 0,
                }
            });
            // Create a dummy object to animate along the path
            const follower = { x: 0, y: 0 }

            const moveAnim = gsap.to(follower, {
                ease: "power3.out",
                motionPath: {
                    path: pathRef.current,
                    offsetX: 0, // Container offset
                    offsetY: 150, // Container offset
                    autoRotate: true,
                    start: 0,
                    end: 1
                },
                onUpdate: function () {
                    const progress = this.progress()
                    if (gradientRef.current) {
                        gradientRef.current.style.setProperty('left', `${follower.x}px`)
                        gradientRef.current.style.setProperty('top', `${follower.y}px`)

                        // Animate gradient colors based on scroll progress
                        const blueToGreenProgress = progress // 0 to 1
                        const startColor = interpolateColor('#C4EEE3', '#E7DFF2', blueToGreenProgress)
                        // Keep middle color opaque by interpolating to a light purple instead of transparent
                        const middleColor = interpolateColor('#EFF9FF', '#F5F2F9', blueToGreenProgress)

                        gradientRef.current.style.background = `radial-gradient(50% 50% at 50% 50%, ${startColor} 0%, ${middleColor} 25.96%, rgba(255, 255, 255, 0) 100%)`
                    }
                }
            })
            const anim = gsap.to(gradientRef.current, {
                width: "1445px",
                height: "1048px",
            })
            motionTimeline.current.add(moveAnim, 0)
            motionTimeline.current.add(anim, 0)
        }
    }, [gradientRef, pathRef])
    useEffect(() => {
        setTimeout(() => {
            startMotionPath()
        }, 300)
    }, [startMotionPath])
    return (
        <section id="easy-onboarding" className="">
            <div className="rp-container" style={{ height: "98.75rem" }}>
                <img className='absolute top-0 left-0 w-full h-auto lg:hidden z-[-1]' src={easyOnboarding} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="1680" height="1734" />
                <div className="absolute top-[43.3125rem] left-[40.75rem]" ref={(el) => {
                    if (el) {
                        const path = el.querySelector('path')
                        if (path) pathRef.current = path
                    }
                }}>
                    <EasyOnboardingPath />
                </div>
        

                <div ref={gradientRef} style={{ background: "radial-gradient(50% 50% at 50% 50%, #C4EEE3 0%, #EFF9FF 50.13%, rgba(255, 255, 255, 0) 100%)" }} className="absolute z-[-2] top-[15.75rem] left-[10.625rem] w-[55.375rem] h-[55.375rem]"></div>
                <div className="absolute left-[35rem] bottom-[7.125rem] ">
                    <BinarySection subHeader="Did you know?" title="Built by software minds" description="No visuals or assets? Our team can produce what’s needed." image={<BinaryBlockImage path={automated} />} />
                </div>
                <div className="flex justify-end pr-[10rem] pt-[10rem] relative z-[10]">
                    <div className="w-[41.875rem]">
                        <p className="mb-8 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                            Presentation
                        </p>
                        <h2 className="mb-8 lg:mb-6 font-general-sans font-semibold text-40 lg:text-40 tracking-[0em] leading-[130%] text-squid-ink">
                            Easy Onboarding
                        </h2>
                        <p className="mb-[5rem] font-geist font-normal text-32 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink">
                            Get started in hours, scale on your terms, and pay only for what you need—no surprises.
                        </p>
                        <img className='w-full h-auto lg:block hidden mb-[2.5rem]' src={rBlockImage} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="592" height="391" />
                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-6 items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className='font-geist font-medium text-28 leading-[140%] text-squid-ink'>
                                            {item.title}
                                        </h3>
                                        <p className='font-geist font-normal text-24 leading-[140%] text-squid-ink'>
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}