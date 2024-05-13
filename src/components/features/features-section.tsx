import { useInView } from "framer-motion";
import Features from "./features";
import SellKeywords from "./sell-keywords";
import { useRef } from "react";
import useSectionView from "../../hooks/use-section-view";
import useWindowSize from "../../hooks/use-window-size";
import { featureItems } from "./feature-data";
import FeatureSlideItem from "./feature-slide/feature-slide-item";
import SwiperCarousel from "./swiper-carousel";

export default function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useSectionView({ inView: isInView, key: 'features' })
    const { width } = useWindowSize();
    const carouselCards = featureItems.map((featureItem, index) => {
        return <FeatureSlideItem key={`slide_${index}`} featureItem={featureItem} isImageTop={true} />
    })
    return <div ref={ref} id="features" className="section pb-[2.375rem] mobile:pb-[0]  px-[1.203125rem] mobile:px-0 mobile:bg-[#F7F7F7]">
        <SellKeywords className="pt-[7.5rem] pb-[6rem] mobile:pb-[3.375rem]  mobile:pt-3 mx-auto " />
        {width > 800 && <Features className="" />}
        <SwiperCarousel cards={carouselCards} speed={0} />
        {/* {width <= 800 && <CustomCarousel cards={carouselCards} speed={15} />} */}
    </div>
}