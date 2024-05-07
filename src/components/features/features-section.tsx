import { useInView } from "framer-motion";
import Features from "./features";
import SellKeywords from "./sell-keywords";
import { useRef } from "react";
import useSectionView from "../../hooks/use-section-view";

export default function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    useSectionView({ inView: isInView, key: 'features' })

    return <div ref={ref} id="features" className="section pt-[3.75rem] pb-[2.375rem] px-2.5">
        <SellKeywords className="mb-[1.875rem] mx-auto " />
        <Features />
    </div>
}