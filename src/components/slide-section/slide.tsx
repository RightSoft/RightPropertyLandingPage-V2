import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import img1 from '../../assets/images/slide_image_1.webp';
import img2 from '../../assets/images/slide_image_2.webp';

const SlideImage = ({ src }: { src: string }) => {
    return <img src={src} className='w-full object-cover h-auto max-h-[16.875rem] rounded-[20px]' />
}
export default function Slide() {
    return <Swiper
        spaceBetween={22}
        slidesPerView={3.5}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><SlideImage src={img1} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img2} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img1} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img2} /></SwiperSlide>
    </Swiper>
}