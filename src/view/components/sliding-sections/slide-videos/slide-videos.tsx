import cmsVideo from "@/assets/v3/cms.webm"
import emailMarketingVideo from "@/assets/v3/email_marketing.webm"
import interactiveVideo from "@/assets/v3/interactive_website.webm"
import marketingOption1 from "@/assets/v3/marketing_option1.webm"
import websiteTemplates from "@/assets/v3/website_templates.webm";
import seoVideo from "@/assets/v3/seo.webm";

import slideVideoOverlay1 from "@/assets/v3/slide_video/slide_video_overlay_1.png"
import slideVideoOverlay2 from "@/assets/v3/slide_video/slide_video_overlay_2.png"
import slideVideoOverlay3 from "@/assets/v3/slide_video/slide_video_overlay_3.png"
import slideVideoOverlay4 from "@/assets/v3/slide_video/slide_video_overlay_4.png"
import slideVideoOverlay5 from "@/assets/v3/slide_video/slide_video_overlay_5.png"
import slideVideoOverlay6 from "@/assets/v3/slide_video/slide_video_overlay_6.png"

const MarketingVideo = () => {
    return <div className="relative">
        <img src={slideVideoOverlay1} className=" absolute -top-[4rem] left-[1.5625rem] w-[5.25rem] h-auto object-contain" />
        <video src={marketingOption1} autoPlay muted loop playsInline className=" w-full h-auto object-cover" />
    </div>
}

const InteractiveWebsiteVideo = () => {
    return <div className="relative">
        <img src={slideVideoOverlay2} className="absolute -top-[7rem] -right-[3.625rem] w-[13.75rem] h-auto object-contain" />
        <video src={interactiveVideo} autoPlay muted loop playsInline className=" w-full h-auto object-cover" />
    </div>
}

const WebsiteTemplatesVideo = () => {
    return <div className="relative">
        <img src={slideVideoOverlay3} className="absolute -right-[1rem] -top-[3.125rem]  w-[10.5rem] h-auto object-contain" />
        <video src={websiteTemplates} autoPlay muted loop playsInline className=" w-full h-auto object-cover" />
    </div>
}

const PowerfulCMSVideo = () => {
    return <div className="relative">
        <img src={slideVideoOverlay4} className="absolute -top-[3.625rem] right-[1rem] w-[3.75rem] h-auto object-contain" />
        <video src={cmsVideo} autoPlay muted loop playsInline className=" w-full h-auto object-cover" />
    </div>
}

const EmailMarketingVideo = () => {
    return <div className="relative">
        <img src={slideVideoOverlay5} className="absolute -top-[2.75rem] right-[0.75rem] w-[5.375rem] h-auto object-contain`" />
        <video src={emailMarketingVideo} autoPlay muted loop playsInline className=" w-full h-auto object-cover" />
    </div>
}

const SeoReadyVideo = () => {
    return <div className="relative">
        <img src={slideVideoOverlay6} className="absolute -top-[2.75rem] right-[1.75rem] w-[3rem] h-auto object-contain" />
        <video src={seoVideo} autoPlay muted loop playsInline className=" w-full h-auto object-cover" />
    </div>
}


export {
    MarketingVideo,
    InteractiveWebsiteVideo,
    WebsiteTemplatesVideo,
    PowerfulCMSVideo,
    EmailMarketingVideo,
    SeoReadyVideo,
}