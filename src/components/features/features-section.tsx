import Features from "./features";
import SellKeywords from "./sell-keywords";

export default function FeaturesSection() {
    return <div id="features" className="section pt-[5.625rem] px-2.5">
        <SellKeywords className="mb-[4.125rem] mx-auto "/>
        <Features  />
    </div>
}