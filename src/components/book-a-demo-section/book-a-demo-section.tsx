import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import ContactForm from "./contact-form";
import { useRef } from "react";

export default function BookADemoSection() {
    const ref = useRef(null)
    const isInView = useInView(ref,{amount:"all"})
    useSectionView({ inView: isInView, key: 'book-a-demo' })

    return <div
    ref={ref}
        id="book-a-demo"
    className="bg-[#EEEEF0] pt-[3.75rem] pb-[3.75rem] mobile:pt-[1.25rem] mobile:pb-[1.875rem]">
        <div className="section flex flex-col items-center">
            <SectionTitle text={"Book a Demo"} className="mb-6" />
            <SectionDescription variant="md" className="mb-[1.875rem] w-[45.78375rem] mobile:w-[15.625rem] mobile:mb-2.5">
                <b>Ready</b> to explore the <b>future</b> of property marketing? Schedule a demo today and discover how <b>Right Property</b> can <b>transform</b> your business!
                <span className="hidden mobile:block"><br/></span>
            </SectionDescription>
            <ContactForm />
        </div>
    </div>
}