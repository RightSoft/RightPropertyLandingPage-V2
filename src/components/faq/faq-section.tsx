import { useState } from "react";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import FaqImage from "./faq-image";
import FAQItem from "./faq-item";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    return <div className="section">
        <div className="flex justify-center px-[3.75rem] gap-[4.625rem]">
            <FaqImage />
            <div className="flex flex-col pt-[6.9375rem] w-[46.43rem]">
                <SectionTitle className="text-titleOrange mb-6 tracking-[0.05em]" text={<div>  HAVE <span className="text-rpBlue">A</span> QUESTION ? </div>}
                />
                <SectionDescription className="mb-12 text-left w-[44.56rem]" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </SectionDescription>
                <div className="flex flex-col gap-10">
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <FAQItem question={"Lorem ipsum dolor sit amet, consectetur adipiscing ? "} answer={"Lorem ipsum dolor sit amet, consectetur adipiscing "} index={index} activeIndex={activeIndex} setActiveIndex={() => setActiveIndex(index)} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
}