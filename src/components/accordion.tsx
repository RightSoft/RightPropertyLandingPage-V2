import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps{
    i: number;
    expanded: number;
    setExpanded: (i: number) => void;
    header : React.ReactNode
    content : React.ReactNode
}
export default function Accordion({ i, expanded, setExpanded,header,content }: AccordionProps) {
    const isOpen = i === expanded;

    return (
        <>
            <motion.div
                initial={false}
                onClick={() => setExpanded(i)}
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
                    >
                        {content}
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};