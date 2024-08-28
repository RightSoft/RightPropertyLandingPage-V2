import { cn } from "../lib/utils";

interface SectionTitleProps {
    text: string | React.ReactNode;
    className?: string;
    variant?: "sm" | "md";
}
export default function SectionTitle({ text, className, variant = "sm" }: SectionTitleProps) {

    const variants = {
        sm: "mobile:text-20",
        md: "mobile:text-22"
    }
    const cnClass = cn("text-[#FFA657] text-[2.8125rem] leading-[3.42875rem] mobile:text-20 mobile:tracking-[0.14em] tracking-[0.30em] font-extrabold mb-6 mobile:mb-2.5", variants[variant], className)

    return <div className={cnClass}>
        {text}
    </div>
}