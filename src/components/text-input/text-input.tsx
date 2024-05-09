import { ChangeEvent } from "react";

export default function TextInput({ label, onChange, value }: { label: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void, value: string }) {
    return (
        <div className="w-full text-[1rem] leading-[1.21875rem] text-[#40424E]">
            <div className="mb-[0.375rem] font-semibold mobile:text-12 ">{label}</div>
            <input
                onChange={onChange}
                value={value}
                className="mobile:text-12 bg-[#F7F7F7] rounded-[20px] mobile:rounded-[10px] w-full h-[3.75rem] mobile:h-10 pl-4 focus-visible:outline-none"
                style={{
                    boxShadow: ' 0px 0px 5px 0px rgba(131, 134, 157, 0.12)'

                }}
                type="text"
            />
        </div>

    )
}