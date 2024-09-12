import { AnimatePresence, m } from "framer-motion";
import useLoopToN from "../../hooks/use-loop-to-n";

export default function BeautifulIntelligentAnimatigCaption() {
    const startScaleY = 0.3;
    const startY = 0;
    const startOpacity = 0.0;
    const duration = 0.4
    const wait = 3000 // in ms
    const captions: JSX.Element[] = [
        <span>a <b>beautiful</b> interface <b>stunning</b> your clients</span>,
        <span>
            a <b>focused</b> technology <b>empowering</b> your business.
        </span>
    ]   
    const [activeIndex,_] = useLoopToN(captions.length,wait);

    return <m.div className="hidden mobile:block">
        <div className="h-[3.375rem]  text-12 mb-[1.875rem] w-[22.06rem]">
            <AnimatePresence mode="wait">
                {captions.map((_, index) => (
                    activeIndex === index && <m.div
                        key={`beautiful-item-${index}`}
                        initial={{ opacity: startOpacity, y: startY, scaleY: startScaleY }}
                        animate={{ opacity: 1, y: 0, scaleY: 1.0 }}
                        exit={{ opacity: startOpacity, y: startY, scaleY: startScaleY }}
                        transition={{ duration: duration }}
                    >
                        {captions[activeIndex]}
                    </m.div>
                ))}
            </AnimatePresence>


        </div>
    </m.div>
}