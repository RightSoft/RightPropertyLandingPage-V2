import { useRef } from "react";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import OnboardSteps from "./onboard-steps";
import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";

export default function OnboardSection() {
    const ref = useRef(null)
    const isInView = useInView(ref,{amount:"all"})
    useSectionView({ inView: isInView, key: 'onboarding' })

    return <div
        ref={ref}
        id="onboarding"
        className="py-[7.5rem] flex flex-col items-center"
        style={{
            background: 'linear-gradient(134.91deg, #F8F8F9 6.27%, #F7F7F7 60.03%)'
        }}>
        <SectionTitle text="Onboard Before You Know" />
        <SectionDescription className="mb-[1.9025rem]">
            <div className="w-[31.75rem]">
                At <b>Right Property,</b> we've streamlined the process of working with us into three easy steps.
            </div>
        </SectionDescription>
        <OnboardSteps />
    </div>
}