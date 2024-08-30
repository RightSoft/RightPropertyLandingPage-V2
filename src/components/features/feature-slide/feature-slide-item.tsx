import { motion } from "framer-motion";
import { FeatureItem } from "../../../domain/feature-item";


const ContentComponent = ({ featureItem, isActive }: { featureItem: FeatureItem, isActive: boolean }) => {
    return <div className="relative">
        <div className="flex items-center justify-center mb-1">
            <div className="text-base text-[#40424E] font-medium">
                {featureItem.title}
            </div>
        </div>
        <motion.div 
        // variants={{
        //     active: { opacity: 1,transition: { duration: 1.5,ease:"easeOut" } },
        //     inactive: { opacity: 0,transition: { duration: 0.5,ease:"easeOut" } }
        // }}
        // initial="inactive"
        // animate={isActive ? 'active' : 'inactive'}
        className="font-light text-[#83869D] text-12 text-center w-full">
            {featureItem.description}
        </motion.div>
    </div>
}

const ImageComponent = ({ featureItem }: { featureItem: FeatureItem }) => {
    return <img
        draggable={false}
        src={featureItem.image}
        className={`w-full h-[11.5rem] rounded-[15px] object-cover select-none pointer-events-none`}
        alt="feature"
    />

}
export default function FeatureSlideItem({ featureItem, isImageTop, isActive }: { featureItem: FeatureItem, isImageTop: boolean, isActive: boolean }) {
    return <div className="w-full flex  justify-center  select-none">
        <div className="flex flex-col gap-3 w-[16.75rem]">
            {isImageTop ? <ImageComponent featureItem={featureItem} /> : <ContentComponent featureItem={featureItem} isActive={isActive} />}
            {isImageTop ? <ContentComponent featureItem={featureItem} isActive={isActive} /> : <ImageComponent featureItem={featureItem} />}
        </div>
    </div>
}