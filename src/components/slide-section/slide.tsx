import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from '../../assets/images/slide_image_1.webp';
import img2 from '../../assets/images/slide_image_2.webp';
import mainImage from '../../assets/images/carousel_main.webp';
const SlideImage = ({ src }: { src: string }) => {
    return <div className='mobile:px-4'>
        <div className='w-full   h-[20.5rem] mobile:h-[17.5rem]'>
            <img draggable={false} src={src} className='rounded-[20px] object-cover w-full h-full' />
        </div>

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
        className='mobile:px-0 px-5'
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
        <SwiperSlide><SlideImage src={mainImage} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img1} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img2} /></SwiperSlide>
        <SwiperSlide><SlideImage src={mainImage} /></SwiperSlide>
        <SwiperSlide><SlideImage src={img2} /></SwiperSlide>
    </Swiper>
}