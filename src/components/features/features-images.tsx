import customizableSrc from "../../assets/images/customizable.webp";
import deviceIntegrationSrc from "../../assets/images/device_integration.webp";
import leadManagementSrc from "../../assets/images/lead_management.webp";
import oneClickWebsiteSrc from "../../assets/images/one_click_website.webp";
import setupSrc from "../../assets/images/setup.webp";
interface FeaturesImagesProps {
    activeIndex: number;
}
export default function FeaturesImages({ activeIndex }: FeaturesImagesProps) {
    const images = [
        {
            src: deviceIntegrationSrc,
            className:"max-h-[40.625rem]"
        },
        {
            src: setupSrc,
            className: "max-h-[40.625rem]"
        },
        {
            src: customizableSrc,
            className: "max-h-[40.625rem]"
        },
        {
            src: oneClickWebsiteSrc,
            className: "max-w-[50.1875rem]"
        },
        {
            src: leadManagementSrc,
            className: "max-w-[50.1875rem]"
        },
    ]
    return <div className="w-full h-full flex items-center justify-center">
        <img src={images[activeIndex].src} className={images[activeIndex].className} alt="feature" />
    </div>
}