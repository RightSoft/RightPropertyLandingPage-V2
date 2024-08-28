import SectionTitle from "../section-title";
import Slide from "./slide";

export default function SlideSection() {
    return <div className=" mobile:bg-inherit pt-[3.75rem] mobile:pt-[1.875rem] mobile:pb-[1.08rem] text-center">
        <div className="mobile:mb-[0.8125rem]  flex items-center flex-col ">
            <SectionTitle text={<div>Beautiful <span className="mobile:text-rpBlue">&</span> Intelligent</div>} />
            {/* <BeautifulIntelligentAnimatigCaption /> */}
            <div className=" text-36 mobile:text-12 mobile:w-full  w-[57.4375rem] ">
                A <b>beautiful</b> interface <b>stunning</b> your clients
                <span className="">
                    <br />
                    A <b>focused</b> technology <b>empowering</b> your business.
                </span>
            </div>
        </div>
        <div className="section pl-[7.68rem] mobile:pl-[1.1875rem] py-[6.25rem] mobile:py-8">
            <Slide />

        </div>
    </div>
}