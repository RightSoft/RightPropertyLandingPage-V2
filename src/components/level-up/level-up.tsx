import { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import ActionButton from "../buttons/action-button";
import TextInput from "../text-input/text-input";
import propertyOutlookImageMobile from "../../assets/images_v2/outlook-mobile.webp";
import Countdown from "../outlook-section/property-countdown";
import { subscribeToCampaign } from "../../lib/utils";
export default function LevelUp() {
  const [email, setEmail] = useState("");
  const validation = (email: string) => {
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailPattern.test(email) === false) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };
  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!validation(email)) return;
    await subscribeToCampaign(email);
    toast.success("Your report is in your inbox");
    setEmail("");
  };
  return (
    <div className="relative h-[47.125rem] mobile:h-[auto]  w-full pt-[1.875rem] mobile:pt-0 ">
      <div className="px-[1.203125rem] mobile:h-[13.6875rem] mobile:px-0 w-full h-full absolute mobile:relative">
        <video
          style={{ padding: "inherit" }}
          className="w-full left-0 h-full object-cover absolute z-10 mobile:hidden"
          src="/rp-landing-last.mp4"
          autoPlay
          muted
          playsInline
          loop
        ></video>
        <video
          style={{ padding: "inherit" }}
          className="w-full left-0 h-full object-cover absolute z-10 hidden mobile:block"
          src="/rp-landing-mobile.mp4"
          autoPlay
          muted
          playsInline
          loop
        ></video>
        <div
          style={{ padding: "inherit" }}
          className="w-full left-0 h-full absolute z-20"
        >
          <div
            className=" w-full h-full"
            style={{
              background:
                "linear-gradient(74.46deg, rgba(25, 25, 25, 0.5) 19.09%, rgba(0, 0, 0, 0) 79.82%)",
            }}
          />
        </div>
      </div>
      <PropertyOutlook setEmail={setEmail} email={email} handleSubmit={handleSubmit} />
      <div className="h-full mobile:h-auto w-full flex flex-col justify-end mobile:justify-start pl-[4.25rem] mobile:pl-2.5 mobile:pt-10 text-white mobile:text-[#40424E]  relative z-20 level-up-gradient">
        <h1 className=" text-[3rem] leading-[3.6568rem] mobile:text-36 mobile:text-[#5EC6D3] mb-3 font-bold">
          Level Up Your
          <br />
          Real Estate Marketing
        </h1>
        <p className="w-[44.76rem] text-[1.5rem] leading-[1.82875rem] pb-[3.125rem] mobile:pb-[0] mobile:text-xs mobile:leading-[0.9143rem] mobile:w-full ">
          <b>Right Property</b> is a <b>digital marketing suite</b> tailored for
          real estate developers. We offer tools to{" "}
          <b>create, manage, and display</b> your development on various devices
          to <b>enhance marketing and sales</b> efforts.
        </p>
      </div>
    </div>
  );
}

function PropertyOutlook({
  setEmail,
  email,
  handleSubmit,
}: {
  setEmail: (email: string) => void;
  email: string;
  handleSubmit: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className="section px-0 py-5 w-full h-full bg-[#AAE6EE] hidden mobile:flex flex-col gap-5 ">
      <div className="tracking-[0.14em] px-[1.25rem] text-gunmetal text-40 font-extrabold leading-[1.21em] mobile:text-22 text-center">
        New Property Outlook UK 2025!
      </div>
      <img
        src={propertyOutlookImageMobile}
        className="h-[10.875rem] w-auto mx-auto"
      />
      <Countdown targetDate="2025-02-01T00:00:00" />
      <p className="text-black font-regular text-24  mobile:text-20 text-center px-[1.25rem]">
        This exclusive report offers in-depth insights into the latest trends,
        opportunities, and challenges shaping the property development market in
        the coming year.
      </p>
      <div className="px-5">
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email address"
        />
      </div>

      <div className="text-12 text-white px-5">
        You are signing up to receive communication via email and can
        unsubscribe at any time.
      </div>
      <div className="flex justify-center w-full px-5">
        <ActionButton
          text={"Access Report"}
          className={
            "uppercase w-full h-[3.25rem] bg-[#FFA657] max-w-full mobile:w-full"
          }
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleSubmit(e);
          }}
        />
      </div>
    </div>
  );
}
