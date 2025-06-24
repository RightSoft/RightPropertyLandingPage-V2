import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function FaqItem({ question, answer }: { question: string | React.ReactNode, answer: React.ReactNode }) {

    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (isOpen) {
            gsap.to(answerRef.current, {
                height: "auto",
                duration: 0.5,
            });
            gsap.to(iconRef.current, {
                rotate: 0,
                duration: 0.5,
            });
        } else {
            gsap.to(answerRef.current, {
                height: 0,
                duration: 0.5,
            });
            gsap.to(iconRef.current, {
                rotate: -90,
            });
        }
    }, [isOpen])
    return <div onClick={handleClick} className="cursor-pointer bg-[#F4F4F4] rounded-[24px] p-[1.5rem] lg:p-4 flex gap-[0.625rem]">
        <svg ref={iconRef} className="flex-shrink-0" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="17" r="10" stroke="#1F3147" stroke-width="1.5" />
            <path d="M12 13L12 21M12 21L15 18M12 21L9 18" stroke="#1F3147" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div>
            <h3 className="font-geist text-24 lg:text-18 font-medium leading-[140%] tracking-[0%]">{question}</h3>
            {/* {isOpen && <div className="mb-[0.75rem]"></div>} */}
            {<div ref={answerRef} className="h-0 mt-[0.75rem] overflow-hidden font-geist text-18 lg:text-base font-normal leading-[140%] tracking-[0%]">{answer}</div>}
        </div>

    </div>
}