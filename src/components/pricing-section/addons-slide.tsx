import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import PricingCardSmall from './pricing-card-small';
import { interactiveSiteplanFeatures, leadTrackingFeatures, multiDevelopmentFeatures } from './pricing-data';
import { Pagination,FreeMode } from 'swiper/modules';


export default function AddonsSlide() {
    return <div className='w-full overflow-x-hidden'>
        <Swiper
            spaceBetween={8.93}
            slidesPerView={1.9}
            onSlideChange={() => { }}
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[ Pagination,FreeMode]}
            className='w-[100vw] flex justify-center  px-7'
        >
            <SwiperSlide className=' flex justify-center'> <PricingCardSmall title={"Lead Tracking"} features={leadTrackingFeatures} price={250} />
            </SwiperSlide>
            <SwiperSlide className=' flex justify-center'> <PricingCardSmall title={"Multi Development"} features={multiDevelopmentFeatures} price={100} />
            </SwiperSlide>
            <SwiperSlide className=' flex justify-center'> <PricingCardSmall title={"3D Interactive Siteplan"} features={interactiveSiteplanFeatures} />
            </SwiperSlide>
        </Swiper>
    </div>
}


