import { cn } from "../lib/utils";

interface SectionTitleProps {
    text: string| React.ReactNode;
    className?: string;
}
export default function SectionTitle({ text, className }: SectionTitleProps) {
    const cnClass = cn("text-[#FFA657] text-[2.8125rem] leading-[3.42875rem] mobile:text-28 tracking-[0.30em] font-extrabold mb-6 mobile:mb-2.5 uppercase", className)
    return <div className={cnClass}>
        {text}
    </div>
}