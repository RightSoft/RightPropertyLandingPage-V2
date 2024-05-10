import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BeautifulIntelligentAnimatigCaption() {
    const startScaleY = 0.3;
    const startY = 0;
    const startOpacity = 0.0;
    const duration = 0.4
    const wait = 3000 // in ms
    const [activeIndex, setActiveIndex] = useState(0)
    const captions: JSX.Element[] = [
        <span>A <b>beautiful</b> interface <b>stunning</b> your clients</span>,
        <span>
            A <b>focused</b> technology <b>empowering</b> your business.
        </span>
    ]
    useEffect(() => {
        const id = setTimeout(() => {
            let tmpIndex = activeIndex;
            tmpIndex++;
            if (tmpIndex >= (captions.length)) {
                tmpIndex = 0;
            }
            setActiveIndex(tmpIndex);
        }, wait);
        return () => {
            clearTimeout(id)
        }
    }, [activeIndex])
    return <motion.div className="hidden mobile:block">
        <div className="h-[3.375rem]  text-24 mb-[1.875rem] w-[22.06rem]">
            <AnimatePresence mode="wait">
                {captions.map((_, index) => (
                    activeIndex === index && <motion.div
                        key={`item-${index}`}
                        initial={{ opacity: startOpacity, y: startY, scaleY: startScaleY }}
                        animate={{ opacity: 1, y: 0, scaleY: 1.0 }}
                        exit={{ opacity: startOpacity, y: startY, scaleY: startScaleY }}
                        transition={{ duration: duration }}
                    >
                        {captions[index]}
                    </motion.div>
                ))}
            </AnimatePresence>


        </div>
    </motion.div>
}