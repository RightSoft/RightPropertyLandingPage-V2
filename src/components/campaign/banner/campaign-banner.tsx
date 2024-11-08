import campaignBannerImage from '../../../assets/images/campaign/banner.webp';
import sectionBgSrc from "../../../assets/images_v2/features_bg.webp";

export default function CampaignBanner(){
    return <div className='px-[1.203125rem] mobile:h-[13.6875rem] mobile:px-0 w-full h-[37.25rem]'
    style={{ background: `linear-gradient(94.44deg, rgba(255, 255, 255, 0.8) 5.42%, rgba(255, 255, 255, 0) 54.55%), url(${sectionBgSrc})`, backgroundSize: 'cover' }}

    >
        <div className="section">
        <img src={campaignBannerImage} alt='banner' className='w-full h-full object-cover'/>
        </div>
      
    </div>
}