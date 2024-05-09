import { FeatureItem } from "../../../domain/feature-item";
import { cn } from "../../../lib/utils";


const ContentComponent = ({ featureItem }: { featureItem: FeatureItem }) => {
    return <div className="">
        <div className="flex items-center">
            {featureItem.mobileIcon}
            <div className="text-18 text-[#40424E] font-medium">
                {featureItem.title}
            </div>
        </div>
        <div className="font-light text-[#83869D] text-12 pl-[0.3125rem] h-[6.25rem]">
            {featureItem.description}
        </div>
    </div>
}
const ImageComponent = ({ featureItem }: { featureItem: FeatureItem }) => {
    const justifyClass = featureItem.title == "Fully Customizable" ? "items-start justify-end" : "justify-center"
    const cnClass = cn('bg-[#EFE8E4] overflow-hidden rounded-[10px] flex h-[14.8125rem] border-[0.5px] border-[#B3B3B3]', justifyClass)

    return <div className={cnClass} style={{ boxShadow: '0px 8px 10px 0px rgba(0, 0, 0, 0.08)' }}>
        <img
            src={featureItem.image}
            className={`${featureItem.mobileClass} h-auto object-contain`}
            alt="feature"
        />
    </div>
}
export default function FeatureSlideItem({ featureItem, isImageTop }: { featureItem: FeatureItem, isImageTop: boolean }) {
    return <div className="w-full flex  justify-center ">
        <div className="flex flex-col gap-5 w-[20.3125rem]">
            {isImageTop ? <ImageComponent featureItem={featureItem} /> : <ContentComponent featureItem={featureItem} />}
            {isImageTop ? <ContentComponent featureItem={featureItem} /> : <ImageComponent featureItem={featureItem} />}
        </div>

    </div>
}