import { animate, stagger, useInView } from "framer-motion";
import OnboardFirstStepIcon from "../icons/ onboard-first-step-icon";
import OnboardSecondStepItem from "../icons/onboard-second-step-icon";
import OnboardThirdStepIcon from "../icons/onboard-third-step-icon";
import OnboardDivider from "./onboard-divider";
import OnboardStep from "./onboard-step";
import { useEffect, useRef } from "react";

export default function OnboardSteps() {
    const ref = useRef(null)
    const inView = useInView(ref, {amount:0.9})

    useEffect(() => {
        if (inView) {
            animate(".onboard-step", { opacity: 1 }, { delay: stagger(1),  duration: 1, ease: "easeOut"  },)
        } else {
            animate(".onboard-step", { opacity: 0 })
        }
    }, [inView])
    return <div ref={ref} className="flex ">
        <OnboardStep index={1} title={"Gather Your Assets"} description={"We need all your existing visual assets from still renders, to brochures, videos to illustrations. "} icon={
            <OnboardFirstStepIcon />
        } />
        <OnboardDivider />
        <OnboardStep index={2} title={<span>Your Plot<br />Details</span>} description={"We need all plot details from floor plans to dimensions."} icon={
            <OnboardSecondStepItem />
        } />
        <OnboardDivider />
        <OnboardStep index={3} title={"Apply Your Branding"} description={"We need your logo and brand colours"} icon={
            <OnboardThirdStepIcon />
        } />
    </div>
}