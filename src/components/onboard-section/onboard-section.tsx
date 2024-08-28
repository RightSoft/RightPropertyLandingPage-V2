import { useRef } from "react";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import OnboardSteps from "./onboard-steps";
import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";
import useWindowSize from "../../hooks/use-window-size";
import OnboardSlide from "./onboard-steps-slide/onboard-slide";

export default function OnboardSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: "all" })
    useSectionView({ inView: isInView, key: 'onboarding' })
    const { width } = useWindowSize();
    return <div
        ref={ref}
        id="onboarding"
        className="bg-white py-[5.47rem] mobile:pb-[3.75rem] mobile:pt-[1.6875rem] flex flex-col items-center text-center"
        >
        <SectionTitle text="Onboard Before You Know" />
        <SectionDescription className="mb-[4rem] mobile:mb-[1.625rem]">
            <div className="w-[full] mobile:w-[15.625rem]">
                At <b>Right Property,</b> we've streamlined the process of working with us into three easy steps.
            </div>
        </SectionDescription>
        {width > 800 ? <OnboardSteps /> : <OnboardSlide />}
    </div>
}