import { useInView } from "framer-motion";
import { useRef } from "react";
import useSectionView from "../../hooks/use-section-view";
import ContactForm from "../book-a-demo-section/contact-form";
import SectionDescription from "../section-description";

export default function RegisterNowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });
  useSectionView({ inView: isInView, key: "book-a-demo" });

  return (
    <div
      ref={ref}
      id="book-a-demo"
      className="relative z-10 pt-[3.75rem] pb-[3.75rem] mobile:pt-[1rem] mobile:pb-[3.75rem] mobile:h-auto h-[49.81rem] flex items-center bg-[#f5f7f8]"
     
    >
      <div
        className="section flex items-center justify-center gap-[12.5rem] mobile:gap-0 w-full pl-[6.9375rem] pr-[6.5718rem] mobile:flex-col mobile:items-center mobile:pl-0 mobile:pr-0"
        style={{ margin: "auto" }}
      >
        <div>
          <h3 className="mobile:hidden mb-6 text-[#5EC6D3] font-extrabold tracking-[0.17em] text-[4.375rem] leading-[5.33rem]">
            Register<span className="text-[#FFA657]"> now!</span>
          </h3>
          <h3 className="text-center mobile:block hidden mb-3 text-[#5EC6D3] font-extrabold tracking-[0.3em] text-22 ">
            Register<span className="text-[#FFA657]"> now!</span>
          </h3>
          <SectionDescription
            variant="md"
            className="text-[#56586C] text-left mb-[1.875rem] w-[42.06rem] mobile:w-[20.3125rem] mobile:mb-[2rem] mobile:text-center"
          >
           Fill in the form to book your demo and unlock your exclusive Web Summit offer today!
          </SectionDescription>
        </div>

        <ContactForm inputClassName="border-[0px]" />
      </div>
    </div>
  );
}
