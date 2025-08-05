import rBlockImage from "@/assets/r-block.webp"
import checkCircleBlue from "@/assets/icons/check_circle_blue.png";
import gRoad from "@/assets/v3/g_road.png";
import SimpleSetupGradientPath from "./simple-setup-gradient-path";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import BinarySection, { BinaryBlockImage } from "../binary-section";
import softwareMinds from "@/assets/v3/software_minds.png"
// Helper function to interpolate between two colors
function interpolateColor(color1: string, color2: string, progress: number): string {
    // Simple hex color interpolation
    if (color1.startsWith('#') && color2.startsWith('#')) {
        const r1 = parseInt(color1.slice(1, 3), 16)
        const g1 = parseInt(color1.slice(3, 5), 16)
        const b1 = parseInt(color1.slice(5, 7), 16)

        const r2 = parseInt(color2.slice(1, 3), 16)
        const g2 = parseInt(color2.slice(3, 5), 16)
        const b2 = parseInt(color2.slice(5, 7), 16)

        const r = Math.round(r1 + (r2 - r1) * progress)
        const g = Math.round(g1 + (g2 - g1) * progress)
        const b = Math.round(b1 + (b2 - b1) * progress)

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }

    // For rgba colors, return the target color
    return color2
}
export default function SimpleSetupSection() {
    const pathRef = useRef<SVGPathElement>(null)
    const gradientRef = useRef<HTMLDivElement>(null)
    const motionTimeline = useRef<GSAPTimeline>(null)
    const items: { icon: React.ReactNode, title: string, description: string }[] = [
        {
            icon: <img src={checkCircleBlue} alt="checkmark icon for simple setup feature" className="w-[2.5rem] h-auto object-contain" />,
            title: "Plug in your content",
            description: "Upload floor plans, renders, brochures, videos, and even 3D tour.",
        },
        {
            icon: <img src={checkCircleBlue} alt="checkmark icon for support feature" className="w-[2.5rem] h-auto object-contain" />,
            title: "We’ve got you covered",
            description: "No visuals or assets? Our team can produce what’s needed.",
        },
        {
            icon: <img src={checkCircleBlue} alt="checkmark icon for easy updates feature" className="w-[2.5rem] h-auto object-contain" />,
            title: "Easy to update anytime",
            description: "Need to make changes?Just a few clicks. No waiting, no developers.",
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
                    trigger: "#simple-setup",
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
                    offsetX: 200, // Container offset
                    offsetY: -180, // Container offset
                    autoRotate: true,
                    start: 1,
                    end: 0
                },
                onUpdate: function () {
                    const progress = this.progress()
                    if (gradientRef.current) {
                        gradientRef.current.style.setProperty('left', `${follower.x}px`)
                        gradientRef.current.style.setProperty('top', `${follower.y}px`)

                        // Animate gradient colors based on scroll progress
                        const blueToGreenProgress = progress // 0 to 1
                        const startColor = interpolateColor('#DBE8FF', '#E7DFF2', blueToGreenProgress)
                        // Keep middle color opaque by interpolating to a light purple instead of transparent
                        const middleColor = interpolateColor('#E8F4FF', '#F5F2F9', blueToGreenProgress)

                        gradientRef.current.style.background = `radial-gradient(50% 50% at 50% 50%, ${startColor} 0%, ${middleColor} 25.96%, rgba(255, 255, 255, 0) 100%)`
                        console.log(progress)
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
        <section id="simple-setup" className="" aria-label="Simple setup process for Right Property platform">
            <div className="rp-container" style={{ height: "108.375rem" }}>
                <div className="flex justify-start gap-[8.4375rem] w-[41.875rem]">
                    <img className='absolute top-0 left-0 w-full h-auto lg:hidden z-[1]' src={gRoad} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="1680" height="1734" />
                    <div className="absolute top-[25rem] right-[12rem]" ref={(el) => {
                        if (el) {
                            const path = el.querySelector('path')
                            if (path) pathRef.current = path
                        }
                    }}>
                        <SimpleSetupGradientPath />
                    </div>
                    <div ref={gradientRef} style={{ background: "radial-gradient(50% 50% at 50% 50%, #DBE8FF 0%, #E8F4FF 25.96%, rgba(255, 255, 255, 0) 100%)" }} className="absolute -top-[12rem] -right-[31rem] w-[1425.84px] h-[1425.84px]"></div>
                    <div className="absolute left-[35rem] bottom-[16.875rem] ">
                        <BinarySection subHeader="Did you know?" title="Built by software minds" description="No visuals or assets? Our team can produce what’s needed." image={<BinaryBlockImage path={softwareMinds} />} />

                    </div>
                    <div className="pt-[10rem] pl-[5rem]">
                        <p className="mb-8 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                            {"Presentation"}
                        </p>
                        <h2 className="mb-8 lg:mb-6 font-general-sans font-semibold text-40 lg:text-40 tracking-[0em] leading-[130%] text-squid-ink">
                            {"Simple Setup"}
                        </h2>
                        <p className="mb-[5rem] font-geist font-normal text-32 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink">
                            {"The process is straightforward, flexible, and built to get you moving fast."}
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

