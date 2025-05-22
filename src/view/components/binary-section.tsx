import binaryImage from '@/assets/binary.png'
export default function BinarySection({subHeader, title, description}: {subHeader: string, title: string, description: string}) {
    return (
        <div className="rp-container py-[7.5rem] gap-16 lg:gap-8 flex items-center justify-center lg:flex-col lg:py-[5rem] lg:px-6">
            <BinaryBlock />
            <div className="flex-flex-col w-[23.75rem] lg:w-full">
                <h4 className='mb-2 font-geist-mono font-normal text-12 leading-[150%] tracking-[0.04em] uppercase text-[#8D98A5]'>
                    {subHeader}
                </h4>
                <h5 className='mb-6 lg:mb-4 font-general-sans font-semibold text-32 lg:text-24 leading-[100%] text-squid-ink'>
                    {title}
                </h5>
                <p className='font-geist font-normal text-18 leading-[140%] text-squid-ink'>
                    {description}
                </p>
            </div>
        </div>
    )
}

const BinaryBlock = () => {
    return (
        <div className="w-[12.5rem] h-[12.5rem] rounded-[16px] border border-[#E8EAED] flex flex-col items-center justify-center">
            <img src={binaryImage} className='w-[5.625rem] h-auto' alt="binary" />
        </div>
    )
}