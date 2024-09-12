import { AnimatePresence, m } from "framer-motion";

import { cn } from "../../lib/utils";
import { featureItems } from "./feature-data";
interface FeaturesImagesProps {
    activeIndex: number;
}
export default function FeaturesImages({ activeIndex }: FeaturesImagesProps) {
    const images = [
        {
            src: featureItems[0].image,
            className: "max-w-[50.1875rem]"
        },
        {
            src: featureItems[1].image,
            className: "max-w-[50.1875rem]"
        },
        {
            src: featureItems[2].image,
            className: "max-w-[50.1875rem]"
        },
        {
            src: featureItems[3].image,
            className: "max-w-[50.1875rem]"
        },
        {
            src: featureItems[4].image,
            className: "max-w-[50.1875rem]"
        },
    ]
    const justifyClass = "justify-center"
    const cnClass = cn('w-full h-full flex items-center relative', justifyClass)

    const startScale = 0.8;
    const startOpacity = 0.7;
    const duration = 0.6;

    return <div className={cnClass}>
        <AnimatePresence mode="popLayout">
            <m.img
                key={`k-${activeIndex}`}
                src={images[activeIndex].src}
                className={images[activeIndex].className}
                alt="feature"
                initial={{ opacity: startOpacity, scale: startScale }}
                animate={{ opacity: 1, y: 0, scale: 1.0 }}
                exit={{ opacity: 0, scale: startScale }}
                transition={{ duration: duration, ease: "easeOut" }}
            />
        </AnimatePresence>
    </div>
}