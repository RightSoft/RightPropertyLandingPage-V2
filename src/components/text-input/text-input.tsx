import { ChangeEvent } from "react";
import { cn } from "../../lib/utils";

export default function TextInput({ label, onChange, value,placeholder,className }: { className?:string,label: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void, value: string,placeholder?:string }) {
    
    const cnClass = cn("mobile:text-12 rounded-[12px] mobile:rounded-[10px] w-full h-[3.75rem] mobile:h-[3.25rem] pl-4 focus-visible:outline-none border-[1px] border-[#686B83]", className);
    return (
        <div className={"w-full text-[1rem] leading-[1.21875rem] text-[#686B83]"}>
            <div className="mb-[0.375rem] font-semibold mobile:text-12 ">{label}</div>
            <input
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className={cnClass}
      
                type="text"
            />
        </div>

    )
}