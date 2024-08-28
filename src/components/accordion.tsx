import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

interface AccordionProps {
    i: number;
    expanded: number;
    setExpanded: (i: number) => void;
    header: React.ReactNode
    content: React.ReactNode
    className?: string
}
export default function Accordion({ i, expanded, setExpanded, header, content, className }: AccordionProps) {

    const [isOpen, setIsOpen] = useState(i === expanded);
    const bgColorClass = isOpen ? "bg-white" : "bg-[#F7F7F7]"
    const cnClass = cn("", bgColorClass, `${className}`);

    useEffect(() => {
        setIsOpen(i === expanded)
    }, [i, expanded])

    return (
        <div className={cnClass} onClick={() => setExpanded(i)}
            style={{
                background: isOpen ? "white" : "linear-gradient(90deg, rgba(255, 250, 250, 0.934) 0%, rgba(247, 246, 246, 0.934) 100%)",
            }}
        >
            <motion.div
                variants={{
                    open: { paddingTop: "4.735rem", paddingBottom: '1.5rem' },
                    collapsed: { paddingTop: "0", paddingBottom: '0'}
                }}
                animate={isOpen ? "open" : "collapsed"}
                className="flex items-center min-h-[5.1625rem] cursor-pointer"
                initial={"collapsed"}
            >
                <div className="text-[#2F303B] font-semibold">
                    {header}
                </div>

            </motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "13.6875rem" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
                        className="pl-[2.7rem] pr-[2.7rem] text-[1.125rem] leading-[1.37rem]"
                    >
                        {content}
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};