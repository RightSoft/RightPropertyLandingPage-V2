import {  useEffect, useState } from "react"
import Accordion from "../accordion"
import FeaturesImages from "./features-images"
import { cn } from "../../lib/utils"
import { featureItems } from "./feature-data"

export default function Features({ className }: { className?: string }) {
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const id = setTimeout(() => {
            let tmpIndex = active;
            tmpIndex++;
            if (tmpIndex >= (accordionItems.length)) {
                tmpIndex = 0;
            }
            setActive(tmpIndex);
        }, 10000);
        return () => {
            clearTimeout(id)
        }
    }, [active])

    const accordionItems = [
        {
            className: "items-center rounded-tl-[20px] rounded-bl-[4px] ",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    {featureItems[0].icon}
                </div>
                <div>
                    {featureItems[0].title}
                </div>

            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[0].description}          </div>
        },
        {
            className: "items-center rounded-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    {featureItems[1].icon}
                </div>
                <div>
                    {featureItems[1].title}
                </div>
            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[1].description}
            </div>
        },
        {
            className: "items-center rounded-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    {featureItems[2].icon}
                </div>
                <div>
                    {featureItems[2].title}
                </div>

            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                    {featureItems[2].description}

                </div>            </div>
        },
        {
            className: "items-center rounded-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    {featureItems[3].icon}
                </div>
                <div>
                    {featureItems[3].title}
                </div>

            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[3].description}
            </div>
        },
        {
            className: "items-center rounded-bl-[20px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    {featureItems[4].icon}
                </div>
                <div>
                    {featureItems[4].title}
                </div>
            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                {featureItems[4].description}
            </div>
        }
    ]
    const cnClass = cn("flex w-full rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px]", className)
    return <div className={cnClass} style={{
        boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)"
    }}>
        <div className="flex-[1_1_0%] font-medium text-[1.125rem] leading-[1.82875rem]">
            <div className="flex flex-col gap-[0.125rem]">
                {accordionItems.map((item, i) => {
                    return <Accordion className={item.className} key={i} i={i} expanded={active} setExpanded={(i) => { setActive(i) }} header={item.header} content={item.content} />
                })}
            </div>
        </div>
        <div className="flex-[2.46401_1_0%] bg-[#EFE8E4] overflow-hidden rounded-tr-[20px] rounded-br-[20px]">
            <FeaturesImages activeIndex={active} />
        </div>
    </div>
}

