import faqImageSrc from '../../assets/images_v2/faq_image.webp';

export default function FaqImage() {
    return (
        <div className="relative w-[31.3125rem] h-[49.75rem] flex-shrink-0" >
            <div className='absolute left-0 top-0 w-full h-[22.5rem] rotate-180' style={{
                background: "linear-gradient(179.85deg, rgba(255, 255, 255, 0) 41.45%, #FFFFFF 79.34%)"

            }} />
            <div className='absolute left-0 bottom-0 w-full h-[22.5rem] ' style={{
                background: "linear-gradient(179.85deg, rgba(255, 255, 255, 0) 41.45%, #FFFFFF 79.34%)"
            }} />
            <img src={faqImageSrc} className='w-full h-full object-cover' alt="faq-image" />
        </div>
    );
}