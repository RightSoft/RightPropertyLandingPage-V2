import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { featureItems } from '../feature-data';
import FeatureSlideItem from './feature-slide-item';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/pagination';


export default function FeaturesSlide({ className }: { className?: string }) {
    return <div className={`${className} swiper-container swiper-container-free-mode`}>
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            freeMode={true}
            speed={8000}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}

            onSlideChange={() => { }}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                featureItems.map((featureItem, index) => {
                    return <SwiperSlide key={`${index}_featureslide`}><FeatureSlideItem featureItem={featureItem} isImageTop={true} /></SwiperSlide>
                })
            }
        </Swiper>
    </div>
}