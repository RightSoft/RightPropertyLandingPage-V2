import ActionButton from "../buttons/action-button";
import TextInput from "../text-input/text-input";
import propertyOutlookImage from "../../assets/images_v2/property-outlook.webp";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import Countdown from "./property-countdown";
import { subscribeToCampaign } from "../../lib/utils";
export default function OutlookSection() {
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
    toast.success("Your report is in your inbox!");
    setEmail("");
  };
  return (
    <>
      <DesktopLayout
        setEmail={setEmail}
        email={email}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

function DesktopLayout({
  setEmail,
  email,
  handleSubmit,
}: {
  setEmail: (email: string) => void;
  email: string;
  handleSubmit: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className="section px-[1.203125rem] mobile:px-0 w-full h-full  mobile:hidden">
      <div className="pt-[7.3rem] pl-[3.25rem] pb-[4.875rem] bg-[#AAE6EE] relative mobile:p-0">
        <div className="max-w-[33.5rem]">
          <div className="text-gunmetal text-40 font-extrabold mb-[2.06rem] leading-[1.21em] mobile:text-22 text-center">
            New Property Outlook UK 2025!
            <div className="leading-[29px]">
              <br />
            </div>
            <p className="text-black font-normal text-24 text-left mobile:text-20 ">
              This exclusive report offers in-depth insights into the latest
              trends, opportunities, and challenges shaping the property
              development market in the coming year.
            </p>
          </div>
          <div className="mb-[2.75rem]">
            <Countdown targetDate="2025-03-01T00:00:00" />
          </div>
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email address"
            className="mb-[0.53rem]"
          />
          <div className="text-13 font-bold text-white mb-[1.375rem]">
            You are signing up to receive communication via email and can
            unsubscribe at any time
          </div>
          <div className="flex justify-center">
            <ActionButton
              text={"Access Now"}
              className={"uppercase w-[21.875rem] h-[3.25rem] bg-[#FFA657]"}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                handleSubmit(e);
              }}
            />
          </div>
        </div>
        <img
          src={propertyOutlookImage}
          className="absolute top-[5.625rem] right-0 h-[42rem] w-auto mobile:hidden"
        />
      </div>
    </div>
  );
}
