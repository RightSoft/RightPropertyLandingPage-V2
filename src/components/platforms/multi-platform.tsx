import multiPlatformSrc from '../../assets/images_v2/multiple_platforms.webp';
import platformBaseSrc from '../../assets/images_v2/platform_base.webp';
export default function MultiPlatform() {
    return <div className='flex items-center flex-col'>
        <img src={multiPlatformSrc} alt='multi-platform' className="w-[55.20rem] h-auto" />
        <img src={platformBaseSrc} className='w-[76rem] h-auto' alt="platform-base" />
    </div>
}