import SellKeywords from "../features/sell-keywords";
import featuresBg from "../../assets/images_v2/features_bg.webp";

export default function SellKeywordsContainer() {
    return <div className="h-[28.125rem] flex items-center relative"
        style={{ background: `linear-gradient(94.44deg, rgba(255, 255, 255, 0.8) 5.42%, rgba(255, 255, 255, 0) 54.55%), url(${featuresBg})`, backgroundSize: 'cover' }}
    >
        <SellKeywords className="pt-[7.5rem] pb-[6rem] mobile:pb-[3.375rem]  mobile:pt-3 mx-auto " />
    </div>
}