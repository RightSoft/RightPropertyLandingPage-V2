import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { featureItems } from './feature-data';
import FeatureSlideItem from './feature-slide/feature-slide-item';
interface CarouselProps {
    
    speed: number;
}

export default function SwiperCarousel({  }: CarouselProps) {
    const $swiper = useRef<SwiperClass | null>()
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselCards = featureItems.map((featureItem, index) => {
        return <FeatureSlideItem key={`slide_${index}`} featureItem={featureItem} isImageTop={true} isActive={activeIndex == index} />
    })
    return <Swiper

        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={-80}
        pagination={true}
        slidesPerView={1.2}
        loop={true}
        speed={1000}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
        }}
        modules={[Autoplay,Pagination]}
        className='overflow-visible'
    
        onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
        }}
        onTouchStart={() => {
            $swiper.current?.autoplay?.stop()
        }}
        onTouchEnd={
            () => {
                $swiper.current?.autoplay?.start()
            }}
        onSwiper={(swiper) => $swiper.current = swiper}
    >
        {
            carouselCards.map((card, i) => (
                <SwiperSlide>
                    <motion.div
                        variants={{
                            active: { scale: 1 },
                            inactive: { scale: .7 }
                        }}
                        animate={i == activeIndex ? 'active' : 'inactive'}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                    >
                        {card}
                    </motion.div>

                </SwiperSlide>
            ))}
    </Swiper>
}