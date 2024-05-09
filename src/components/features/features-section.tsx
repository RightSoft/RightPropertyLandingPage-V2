import { useInView } from "framer-motion";
import Features from "./features";
import SellKeywords from "./sell-keywords";
import { useRef } from "react";
import useSectionView from "../../hooks/use-section-view";
import FeaturesSlide from "./feature-slide/feature-slide";
import useWindowSize from "../../hooks/use-window-size";

export default function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    useSectionView({ inView: isInView, key: 'features' })
    const { width } = useWindowSize();
    return <div ref={ref} id="features" className="section pb-[2.375rem] mobile:pb-[0]  px-[1.203125rem] mobile:px-0 mobile:bg-[#F7F7F7]">
        <SellKeywords className="pt-[7.5rem] pb-[6rem] mobile:pb-[3.375rem]  mobile:pt-3 mx-auto " />
        {width > 800 && <Features className="" />}
        {width <= 800 && <FeaturesSlide className=" pb-[0.9375rem]" />}
    </div>
}