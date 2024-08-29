import SellKeywords from "../features/sell-keywords";
import featuresBg from "../../assets/images_v2/features_bg.webp";
export default function SellKeywordsContainer() {
    return <div className="h-[28.125rem] mobile:h-[11.375rem] flex items-center relative"
        style={{ backgroundImage: `linear-gradient(94.44deg, rgba(255, 255, 255, 0.8) 5.42%, rgba(255, 255, 255, 0) 54.55%), url(${featuresBg})`, backgroundSize: 'auto auto', backgroundRepeat: "no-repeat" }}
    >
        <div
            className="absolute top-0 left-0 w-full h-[7.6775rem]"
            style={{
                background: "linear-gradient(161.98deg, #FFFFFF 10.85%, rgba(255, 255, 255, 0) 86.33%)",

            }} />

        <div
            className="absolute bottom-0 left-0 w-full h-[7.6775rem]"
            style={{
                background: "linear-gradient(16.74deg, #FFFFFF 11.88%, rgba(255, 255, 255, 0) 88.81%)",

            }} />


        <SellKeywords className="pt-[7.5rem] pb-[6rem] mobile:pb-0  mobile:pt-0 mx-auto " />
    </div>
}