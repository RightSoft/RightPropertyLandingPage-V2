import FadeParent from "../fade-parent";

export default function SimpleGallery({
    images,
    activeIndex
}: {
    images: string[];
    activeIndex: number;
}) {
    return (
       <FadeParent key={activeIndex}>
           <img className="w-[81.25rem] h-[45rem] lg:w-full lg:h-[16.875rem] object-cover" src={images[activeIndex]} alt="gallery" />
       </FadeParent>
    )
}