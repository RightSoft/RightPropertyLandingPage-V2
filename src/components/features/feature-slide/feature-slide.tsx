import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { featureItems } from '../feature-data';
import FeatureSlideItem from './feature-slide-item';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


export default function FeaturesSlide({ className }: { className?: string }) {
    return <div className={`${className} pt-[3rem]`}>
        <Swiper
            spaceBetween={22}
            slidesPerView={1}
            loop={true}
            pagination={{
                clickable: true,
              }}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            modules={[Autoplay,Pagination]}

            onSlideChange={() => { }}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                featureItems.map((featureItem, index) => {
                    return <SwiperSlide key={`${index}_featureslide`}><FeatureSlideItem featureItem={featureItem} isImageTop={index % 2 != 0} /></SwiperSlide>
                })
            }
        </Swiper>
    </div>
}