import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

interface AccordionProps {
    i: number;
    activeId: number;
    isExpanded: boolean;
    setExpanded: (i: number) => void;
    header: React.ReactNode
    content: React.ReactNode
    className?: string
}
export default function Accordion({ i, activeId, isExpanded, setExpanded, header, content, className }: AccordionProps) {

    const [isOpen, setIsOpen] = useState(isExpanded);
    const bgColorClass = isOpen ? "bg-white" : "bg-[#F7F7F7]"
    const cnClass = cn("overflow-hidden", bgColorClass, `${className}`);
    const transition = { duration: 0.4, delay: 0.25, ease: "easeOut" }
    useEffect(() => {
        setIsOpen(isExpanded)
    }, [isExpanded])
    const headerText = isExpanded ? "text-[#F08E37]" : "text-[#2F303B]";
    return (
        <motion.div
            variants={{
                open: { height: "22.1875rem", transition: transition },
                collapsed: { height: "auto", transition: transition }
            }}
            initial={'collapsed'}
            animate={isOpen ? "open" : "collapsed"}
            className={cnClass} onClick={() => setExpanded(i)}
            style={{
                background: isOpen ? "white" : "linear-gradient(90deg, rgba(255, 250, 250, 0.934) 0%, rgba(247, 246, 246, 0.934) 100%)",
            }}
        >
            <motion.div
            variants={{
                open: { y : "20%", transition: {...transition,duration:.4,delay:0.25} },
                collapsed: {y : 0, transition: {...transition,duration:.4,delay:0.25} }
            }}
            className="flex flex-col"
            
            >
                <motion.div
                    variants={{
                        open: {},
                        collapsed: { paddingTop: "0", paddingBottom: '0' }
                    }}
                    animate={isOpen ? "open" : "collapsed"}
                    className="flex items-center min-h-[5.1625rem] cursor-pointer"
                    initial={"collapsed"}
                >
                    <div
                        className={`${headerText} font-semibold`}>
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
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={transition}
                            className="pl-[2.7rem] pr-[2.7rem] text-[1.125rem] leading-[1.37rem]"
                        >
                            {content}
                        </motion.section>
                    )}
                </AnimatePresence>
            </motion.div>

        </motion.div>
    );
};