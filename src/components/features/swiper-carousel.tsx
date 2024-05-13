import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';
interface CarouselProps {
    cards: React.ReactNode[];
    speed: number;
}

export default function SwiperCarousel({ cards }: CarouselProps) {
    const $swiper = useRef<SwiperClass | null>()
    return <Swiper
        spaceBetween={22}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }}
        modules={[Autoplay]}
        onSlideChange={() => { }}
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
            cards.map((card) => (
                <SwiperSlide>
                    {card}
                </SwiperSlide>
            ))}
    </Swiper>
}