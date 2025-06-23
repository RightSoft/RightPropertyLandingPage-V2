import { Swiper, SwiperSlide } from "swiper/react";
import InteractiveWebsiteSection from "./sliding-sections/interactive-website";
import SwitchBetweenTemplates from "./sliding-sections/switch-between-templates";
import PowerfulCMS from "./sliding-sections/powerful-cms";
import BuiltInEmail from "./sliding-sections/built-in-email";
import SeoReady from "./sliding-sections/seo-ready";
import { Pagination, Autoplay } from "swiper/modules";
export default function FeaturesCarousel() {
    return (
        <section className="hidden lg:block">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide><InteractiveWebsiteSection /></SwiperSlide>
                <SwiperSlide><SwitchBetweenTemplates /></SwiperSlide>
                <SwiperSlide><PowerfulCMS /></SwiperSlide>
                <SwiperSlide><BuiltInEmail /></SwiperSlide>
                <SwiperSlide><SeoReady /></SwiperSlide>

            </Swiper>
        </section>

    )
}