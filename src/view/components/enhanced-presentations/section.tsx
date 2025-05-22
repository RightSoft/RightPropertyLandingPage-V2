import enhancedIllustration from '../../../assets/enhanced.webp';
import Button from '../button';
import BookADemoButton from '../book-a-demo-button';
import AnchorLink from '../anchor-link';
import ShowBookingHoc from '../show-booking-hoc';
export default function EnhancedPresentationsSection() {
    return (
        <div className="enhanced-bg w-full h-[50rem] mb-35">
            <div className="rp-container relative flex lg:flex-col lg:items-start items-center">
                <img src={enhancedIllustration} className="lg:mb-[2.25rem] lg:static absolute bottom-0 right-0 w-[70.15875rem] h-auto" alt="enhanced illustration" />
                <div className="pl-[8.625rem] lg:px-6 lg:w-full flex flex-col items-start font-general-sans">
                    <div className="mb-22 lg:mb-[0.875rem] font-general-sans font-semibold text-60 lg:text-40 leading-[100%] tracking-0% text-azure">
                        Enhanced<br />Presentations.<br />
                        Smarter Sales.
                    </div>
                    <div className="mb-22 lg:mb-[0.75rem] font-general-sans font-semibold text-30 lg:text-20 leading-[100%] tracking-0% text-azure">
                        Built for Real Estate Developers
                    </div>
                    <div className="mb-30 lg:mb-[2.25rem] w-[24.06rem] lg:w-[18.06rem] font-geist font-normal text-22 lg:text-18 leading-[140%] tracking-0% text-azure">
                        The digital suite that maximises your off-plan project sales and marketing efforts.
                    </div>
                    <div className="flex lg:flex-col lg:w-full lg:gap-[0.75rem] gap-30">
                        <AnchorLink href="meet-right-property">
                            <Button onClick={() => { }} label="Explore" variant="outline" className="lg:w-full" />
                        </AnchorLink>
                        <BookADemoButton className="lg:w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

