import { cn } from "../../lib/utils";

interface ActionButtonProps {
    text: string;
    className: string;
    onClick: () => void;
}
export default function ActionButton({ text, className, onClick }: ActionButtonProps) {
    const cnClass = cn("flex items-center justify-center w-[10.75rem] h-[2.75rem] bg-actionOrange text-buttonWhite text-[1rem] leading-[1.21875rem]",className)
    return <button onClick={onClick} className={cnClass}>
        {text}
    </button>
}