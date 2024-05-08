import { cn } from "../lib/utils";

interface SectionDescriptionProps {
    children:  React.ReactNode;
    variant?: "sm" | "md";
    className?: string;
}
export default function SectionDescription({ children, variant="sm", className }: SectionDescriptionProps) {
    const variants = {
        sm: "text-[1.125rem] leading-[1.371rem] mobile:text-12",
        md: "text-[1.5rem] leading-[1.82875rem] mobile:text-12  mb-6"
    }
    const cnClass = cn("text-center",variants[variant], className)
    return <div className={cnClass}>
        {children}
    </div>
}