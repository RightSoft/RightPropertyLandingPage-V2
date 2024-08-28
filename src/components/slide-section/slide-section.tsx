import SectionTitle from "../section-title";
import BeautifulIntelligentAnimatigCaption from "./beautiful-intelligent-animating-caption";
import Slide from "./slide";

export default function SlideSection() {
    return <div className=" mobile:bg-inherit pt-[3.75rem] mobile:pt-[1.875rem] mobile:pb-[1.08rem] text-center">
        <div className="mobile:mb-[0.8125rem]  flex items-center flex-col ">
            <SectionTitle text="Beautiful & Intelligent" />
            <BeautifulIntelligentAnimatigCaption />
            <div className="mobile:hidden text-36  w-[57.4375rem] ">
                A <b>beautiful</b> interface <b>stunning</b> your clients
                <span className="">
                    <br />
                    A <b>focused</b> technology <b>empowering</b> your business.
                </span>
            </div>
        </div>
        <div className="section pl-[123px] py-[6.25rem]">
            <Slide />

        </div>
    </div>
}