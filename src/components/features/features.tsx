import Accordion from "../accordion"
import FeaturesImages from "./features-images"
import { cn } from "../../lib/utils"
import { featureItems } from "./feature-data"
import useLoopToN from "../../hooks/use-loop-to-n"
import { AnimatePresence, motion } from "framer-motion"

export default function Features({ className }: { className?: string }) {
    const wait = 10000;
    const duration = 0.6;
    const initialAnimState = { initial: { opacity: 0.5,y:30, transition: { duration,ease:"easeOut" } } };
    const animState = { animate: { opacity: 1,y:0, transition: { duration,ease:"easeOut" } } };
    const exitAnimState = { exit: { opacity: 0.5,y:30, transition: { duration,ease:"easeOut" } } };
    const framerStates = { initialAnimState, animState, exitAnimState }
    const accordionItems = [
        {
            id: 0,
            className: "items-center ",
            header: <motion.div
                key={"0000"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className="relative pl-[2.7rem] " >
                <div>
                    {featureItems[0].title}
                </div>

            </motion.div>,
            content: <motion.div
                key={"0000"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[0].description}          </motion.div>
        },
        {
            id: 1,
            className: "items-center",
            header: <motion.div
                key={"1000"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className="relative pl-[2.7rem]" >
                <div>
                    {featureItems[1].title}
                </div>
            </motion.div>,
            content: <motion.div
                key={"1001"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[1].description}
            </motion.div>
        },
        {
            id: 2,
            className: "items-center ",
            header: <motion.div
                key={"2000"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[2].title}
                </div>

            </motion.div>,
            content: <motion.div
                key={"2001"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                    {featureItems[2].description}

                </div>            </motion.div>
        },
        {
            id: 3,
            className: "items-center ",
            header: <motion.div
                key={"3000"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[3].title}
                </div>

            </motion.div>,
            content: <motion.div
                key={"3001"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[3].description}
            </motion.div>
        },
        {
            id: 4,
            className: "items-center rounded-bl-[20px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]",
            header: <motion.div
                key={"4000"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[4].title}
                </div>
            </motion.div>,
            content: <motion.div
                key={"4001"}
                {...initialAnimState}
                {...animState}
                {...framerStates}
                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[4].description}
            </motion.div>
        }
    ]
    const [active, setManualIndex] = useLoopToN(accordionItems.length - 1, wait);
    const cnClass = cn("flex h-[42.875rem] w-full rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px]", className)
    const activeItem = accordionItems[active];
    return <div className={cnClass} style={{
        boxShadow: "0px 4px 5px 1px rgba(9, 75, 122, 0.15)",
    }}>
        <div className="flex-[1_1_0%] font-medium text-[1.125rem] leading-[1.82875rem]">
            <div className="flex flex-col gap-[0.125rem]">
                <Accordion className={activeItem.className} activeId={999} i={active} isExpanded={true} setExpanded={(i) => { setManualIndex(i) }} header={activeItem.header} content={activeItem.content} />
                <AnimatePresence mode="popLayout">
                    {accordionItems.map((item) => {
                        return <Accordion key={item.id} activeId={active} className={item.className} i={item.id} isExpanded={false} setExpanded={(i) => { setManualIndex(i) }} header={item.header} content={item.content} />
                    })}
                </AnimatePresence>
            </div>
        </div>
        <div className="flex-[2.47_1_0%] bg-white overflow-hidden rounded-tr-[20px] rounded-br-[20px]">
            <FeaturesImages activeIndex={active} />
        </div>
    </div>
}

