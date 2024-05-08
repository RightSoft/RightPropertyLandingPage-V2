import { ChangeEvent } from "react";

export default function TextInput({ label, onChange, value }: { label: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void, value: string }) {
    return (
        <div className="w-full text-[1rem] leading-[1.21875rem] text-[#40424E]">
            <div className="mb-[0.375rem] font-bold ">{label}</div>
            <input
                onChange={onChange}
                value={value}
                className="bg-[#F7F7F7] rounded-[20px] mobile:rounded-[10px] w-full h-[3.75rem] mobile:h-[2.8125rem] pl-4 focus-visible:outline-none"
                style={{
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)'
                }}
                type="text"
            />
        </div>

    )
}