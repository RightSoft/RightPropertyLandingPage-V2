import { useState } from "react"
import Accordion from "../accordion"
import CustomizableIcon from "../icons/customizable-icon"
import DeviceIntegrationIcon from "../icons/device-integration-icon"
import LeadManagementIcon from "../icons/lead-management-icon"
import OneClickGenerationIcon from "../icons/one-click-generation-icon"
import SetupIcon from "../icons/setup-icon"
import FeaturesImages from "./features-images"

export default function Features() {
    const [active, setActive] = useState<number>(0);
    const accordionItems = [
        {
            className: "items-center rounded-tl-[20px] rounded-bl-[4px] ",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    <DeviceIntegrationIcon />
                </div>
                <div>
                    Complete Device Integration
                </div>

            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                Deliver consistent content across all digital touchpoints, from large wall screens to mobile devices.            </div>
        },
        {
            className: "items-center rounded-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    <SetupIcon />
                </div>
                <div>
                    Fast and Easy Setup
                </div>
            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                Enhance your marketing suite within 2 days with our intuitive admin portal. Say goodbye to long, costly bespoke development processes.
            </div>
        },
        {
            className: "items-center rounded-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    <CustomizableIcon />
                </div>
                <div>
                    Fully Customizable
                </div>

            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                    Enhance your marketing suite within 2 days with our intuitive admin portal. Say goodbye to long, costly bespoke development processes.
                </div>            </div>
        },
        {
            className: "items-center rounded-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    <OneClickGenerationIcon />
                </div>
                <div>
                    One Click Website Generation
                </div>

            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                Launch a fully optimized, SEO-ready website for your development with no extra setup.
            </div>
        },
        {
            className: "items-center rounded-bl-[20px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]",
            header: <div className="relative pl-[7.5rem]" >
                <div className="absolute  left-[1.25rem] top-1/2 -translate-y-1/2">
                    <LeadManagementIcon />
                </div>
                <div>
                    Lead Management & Analytics
                </div>
            </div>,
            content: <div className="text-[1rem] font-light leading-[1.21875rem] text-accordionItemDescColor">
                Gain valuable insights with our comprehensive analytics tools designed to enhance your sales strategy. An easy-to-use, focused CRM takes place to track your prospects and communicate throughout your sales and marketing teams.
            </div>
        }
    ]
    return <div className="flex w-full rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px]" style={{
        boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)"
    }}>
        <div className="flex-[3.3_1_0%] font-medium text-[1.125rem] leading-[1.82875rem]">
            <div className="flex flex-col gap-[0.125rem]">
                {accordionItems.map((item, i) => {
                    return <Accordion className={item.className} key={i} i={i} expanded={active} setExpanded={(i) => { setActive(i) }} header={item.header} content={item.content} />
                })}
            </div>
        </div>
        <div className="flex-[6.7_1_0%] bg-[#EFE8E4] overflow-hidden rounded-tr-[20px] rounded-br-[20px]">
            <FeaturesImages activeIndex={active} />
        </div>
    </div>
}