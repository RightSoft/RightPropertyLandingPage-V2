import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import OnboardFirstStepIcon from '../../icons/ onboard-first-step-icon';
import OnboardSecondStepItem from '../../icons/onboard-second-step-icon';
import OnboardThirdStepIcon from '../../icons/onboard-third-step-icon';
import { OnboardStep } from '../../../domain/onboard-step';
import OnboardSlideItem from './onboard-slide-item';


export default function OnboardSlide({ className }: { className?: string }) {
    const onboardItems: OnboardStep[] = [
        {
            index: 1,
            title: "Gather Your Assets",
            description: "We need all your existing visual assets from still renders, to brochures, videos to illustrations.",
            icon: <OnboardFirstStepIcon className='w-[6rem]' />
        },
        {
            index: 2,
            title: "Your Plot Details",
            description: "We need all plot details from floor plans to dimensions.",
            icon: <OnboardSecondStepItem className='w-[6rem]' />
        },
        {
            index: 3,
            title: "Apply Your Branding",
            description: "We need your logo and brand colours",
            icon: <OnboardThirdStepIcon className='w-[6rem]' />
        },
    ]
    return <div className={`${className}`}>
        <Swiper
            spaceBetween={-165}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            centeredSlides={true}
            centerInsufficientSlides={true}
            centeredSlidesBounds={true}
            modules={[ Pagination]}
            onSlideChange={() => { }}
            onSwiper={(swiper) => console.log(swiper)}
            className='w-[100vw] flex justify-center pb-14'
        >
            {
                onboardItems.map((onboardStep, index) => {
                    return <SwiperSlide className=' flex justify-center' key={`${index}onboardStep`}><OnboardSlideItem onboardStep={onboardStep} /></SwiperSlide>
                })
            }
        </Swiper>
    </div>
}

