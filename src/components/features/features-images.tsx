import { AnimatePresence, motion } from "framer-motion";
import customizableSrc from "../../assets/images/customizable.webp";
import deviceIntegrationSrc from "../../assets/images/device_integration.webp";
import leadManagementSrc from "../../assets/images/lead_management.webp";
import oneClickWebsiteSrc from "../../assets/images/one_click_website.webp";
import setupSrc from "../../assets/images/setup.webp";
import { cn } from "../../lib/utils";
interface FeaturesImagesProps {
    activeIndex: number;
}
export default function FeaturesImages({ activeIndex }: FeaturesImagesProps) {
    const images = [
        {
            src: deviceIntegrationSrc,
            className: "max-h-[40.625rem]"
        },
        {
            src: setupSrc,
            className: "max-w-[59.375rem]"
        },
        {
            src: customizableSrc,
            className: "w-full"
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
    const justifyClass = activeIndex == 2 ? "items-start justify-end" : "justify-center"
    const cnClass = cn('w-full h-full flex items-center relative', justifyClass)

    const startScale = 0.8;
    const startY = 0;
    const startOpacity = 0.7;
    const duration = 0.4

    return <div className={cnClass}>
        <AnimatePresence mode="popLayout">
            <motion.img 
                key={`k-${activeIndex}`}
                src={images[activeIndex].src}
                className={images[activeIndex].className}
                alt="feature"
                initial={{ opacity: startOpacity, scale:startScale }}
                animate={{ opacity: 1, y: 0, scale:1.0 }}
                exit={{ opacity: 0, scale:startScale }}
                transition={{duration:duration}}
            />
        </AnimatePresence>
    </div>
}