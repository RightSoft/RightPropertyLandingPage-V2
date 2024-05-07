import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react"
import { cn } from "../../lib/utils";
interface SellKeywordsProps {
    className: string;

}
export default function SellKeywords({ className }: SellKeywordsProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const keywords = [
        'faster',
        'cost effective',
        'easier',
        'efficiently',
        'in style',
        'with insight'
    ]

    const startScaleY = 0.3;
    const startY = 0;
    const startOpacity = 0.0;
    const duration = 0.4
    const wait = 3000 // in ms



    useEffect(() => {
        const id = setTimeout(() => {
            let tmpIndex = activeIndex;
            tmpIndex++;
            if (tmpIndex >= (keywords.length)) {
                tmpIndex = 0;
            }
            setActiveIndex(tmpIndex);
        }, wait);
        return () => {
            clearTimeout(id)
        }
    }, [activeIndex])

    const cnClass = cn("w-[52.7375rem] text-center text-[2.625rem] leading-[3.2rem] font-bold", className)
    return <div className={cnClass}>
        <div className="">
            We help to sell your properties
        </div>
        <div className="text-keywordColor leading-[3.65rem]">
            <AnimatePresence mode="wait">
                {Array.from({ length: 6 }, (_, index) => (
                    activeIndex === index && (
                        <motion.div
                            key={`item-${index}`}
                            initial={{ opacity: startOpacity, y: startY, scaleY:startScaleY }}
                            animate={{ opacity: 1, y: 0, scaleY:1.0 }}
                            exit={{ opacity: startOpacity, y: startY, scaleY:startScaleY }}
                            transition={{duration:duration}}
                            className="">
                            {keywords[index]}
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    </div>
}