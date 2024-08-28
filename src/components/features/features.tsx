import Accordion from "../accordion"
import FeaturesImages from "./features-images"
import { cn } from "../../lib/utils"
import { featureItems } from "./feature-data"
import useLoopToN from "../../hooks/use-loop-to-n"

export default function Features({ className }: { className?: string }) {
    const wait = 10000000;
    const accordionItems = [
        {
            className: "items-center ",
            header: <div className="relative pl-[2.7rem] " >
                <div>
                    {featureItems[0].title}
                </div>

            </div>,
            content: <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[0].description}          </div>
        },
        {
            className: "items-center",
            header: <div className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[1].title}
                </div>
            </div>,
            content: <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[1].description}
            </div>
        },
        {
            className: "items-center ",
            header: <div className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[2].title}
                </div>

            </div>,
            content: <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                    {featureItems[2].description}

                </div>            </div>
        },
        {
            className: "items-center ",
            header: <div className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[3].title}
                </div>

            </div>,
            content: <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[3].description}
            </div>
        },
        {
            className: "items-center rounded-bl-[20px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]",
            header: <div className="relative pl-[2.7rem]" >

                <div>
                    {featureItems[4].title}
                </div>
            </div>,
            content: <div className=" font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[4].description}
            </div>
        }
    ]
    const [active, setManualIndex] = useLoopToN(accordionItems.length - 1, wait);
    const cnClass = cn("flex h-[42.875rem] w-full rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px]", className)
    return <div className={cnClass} style={{
        boxShadow: "0px 4px 5px 1px rgba(9, 75, 122, 0.15)",
    }}>
        <div className="flex-[1_1_0%] font-medium text-[1.125rem] leading-[1.82875rem]">
            <div className="flex flex-col gap-[0.125rem]">
                {accordionItems.map((item, i) => {
                    return <Accordion className={item.className}  i={i} expanded={active} setExpanded={(i) => { setManualIndex(i) }} header={item.header} content={item.content} />
                })}
            </div>
        </div>
        <div className="flex-[2.47_1_0%] bg-white overflow-hidden rounded-tr-[20px] rounded-br-[20px]">
            <FeaturesImages activeIndex={active} />
        </div>
    </div>
}

