import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from '../../assets/images/slide_image_1.webp';
import img2 from '../../assets/images/slide_image_2.webp';
import img3 from '../../assets/images/slide_image_3.webp';
import img4 from '../../assets/images/slide_image_4.webp';
import img5 from '../../assets/images/slide_image_5.webp';
import { useState } from 'react';
import { motion } from 'framer-motion';
const SlideImage = ({ src, isActive }: { src: string, isActive: boolean }) => {
    return <motion.div
        variants={{
            active: { scale: 1 },
            inactive: { scale: .7 }
        }}
        animate={isActive ? 'active' : 'inactive'}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className=''>
        <div className='w-full h-[35.5625rem] mobile:h-[17.5rem]'>
            <img draggable={false} src={src} className='rounded-[50px] mobile:rounded-[17px] object-cover w-full h-full' />
        </div>
    </motion.div>
}

export default function Slide() {
    const [activeIndex, setActiveIndex] = useState(0);
    return <Swiper
        spaceBetween={-42}
        slidesPerView={1.1}
        loop={true}
        speed={2500}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
        }}
        className='mobile:px-0 px-5'
        modules={[Autoplay]}
        draggable={false}
        onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            console.log('slide change', swiper.activeIndex,swiper)
        }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={
            {
                801: {
                    slidesPerView: 1.57,
                    spaceBetween: -100
                },
            }
        }
    >
        <SwiperSlide><SlideImage isActive={activeIndex == 0} src={img1} /></SwiperSlide>
        <SwiperSlide><SlideImage isActive={activeIndex == 1} src={img2} /></SwiperSlide>
        <SwiperSlide><SlideImage isActive={activeIndex == 2} src={img3} /></SwiperSlide>
        <SwiperSlide><SlideImage isActive={activeIndex == 3} src={img4} /></SwiperSlide>
        <SwiperSlide><SlideImage isActive={activeIndex == 4} src={img5} /></SwiperSlide>
    </Swiper>
}