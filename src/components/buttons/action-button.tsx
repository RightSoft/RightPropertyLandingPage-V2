import { cn } from "../../lib/utils";

interface ActionButtonProps {
    text: string;
    className: string;
    onClick: (e:any) => void;
}
export default function ActionButton({ text, className, onClick }: ActionButtonProps) {
    const cnClass = cn("active:scale-95 flex items-center justify-center w-[14.9375rem] h-[3.3125rem] rounded-[8px] bg-[#5EC6D3] font-bold text-buttonWhite text-[1.5rem] leading-[1.21875rem]",className)
    return <button onClick={onClick} className={cnClass}>
        {text}
    </button>
}