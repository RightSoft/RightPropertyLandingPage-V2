import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function FaqItem({ question, answer }: { question: string | React.ReactNode, answer: React.ReactNode }) {

    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const horizontalRef = useRef<SVGPathElement>(null);
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
            gsap.to(horizontalRef.current, {
                opacity: 0,
                duration: 0.5,
            });
        } else {
            gsap.to(answerRef.current, {
                height: 0,
                duration: 0.5,
            });
            gsap.to(iconRef.current, {
                rotate: 90,
            });
            gsap.to(horizontalRef.current, {
                opacity: 1,
                duration: 0.5,
            });
        }
    }, [isOpen])


    return <div onClick={handleClick} className="text-[#E2E2E2] p-[2.5rem] lg:p-6 cursor-pointer  flex flex-col " style={{ background: 'rgba(187, 135, 255, 0.1)' }}>

        <div className="flex items-center gap-[5.625rem] lg:gap-6 justify-between">
            <h3 className="font-geist text-24 lg:text-base font-medium leading-[140%] -tracking-[0.02em]">{question}</h3>
            <div className="shrink-0 w-[64px] h-[64px] lg:w-[2.5rem] lg:h-[2.5rem] rounded-full border border-[#FF947E] flex items-center justify-center">
                <svg ref={iconRef} className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0 12.0039L24 12.0039" stroke="#EF716E" stroke-width="2" />
                    <path ref={horizontalRef} d="M12.0078 23.998L12.0078 -0.00195441" stroke="#EF716E" stroke-width="2" />
                </svg>
            </div>
        </div>
        <div ref={answerRef} className="h-0 mt-[0.75rem] overflow-hidden font-geist text-18 lg:text-base font-normal leading-[140%] tracking-[0%]">{answer}</div>


    </div>
}