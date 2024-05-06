import { useState } from "react"
import Accordion from "../accordion"
import CustomizableIcon from "../icons/customizable-icon"
import DeviceIntegrationIcon from "../icons/device-integration-icon"
import LeadManagementIcon from "../icons/lead-management-icon"
import OneClickGenerationIcon from "../icons/one-click-generation-icon"
import SetupIcon from "../icons/setup-icon"

export default function Features() {
    const [active, setActive] = useState<number>(0);
    const accordionItems = [
        {
            header: <div className="flex items-center pl-[7.1025rem] h-[7.5rem] relative bg-accordionItemBg" style={{borderRadius:"20px 0px 0px 4px"}} >
                <div className="absolute left-[1.25rem]">
                    <SetupIcon />
                </div>
                <div>
                    Fast and Easy Setup
                </div>

            </div>,
            content: <div className="text-[1rem] leading-[1.21875rem] text-accordionItemDescColor">
                Enhance your marketing suite within 2 days with our intuitive admin portal. Say goodbye to long, costly bespoke development processes.
            </div>
        },
        {
            header: <div className="flex items-center pl-[7.1025rem] h-[7.5rem] relative bg-accordionItemBg" >
                <div className="absolute left-[1.25rem]">
                    <CustomizableIcon />
                </div>
                <div>
                    Fully Customizable
                </div>

            </div>,
            content: <div className="text-[1rem] leading-[1.21875rem] text-accordionItemDescColor">
                <div className="text-[1rem] leading-[1.21875rem] text-accordionItemDescColor">
                    Enhance your marketing suite within 2 days with our intuitive admin portal. Say goodbye to long, costly bespoke development processes.
                </div>            </div>
        },
        {
            header: <div className="flex items-center pl-[7.1025rem] h-[7.5rem] relative bg-accordionItemBg" >
                <div className="absolute left-[1.25rem]">
                    <LeadManagementIcon />
                </div>
                <div>
                    Lead Management & Analytics
                </div>

            </div>,
            content: <div className="text-[1rem] leading-[1.21875rem] text-accordionItemDescColor">
                Gain valuable insights with our comprehensive analytics tools designed to enhance your sales strategy.We provide a set of tools to track the progress of your sales actions. An easy-to-use, focused CRM takes place to track your prospects and communicate throughout your sales and marketing teams
            </div>
        },
        {
            header: <div className="flex items-center pl-[7.1025rem] h-[7.5rem] relative bg-accordionItemBg" >
                <div className="absolute left-[1.25rem]">
                    <OneClickGenerationIcon />
                </div>
                <div>
                    One Click Website Generation
                </div>

            </div>,
            content: <div className="text-[1rem] leading-[1.21875rem] text-accordionItemDescColor">
                Launch a fully optimized, SEO-ready website for your development with no extra setup.
            </div>
        },
        {
            header: <div className="flex items-center pl-[7.1025rem] h-[7.5rem] relative bg-accordionItemBg" style={{borderRadius:"4px 4px 4px 20px"}} >
                <div className="absolute left-[1.25rem]">
                    <DeviceIntegrationIcon />
                </div>
                <div>
                    Complete Device Integration
                </div>

            </div>,
            content: <div className="text-[1rem] leading-[1.21875rem] text-accordionItemDescColor">
                Deliver consistent content across all digital touchpoints, from large wall screens to mobile devices.            </div>
        }
    ]
    return <div className="flex min-h-[46.125rem] w-full">
        <div className="flex-[3.3_1_0%] font-medium text-[1.125rem] leading-[1.82875rem]">
            {accordionItems.map((item, i) => {
                return <Accordion key={i} i={i} expanded={active} setExpanded={(i) => { setActive(i) }} header={item.header} content={item.content} />
            })}
        </div>
        <div className="flex-[6.7_1_0%] bg-[#CAF5E5]">

        </div>
    </div>
}