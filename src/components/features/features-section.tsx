import { useInView } from "framer-motion";
import Features from "./features";
import { useRef } from "react";
import useSectionView from "../../hooks/use-section-view";
import useWindowSize from "../../hooks/use-window-size";
import { featureItems } from "./feature-data";
import FeatureSlideItem from "./feature-slide/feature-slide-item";
import CustomCarousel from "../custom-carousel";
import SectionTitle from "../section-title";
import SectionDescription from "../section-description";
export default function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useSectionView({ inView: isInView, key: 'features' })
    const { width } = useWindowSize();
    const items = [featureItems[featureItems.length - 1], ...featureItems, featureItems[0]];
    const carouselCards = items.map((featureItem, index) => {
        return <FeatureSlideItem key={`slide_${index}`} featureItem={featureItem} isImageTop={true} />
    })
    return <div
        style={{ background: 'linear-gradient(180deg, #FFFFFF -5.17%, rgba(245, 253, 255, 0.35) 27.7%, #FFF4F4 77.35%, #FFFFFF 100%)' }}
    >
        <div ref={ref} id="features" className="section pt-[5rem] pb-[4.375rem]  px-[3.8125rem]  mobile:pb-[0] mobile:px-0 mobile:pt-[2.5rem]"
        >
            <SectionTitle text={<div>Powerful <span className="mobile:text-rpBlue">&</span> Effortless</div>} variant="md" className="flex justify-center" />
            <SectionDescription className="mb-[2.5rem] mobile:w-[20.93rem] mx-auto" >
                Deliver seamless experiences, customise with ease, and drive results with our advanced, user-friendly platform.
            </SectionDescription>
            {width > 800 && <Features className="" />}
            {width <= 800 && <CustomCarousel cards={carouselCards} speed={15} />}
        </div>
    </div>


}