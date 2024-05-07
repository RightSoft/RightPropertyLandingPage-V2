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

    useEffect(() => {
        const id = setTimeout(() => {
            let tmpIndex = activeIndex;
            tmpIndex++;
            if (tmpIndex >= (keywords.length)) {
                tmpIndex = 0;
            }
            setActiveIndex(tmpIndex);
        }, 4000);
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
                {activeIndex == 0 && <motion.div
                    key='item-0'
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 500 }}
                    className="">
                    {keywords[0]}
                </motion.div>}
                {activeIndex == 1 && <motion.div
                    key='item-1'
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 500 }}
                    className="">
                    {keywords[1]}
                </motion.div>}

                {activeIndex == 2 && <motion.div
                    key='item-2'
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 500 }}
                    className="">
                    {keywords[2]}
                </motion.div>}

                {activeIndex == 3 && <motion.div
                    key='item-3'

                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 500 }}
                    className="">
                    {keywords[3]}
                </motion.div>}

                {activeIndex == 4 && <motion.div
                    key='item-4'
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 500 }}
                    className="">
                    {keywords[4]}
                </motion.div>}

                {activeIndex == 5 && <motion.div
                    key='item-5'
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 500 }}
                    className="">
                    {keywords[5]}
                </motion.div>}
            </AnimatePresence>
        </div>
    </div>
}