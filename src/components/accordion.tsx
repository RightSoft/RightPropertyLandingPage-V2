import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

interface AccordionProps {
    i: number;
    expanded: number;
    setExpanded: (i: number) => void;
    header: React.ReactNode
    content: React.ReactNode
    className?: string
}
export default function Accordion({ i, expanded, setExpanded, header, content, className }: AccordionProps) {
    const isOpen = i === expanded;
    const bgColorClass = isOpen ? "bg-white" :  "bg-[#F7F7F7]"
    const cnClass = cn("",bgColorClass,`${className}`)
    return (
        <div className={cnClass} onClick={() => setExpanded(i)}>
            <motion.div
                className="flex items-center min-h-[7.5rem] "
                initial={false}
            >
                {header}
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
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="-translate-y-5 pl-[1.25rem] pr-[1.125rem]"
                    >
                        {content}
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};