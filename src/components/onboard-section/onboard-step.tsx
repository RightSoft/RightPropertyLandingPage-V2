import { motion } from "framer-motion";
import React from "react";

interface OnboardStepProps {
    index: number;
    title: React.ReactNode;
    description: React.ReactNode;
    icon: React.ReactNode
}
export default function OnboardStep({  title, description, icon }: OnboardStepProps) {
    return <motion.div
        initial={{ opacity: 0}}
        className="onboard-step text-center w-[23.4375rem] mobile:w-[20.4375rem] flex flex-col  items-center">
        <div className="h-[7.9375rem] mobile:h-[auto] mobile:mb-[1.125rem]">
            <div className="text-[#14141A] mb-[0.6875rem] mobile:mb-[1.125rem]">
                <span className="text-[1.5rem] leading-[1.82875rem] mobile:text-18">{title}</span>
            </div>
            <div className="text-[1rem]  leading-[1.21875rem] mobile:text-12 font-light text-[#282936]">
                {description}
            </div>
        </div>

        {icon}
    </motion.div>
}