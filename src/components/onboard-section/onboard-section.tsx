import { useRef } from "react";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import OnboardSteps from "./onboard-steps";
import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";

export default function OnboardSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: "all" })
    useSectionView({ inView: isInView, key: 'onboarding' })
    return <div
        ref={ref}
        id="onboarding"
        className="bg-white py-[5.47rem] mobile:pb-[3.75rem] mobile:py-[2.5rem] flex flex-col items-center text-center"
    >
        <SectionTitle text={
            <div className="mobile:mb-3">
                <div className="hidden mobile:block">
                    Onboard<br />Before You Know
                </div>
                <div className="mobile:hidden">
                    Onboard Before You Know
                </div>
            </div>
        } variant="md" />
        <SectionDescription className="mb-[4rem] mobile:mb-[1.625rem]">
            <div className="w-[full] mobile:w-[15.625rem]">
                At <b>Right Property,</b> we've streamlined the process of working with us into three easy steps.
            </div>
        </SectionDescription>
        {<OnboardSteps />}
    </div>
}