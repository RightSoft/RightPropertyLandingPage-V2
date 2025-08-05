import type { ReactNode } from 'react'
export default function BinarySection({ subHeader, title, description, image }: { subHeader: string, title: string, description: string,image:ReactNode }) {
    return (
        <section className="bg-white p-[2.5rem] gap-[3.75rem] lg:gap-8 flex items-center justify-center lg:flex-col lg:py-[5rem] lg:px-6" aria-label="Company values and technology focus">
            <div className="flex-flex-col w-[26.25rem] lg:w-full">
                <p className='mb-6 font-geist-mono font-medium text-16 leading-[150%] tracking-[0.04em] uppercase text-[#8D98A5]'>
                    {subHeader}
                </p>
                <h3 className='mb-[1rem] lg:mb-4 font-general-sans font-semibold text-24 lg:text-24 leading-[100%] text-squid-ink'>
                    {title}
                </h3>
                <p className='font-geist font-normal text-24 leading-[140%] text-squid-ink'>
                    {description}
                </p>
            </div>
           {image}
        </section>
    )
}

export const BinaryBlockImage = ({path}:{path:string}) => {
    return (
            <img src={path} className='w-[13.125rem] h-auto' alt="binary code icon representing software development" loading="lazy" decoding="async" width="210" height="210" />
    )
}