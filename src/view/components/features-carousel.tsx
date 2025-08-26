import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { EmailMarketingVideo, InteractiveWebsiteVideo, MarketingVideo, PowerfulCMSVideo, SeoReadyVideo, WebsiteTemplatesVideo } from "./sliding-sections/slide-videos/slide-videos";
import SlideElement from "./sliding-sections/slide-element";
import SlideBody from "./sliding-sections/slide-body";

const carouselContents = [
    {
        caption: "Marketing",
        title: "Level up your marketing instantly",
        description: "Right Property extends your marketing beyond the sales office. Seamless digital marketing, connected to sales.",
        buttonType: "book",
        video: <MarketingVideo />
    },
    {
        caption: "Marketing",
        title: "Interactive Website",
        description: "Providing a fully interactive project website that mirrors the in-person experience.",
        video: <InteractiveWebsiteVideo />
    },
    {
        caption: "Marketing",
        title: "Ready-to-Use Templates",
        description: "Switch between ready-to-use templates or customize campaign pages.",
        video: <WebsiteTemplatesVideo />
    },
    {
        caption: "Marketing",
        title: "Powerful & Intuitive CMS",
        description: "Powerful yet intuitive CMS to reflect your project's branding on every platform.",
        video: <PowerfulCMSVideo />
    },
    {
        caption: "Marketing",
        title: "Email Campaign Management",
        description: "Built-in email creation and campaign management, reaching potential buyers has never been easier.",
        video: <EmailMarketingVideo />
    },
    {
        caption: "Marketing",
        title: "SEO Ready Projects",
        description: "SEO-ready out of the box, ensuring your project ranks higher and attracts the right audience.",
        video: <SeoReadyVideo />
    }
]
export default function FeaturesCarousel() {

    return (
        <section className="hidden lg:block px-4 relative  overflow-hidden pb-[7.5rem]">
            <div className="z-[-1] absolute top-1/2 w-[2205px] h-[2205px] -translate-y-1/2 left-1/2 -translate-x-[30%]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" }}>

            </div>
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
                style={{
                    paddingTop: "10rem",
                    paddingBottom: "1.5rem",
                }}
            >
                {carouselContents.map((content, index) => (
                    <SwiperSlide key={index}>
                        <SlideElement>
                            {content.video}
                            <SlideBody {...content} />
                        </SlideElement>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>

    )
}