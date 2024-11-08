import { useInView } from "framer-motion";
import Features from "./features";
import { useRef } from "react";
import useSectionView from "../../hooks/use-section-view";
import useWindowSize from "../../hooks/use-window-size";
import SectionTitle from "../section-title";
import SectionDescription from "../section-description";
import FeaturesMobileColumn from "./features-mobile-column";

interface FeaturesSectionProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}
export default function FeaturesSection({
  title,
  description,
}: FeaturesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const featuresTitle = title || (
    <div>
      Powerful <span className="mobile:text-rpBlue">&</span> Effortless
    </div>
  );
  const featuresDescription =
    description ||
    "Deliver seamless experiences, customise with ease, and drive results with our advanced, user-friendly platform.";
  useSectionView({ inView: isInView, key: "features" });
  const { width } = useWindowSize();
  // const items = [featureItems[featureItems.length - 1], ...featureItems, featureItems[0]];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF -5.17%, rgba(245, 253, 255, 0.35) 27.7%, #FFF4F4 77.35%, #FFFFFF 100%)",
      }}
    >
      <div
        ref={ref}
        id="features"
        className="section pt-[5rem] pb-[4.375rem]  px-[3.8125rem]  mobile:pb-[0] mobile:px-0 mobile:pt-[2.5rem]"
      >
        <SectionTitle
          text={featuresTitle}
          variant="md"
          className="flex justify-center mobile:text-20"
        />
        <SectionDescription className="mb-[2.5rem] mobile:mb-9 mobile:w-[20.3125rem] mx-auto">
          {featuresDescription}
        </SectionDescription>
        {width > 800 && <Features className="" />}
        {width <= 800 && (
          <div className="pb-9">
            <FeaturesMobileColumn />{" "}
          </div>
        )}
      </div>
    </div>
  );
}
