import { AnimatePresence, m } from "framer-motion";
import { cn } from "../../lib/utils";
import useLoopToN from "../../hooks/use-loop-to-n";
interface SellKeywordsProps {
    className: string;

}
export default function SellKeywords({ className }: SellKeywordsProps) {
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
    const [activeIndex,_] = useLoopToN(keywords.length, wait);

    const cnClass = cn("w-[52.7375rem] text-center text-[2.625rem] leading-[3.2rem] font-bold","mobile:text-[1.25rem] mobile:leading-[1.5rem] mobile:w-full", className)
    return <div className={cnClass}>
        <div className="">
            We help to sell your properties
        </div>
        <div className="text-titleOrange leading-[3.65rem]">
            <AnimatePresence mode="wait">
                {Array.from({ length: 6 }, (_, index) => (
                    activeIndex === index && (
                        <m.div
                            key={`item-${index}`}
                            initial={{ opacity: startOpacity, y: startY, scaleY:startScaleY }}
                            animate={{ opacity: 1, y: 0, scaleY:1.0 }}
                            exit={{ opacity: startOpacity, y: startY, scaleY:startScaleY }}
                            transition={{duration:duration}}
                            className="">
                            {keywords[index]}
                        </m.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    </div>
}