import CampaignBanner from "../components/campaign/banner/campaign-banner";
import CampaignTextBlock from "../components/campaign/text-block/campaign-text-block";
import FeaturesSection from "../components/features/features-section";
import RegisterNowSection from "../components/register-now-section/register-nom-section";
import SectionDescription from "../components/section-description";

export default function Campaign() {
  return (
    <>
      <CampaignBanner />
      <SectionDescription>
        <div className="max-w-[60rem] pt-[6.5rem] pb-[6.06rem] text-center mx-auto text-28 mobile:text-12 mobile:w-full mobile:py-[0rem] mobile:px-[3rem]">
          Since you've discovered <b>Right Property</b> through{" "}
          <b>Web Summit</b>, we’re excited to offer you an exclusive
          opportunity.
          <br />
          <br/>
          Witness how we transform the way real-estate developers market and
          sell their property developments with our all-in-one digital marketing
          suite.
        </div>
      </SectionDescription>
      <FeaturesSection
        title="Why Right Property?"
        description={
          <div className="max-w-[60rem] mx-auto text-28 mobile:text-12 mobile:w-full mobile:py-[0rem] ">
            Deliver seamless experiences, customise with ease, and drive results
            with our advanced, user-friendly platform.
          </div>
        }
      />
      <CampaignTextBlock
        title={"Special Web Summit Offer"}
        description={
          "Register through the form below to book a demo and access an exclusive Web Summit special offer tailored for attendees."
        }
        variant="gap-md"
        
      />
       <RegisterNowSection />
    </>
  );
}
