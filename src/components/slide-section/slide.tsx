import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from '../../assets/images/slide_image_1.webp';
import img2 from '../../assets/images/slide_image_2.webp';

const SlideImage = ({ src }: { src: string }) => {
    return <div className='mobile:px-4'>
        <img draggable={false} src={src} className='w-full object-cover h-auto max-h-[22.875rem] rounded-[20px]' />
    </div>
}

export default function Slide() {
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
        draggable={false}
        onSlideChange={() => { }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={
            {
                801: {
                    slidesPerView: 3,
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