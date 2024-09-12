import Accordion from "../accordion"
import FeaturesImages from "./features-images"
import { cn } from "../../lib/utils"
import { featureItems } from "./feature-data"
import useLoopToN from "../../hooks/use-loop-to-n"
import { m } from "framer-motion"

export default function Features({ className }: { className?: string }) {
    const wait = 10000;
    const accordionItems = [
        {
            id: 0,
            className: "items-center ",
            header: <m.div
                key={"0000"}

                className="relative pl-[2.7rem] " >
                <div>
                    {featureItems[0].title}
                </div>

            </m.div>,
            content: <m.div
                key={"0000"}

                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[0].description}          </m.div>
        },
        {
            id: 1,
            className: "items-center",
            header: <m.div
                className="relative pl-[2.7rem]" >
                <div>
                    {featureItems[1].title}
                </div>
            </m.div>,
            content: <m.div

                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[1].description}
            </m.div>
        },
        {
            id: 2,
            className: "items-center ",
            header: <m.div

                className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[2].title}
                </div>

            </m.div>,
            content: <m.div
                key={"2001"}

                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                    {featureItems[2].description}

                </div>            </m.div>
        },
        {
            id: 3,
            className: "items-center ",
            header: <m.div
                key={"3000"}

                className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[3].title}
                </div>

            </m.div>,
            content: <m.div
                key={"3001"}
                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[3].description}
            </m.div>
        },
        {
            id: 4,
            className: "items-center rounded-bl-[20px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]",
            header: <m.div

                className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[4].title}
                </div>
            </m.div>,
            content: <m.div
                key={"4001"}

                className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[4].description}
            </m.div>
        }
    ]
    const [active, setManualIndex] = useLoopToN(accordionItems.length - 1, wait);
    const cnClass = cn("flex h-[42.875rem] w-full rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden", className)
    return <div className={cnClass} 
    
    style={{
        boxShadow: "0px 4px 5px 1px rgba(9, 75, 122, 0.15)",
    }}>
        <div className="flex-[1_1_0%] font-medium text-[1.125rem] leading-[1.82875rem]">
            <div className="flex flex-col gap-[0.125rem]">
                {accordionItems.map((item) => {
                    return <Accordion key={item.id} activeId={active} className={item.className} i={item.id} isExpanded={active == item.id} setExpanded={(i) => { setManualIndex(i) }} header={item.header} content={item.content} />
                })}
            </div>
        </div>
        <div className="flex-[2.47_1_0%] bg-white overflow-hidden rounded-tr-[20px] rounded-br-[20px]">
            <FeaturesImages activeIndex={active} />
        </div>
    </div>
}

