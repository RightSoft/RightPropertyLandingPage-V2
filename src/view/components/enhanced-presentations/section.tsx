import enhancedIllustration from '../../../assets/enhanced-lcp.webp';
import enhancedMobile from '../../../assets/enhanced-lcp-mobile.webp';
import Button from '../button';
import BookADemoButton from '../book-a-demo-button';
import AnchorLink from '../anchor-link';

export default function EnhancedPresentationsSection() {
    return (
        <section className="enhanced-bg w-full h-[auto] lg:pb-35" aria-label="Enhanced presentations hero section">
            <div className="rp-container relative flex lg:flex-col lg:items-start items-center">
                <div className="pl-[8.625rem] lg:px-6 lg:w-full flex flex-col items-start justify-center font-general-sans min-h-[40rem] lg:min-h-0 lg:order-2">
                    <h1 className="mb-22 lg:mb-[0.875rem] font-general-sans font-semibold text-60 lg:text-40 leading-[100%] tracking-0% text-azure">
                        Enhanced <br />Presentations. <br />
                        Smarter Sales.
                    </h1>
                    <h2 className="mb-22 lg:mb-[0.75rem] font-general-sans font-semibold text-30 lg:text-20 leading-[100%] tracking-0% text-azure">
                        Built for Real Estate Developers
                    </h2>
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
                <div className="flex-shrink-1 lg:order-1 lg:mb-[2.25rem]" style={{ contain: 'layout' }}>
                    <picture>
                        <source 
                            media="(max-width: 768px)" 
                            srcSet={enhancedMobile} 
                            type="image/webp"
                        />
                        <img 
                            src={enhancedIllustration} 
                            className="max-w-[1200px] w-full h-auto lg:max-w-full" 
                            alt="Right Property enhanced presentations platform showcasing interactive real estate sales tools"
                            loading="eager"
                            decoding="sync"
                            fetchPriority="high"
                            width="1200"
                            height="800"
                            style={{
                                contentVisibility: 'visible',
                                contain: 'layout style paint',
                                imageRendering: 'auto',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)'
                            }}
                        />
                    </picture>
                </div>
            </div>
        </section>
    )
}

