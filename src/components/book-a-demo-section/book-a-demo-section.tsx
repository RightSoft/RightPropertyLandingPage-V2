import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";
import SectionDescription from "../section-description";
import sectionBgSrc from "../../assets/images_v2/features_bg.webp";
import ContactForm from "./contact-form";
import { useRef } from "react";

export default function BookADemoSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: "all" })
    useSectionView({ inView: isInView, key: 'book-a-demo' })

    return <div
        ref={ref}
        id="book-a-demo"
        className=" pt-[3.75rem] pb-[3.75rem] mobile:pt-[1.25rem] mobile:pb-[1.875rem] h-[49.81rem] flex items-center"
        style={{ background: `linear-gradient(94.44deg, rgba(255, 255, 255, 0.8) 5.42%, rgba(255, 255, 255, 0) 54.55%), url(${sectionBgSrc})`, backgroundSize: 'cover' }}
    >

        <div className="section flex items-center justify-between w-full pl-[111px] pr-[105.5px]" style={{margin:"auto"}}>
            <div>
                <h3 className="mb-6 text-[#5EC6D3] font-extrabold tracking-[0.17em] text-[4.375rem] leading-[5.33rem]" >
                    Book<span className="text-[#FFA657]">a</span>demo.
                </h3>
                <SectionDescription variant="md" className="text-left mb-[1.875rem] w-[42.06rem] mobile:w-[15.625rem] mobile:mb-5">
                    Ready to explore the future of property marketing?<br />Schedule a demo today and discover how Right Property can transform your business!
                    <span className="hidden mobile:block"><br /></span>
                </SectionDescription>
            </div>

            <ContactForm />
        </div>
    </div>
}