import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import Slide from "./slide";

export default function SlideSection() {
    return <div className=" bg-[#EEEEF0] py-[3.75rem] text-center">
        <div className="mb-[1.875rem]  flex items-center flex-col ">
            <SectionTitle text="Beautiful & Intelligent" />
            <SectionDescription className="mb-3">
                Right Property gives you the best of both worlds:
            </SectionDescription>
            <div className="text-[2.25rem] leading-[2.7425rem] mb-3 w-[57.4375rem]">
                A <b>beautiful</b> interface <b>stunning</b> your clients <br />
                A <b>focused</b> technology<b>empowering</b> your business.
            </div>
            <div className="text-[1.125rem] leading-[1.371rem] w-[57.4375rem]">
                This dual strength allows real estate developers to <b>effortlessly</b> create compelling marketing <b>experience</b> while harnessing <b>data-driven</b> insights to optimise their <b>sales strategies.</b>
            </div>
            <br />
        </div>
        <div className="section">
            <Slide />

        </div>
    </div>
}