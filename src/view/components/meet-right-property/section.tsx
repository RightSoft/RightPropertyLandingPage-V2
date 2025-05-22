import wallApp from '../../../assets/wall-app.webp'
import wallAppMobile from '@/assets/mobile-wall.png';
export default function MeetRightPropertySection() {
    return (
        <div id="meet-right-property" className="rp-container mb-35 flex lg:flex-col items-center justify-center">
            <img src={wallApp} alt="wall-app" className="lg:hidden w-[43.75rem] h-auto" />
            <img src={wallAppMobile} alt="wall-app" className="lg:block hidden w-full h-auto" />
            <div className="pr-16 flex flex-col justify-center h-[45.8125rem] lg:p-6 lg:justify-start lg:h-auto">
                <div className="flex flex-col w-[52rem] lg:w-full">
                    <h3 className="font-geist-mono font-normal text-16 leading-[150%] tracking-[4%] uppercase text-squid-ink lg:text-14 lg:mb-[1.25rem]">
                        Meet Right Property
                    </h3>
                    <p className="mb-[2.125rem] font-geist font-normal text-40 leading-[120%] -tracking-[0.04em] text-squid-ink lg:text-30 lg:mb-[1.25rem]">
                        Property sales require more than just listings, 3D models, and brochures—it’s about
                        <span className="inline-flex items-center ml-3">
                            <NumberIndicator number="1" />
                            <span className="ml-2">connecting</span>
                        </span>
                        <span className='inline-flex'> with buyers,</span>
                        <span className="inline-flex items-center ml-3">
                            <NumberIndicator number="2" />
                          
                        </span>
                        <span className="ml-2">tracking every opportunity, and</span>
                        <span className="ml-2 inline-flex items-center">
                            <NumberIndicator number="3" />
                           
                        </span>
                        <span className="ml-2">turning interest into action.</span>
                    </p>
                    <p className='font-geist font-normal text-24 leading-[140%] lg:text-18'>
                        Right Property gives you precisely what you need to make your sales and marketing efforts truly count.
                    </p>
                </div>

            </div>
        </div>
    );
}

const NumberIndicator = ({ number }: { number: string }) => {
    return (
        <span className="inline-flex items-center justify-center w-[2.75rem] h-[2.75rem] bg-blue-light rounded-full lg:w-[1.75rem] lg:h-[1.75rem]">
            <span className="text-[#174B8C] font-geist font-medium text-28 leading-[120%] lg:text-base">
                {number}
            </span>
        </span>
    );
};