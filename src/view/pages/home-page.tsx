import { Helmet } from "react-helmet"
import { useCallback, useEffect, useRef } from "react"
import BackToBackReveal from "../components/back-to-back-reveal"
import BinarySection from "../components/binary-section"
import ChoosePresentationSection from "../components/choose-presentation/section"
import ConvertMoreLeadsSection from "../components/convert-more-leads/section"
import EasyOnboardingSection from "../components/easy-onboarding/section"
import EnhancedPresentationsSection from "../components/enhanced-presentations/section"
import FaqSection from "../components/faq/section"
import FeaturesCarousel from "../components/features-carousel"
import MadeToFit from "../components/made-to-fit/section"
import MeetRightPropertySection from "../components/meet-right-property/section"
import PresentSmarterSection from "../components/present-smarter/section"
import ScheduleADemoSection from "../components/schedule-a-demo/section"
import SimpleSetupSection from "../components/simple-setup/section"
import LevelUpYourMarketing from "../components/sliding-sections/level-up-your-marketing"
import heroRoad from "../../assets/v3/road.png"
import MaskPath from "../components/enhanced-presentations/mask-path"
import type Lenis from "lenis";
import { useLenis } from 'lenis/react'
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register the plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
export default function HomePage() {
    const divRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const motionTimeline = useRef<gsap.core.Timeline | null>(null)
    const $passedTrigger = useRef(false)
    //MOTION PATH
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (divRef.current) {
            const { left, top, } = divRef.current.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            divRef.current.style.setProperty('--mask-x', `${x}px`);
            divRef.current.style.setProperty('--mask-y', `${y}px`);
        }
    }, [])

    useEffect(()=>{ 
        setTimeout(() => {
            startMotionPath()
        }, 10);

    },[])
    const startMotionPath = useCallback(() => {
        if (divRef.current && pathRef.current) {
            // Stop any existing motion path animation
            if (motionTimeline.current) {
                motionTimeline.current.kill()
            }
            motionTimeline.current = gsap.timeline({
                paused: true,
                scrollTrigger: {
                  trigger: ".trigger",
                  start: "top+=250px top",
                  end: '+=100%',
                  // end: '+=' + ((window.innerHeight * 3) + 50),
                  scrub: true,
                  markers: false
                }
              }); 
              // Create a dummy object to animate along the path
            const follower = { x: 0, y: 0 }
                         motionTimeline.current.to(follower, {
                 ease: "power3.out",
                motionPath: {
                    path: pathRef.current,
                    offsetX: 550, // Container offset
                    offsetY: 350, // Container offset
                    autoRotate: false
                },
                onUpdate: function() {
                    if (divRef.current) {
                        divRef.current.style.setProperty('--mask-x', `${follower.x}px`)
                        divRef.current.style.setProperty('--mask-y', `${follower.y}px`)
                    }
                }
            })
        }
    }, [divRef, pathRef])
    const moveToInitialPosition = useCallback(() => {
        console.log("moveToInitialPosition");
        if (divRef.current && pathRef.current) {
            window.removeEventListener('mousemove', handleMouseMove)
            
            // Get the initial position of the path (first point + offsets)
            const initialPoint = pathRef.current.getPointAtLength(0)
            const initialX = initialPoint.x + 550 // Container offset
            const initialY = initialPoint.y + 350 // Container offset
            
            // Animate mask to initial position
            gsap.to({}, {
                duration: 1,
                ease: "power2.out",
                onUpdate: function() {
                    const progress = this.progress()
                    if (divRef.current) {
                        // Get current mask position
                        const currentX = parseFloat(getComputedStyle(divRef.current).getPropertyValue('--mask-x')) || 448
                        const currentY = parseFloat(getComputedStyle(divRef.current).getPropertyValue('--mask-y')) || -50
                        
                        // Interpolate to initial position
                        const x = currentX + (initialX - currentX) * progress
                        const y = currentY + (initialY - currentY) * progress
                        
                        divRef.current.style.setProperty('--mask-x', `${x}px`)
                        divRef.current.style.setProperty('--mask-y', `${y}px`)
                    }
                },
                onComplete: () => {
                    // startMotionPath()
                    // motionTimeline.current?.paused(false);
                }
            })
        }
    }, [handleMouseMove, startMotionPath])

  

    const lenisHandler = (lenis: Lenis) => {
        if (lenis.progress >= 0.001) {
            if(!$passedTrigger.current){
                $passedTrigger.current = true
                moveToInitialPosition()
            }
            
        } else {
            $passedTrigger.current = false
            // Stop motion path and resume mouse tracking
            // if (motionTimeline.current) {
            //     motionTimeline.current.kill()
            //     motionTimeline.current = null
            // }
            
            // // Clean up ScrollTrigger
            // ScrollTrigger.getAll().forEach(trigger => {
            //     if (trigger.vars.trigger === ".trigger") {
            //         trigger.kill()
            //     }
            // })
            
            window.addEventListener('mousemove', handleMouseMove)
        }
    }
    useLenis(lenisHandler, [handleMouseMove, startMotionPath, moveToInitialPosition]);


    // //MOTION PATH
    useEffect(() => {
      

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="relative">
            <Helmet>
                <title>Right Property | Marketing Suite for Real Estate Developers</title>
                <meta name="robots" content="index, follow" />
            </Helmet>


            <main role="main" className="relative z-[10]" aria-label="Right Property homepage content">




                <div ref={divRef} className="z-[8] absolute top-[-84px] left-0 w-full  h-auto inline-block mask max-w-[100vw] overflow-hidden">
                    <div className="rp-container relative">
                        <img src={heroRoad} alt="Hero road" className="w-full h-auto trigger" />
                        <div className="z-[8] absolute top-[380px] left-[240px]">
                            <div className="rp-container ">
                                <div ref={(el) => {
                                    if (el) {
                                        const path = el.querySelector('path')
                                        if (path) pathRef.current = path
                                    }
                                }}>
                                    <MaskPath />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="highlight"></div>
                </div>





                <div className="relative z-[20]">

                    <EnhancedPresentationsSection />
                    <MeetRightPropertySection />
                    <PresentSmarterSection />
                    <ChoosePresentationSection />
                    <SimpleSetupSection />
                    <ConvertMoreLeadsSection />
                    <EasyOnboardingSection />
                    <div className="hidden lg:block"><LevelUpYourMarketing /></div>
                    <FeaturesCarousel />
                    <BackToBackReveal />
                    <MadeToFit />
                    <FaqSection />
                    <ScheduleADemoSection />
                </div>

            </main>
        </div>
    )
}