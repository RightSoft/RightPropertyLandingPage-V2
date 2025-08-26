import { cn } from "@/lib/utils";
import AnchorLink from "./anchor-link";

export default function BlueExploreButton({ href, className, title }: { href: string, className?: string, title: string }) {
    const cnClass = cn('w-[8.3125rem] h-[4rem]  rounded-[65px] font-geist font-semibold text-base leading-[130%] tracking-[0%] uppercase text-raisin-black  bg-[#BADEF3] lg:w-full lg:h-[3rem] lg:text-sm', className)
    return (
        <AnchorLink href={href}>
            <button onClick={() => { }} className={cnClass}>{title}</button>
        </AnchorLink>
    )
}