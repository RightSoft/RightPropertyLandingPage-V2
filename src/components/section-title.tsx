import { cn } from "../lib/utils";

interface SectionTitleProps {
    text: string;
    className?: string;
}
export default function SectionTitle({ text, className }: SectionTitleProps) {
    const cnClass = cn("text-[#FF3F79] text-[3rem] leading-[3.6568rem] mobile:text-28 -tracking-[0.02em] font-bold mb-6 mobile:mb-2.5", className)
    return <div className={cnClass}>
        {text}
    </div>
}