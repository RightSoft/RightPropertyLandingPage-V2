import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from '../../assets/images/slide_image_1.webp';
import img2 from '../../assets/images/slide_image_2.webp';

const SlideImage = ({ src }: { src: string }) => {
    return <img src={src} className='w-full object-cover h-auto max-h-[22.875rem] rounded-[20px]' />
}

export default function Slide() {
    return <Swiper
        spaceBetween={22}
        slidesPerView={1.1}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}

        onSlideChange={() => { }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={
            {
                801: {
                    slidesPerView: 2.85,
                    spaceBetween: 20
                },
            }
        }
    >
        <SwiperSlide><SlideImage src={img1} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img2} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img1} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img2} /></SwiperSlide>
    </Swiper>
}