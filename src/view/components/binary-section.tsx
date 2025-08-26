import type { ReactNode } from 'react'
export default function BinarySection({ subHeader, title, description, image }: { subHeader: string, title: string, description: string, image: ReactNode }) {
    return (
        <section className="bg-white p-[2.5rem] gap-[3.75rem] lg:gap-[2rem] flex items-center justify-center lg:p-6 lg:flex-col-reverse relative" aria-label="Company values and technology focus">
            <div className="flex-flex-col w-[26.25rem] lg:w-full">
                <p className='mb-6 lg:mb-4 font-geist-mono font-medium text-16 lg:text-sm leading-[150%] tracking-[0.04em] uppercase text-[#8D98A5]'>
                    {subHeader}
                </p>
                <h3 className='mb-[1rem] lg:mg-[0.75rem] font-general-sans font-semibold text-24 lg:text-20 leading-[100%] text-squid-ink'>
                    {title}
                </h3>
                <p className='font-geist font-normal text-24 lg:text-base leading-[140%] text-squid-ink'>
                    {description}
                </p>
            </div>
            {image}

            <div className='z-[-1] absolute left-1/2 top-1/2 -translate-1/2  w-[1467px] h-[1064px]' style={{ background: "radial-gradient(50% 50% at 50% 50%, #E7DFF2 0%, rgba(255, 255, 255, 0) 100%)" }}>

            </div>
        </section>
    )
}

export const BinaryBlockImage = ({ path }: { path: string }) => {
    return (
        <img src={path} className='w-[13.125rem] lg:w-full h-auto' alt="binary code icon representing software development" loading="lazy" decoding="async" width="210" height="210" />
    )
}