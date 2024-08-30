import { featureItems } from "./feature-data"
import FeatureSlideItem from "./feature-slide/feature-slide-item"

export default function FeaturesMobileColumn() {
    const cards = featureItems.map((featureItem, index) => {
        return <FeatureSlideItem key={`slide_${index}`} featureItem={featureItem} isImageTop={true} isActive={false} />
    })
    return <div className="flex flex-col items-center gap-9">
        {cards}
    </div>
}