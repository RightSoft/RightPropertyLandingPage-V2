import { motion } from "framer-motion";
import React from "react";

interface OnboardStepProps {
    index: number;
    title: React.ReactNode;
    description: string;
    icon: React.ReactNode
}
export default function OnboardStep({ index, title, description, icon }: OnboardStepProps) {
    return <motion.div
        initial={{ opacity: 0}}
        className="onboard-step text-center w-[13.75rem] flex flex-col gap-[2.5rem] items-center">
        <div className="h-[12.5rem] ">
            <div className="text-[#14141A] mb-[0.6875rem]">
                <span className="font-bold text-[2.25rem] leading-[2.7425rem]">{`${index}.`}</span> <br />
                <span className="text-[1.5rem] leading-[1.82875rem]">{title}</span>
            </div>
            <div className="text-[1rem] leading-[1.21875rem]">
                {description}
            </div>
        </div>

        {icon}
    </motion.div>
}