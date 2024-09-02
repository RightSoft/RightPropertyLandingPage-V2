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
        className="relative z-10 pt-[3.75rem] pb-[3.75rem] mobile:pt-0 mobile:pb-[3.75rem] mobile:h-auto h-[49.81rem] flex items-center"
        style={{ background: `linear-gradient(94.44deg, rgba(255, 255, 255, 0.8) 5.42%, rgba(255, 255, 255, 0) 54.55%), url(${sectionBgSrc})`, backgroundSize: 'cover' }}
    >
    
        <div className="section flex items-center justify-center gap-[12.5rem] mobile:gap-0 w-full pl-[6.9375rem] pr-[6.5718rem] mobile:flex-col mobile:items-center mobile:pl-0 mobile:pr-0" style={{ margin: "auto" }}>
            <div>
                <h3 className="mobile:hidden mb-6 text-[#5EC6D3] font-extrabold tracking-[0.17em] text-[4.375rem] leading-[5.33rem]" >
                    Book<span className="text-[#FFA657]">a</span>demo.
                </h3>
                <h3 className="text-center mobile:block hidden mb-3 text-[#5EC6D3] font-extrabold tracking-[0.3em] text-22 " >
                    book<span className="text-[#FFA657]">a</span>demo
                </h3>
                <SectionDescription variant="md" className="text-[#56586C] text-left mb-[1.875rem] w-[42.06rem] mobile:w-[20.3125rem] mobile:mb-[2rem] mobile:text-center">
                    Ready to explore the future of property marketing?<br />Schedule a demo today and discover how Right Property can transform your business!
                </SectionDescription>
            </div>

            <ContactForm />
        </div>
    </div>
}