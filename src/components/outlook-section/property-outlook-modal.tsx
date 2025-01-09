import { ChangeEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import propertyOutlookImage from "../../assets/images_v2/property-outlook-modal.webp";
import TextInput from "../text-input/text-input";
import ActionButton from "../buttons/action-button";
import toast from "react-hot-toast";
import { useLenis } from "@studio-freight/react-lenis";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { subscribeToCampaign } from "@/lib/utils";

export default function PropertyOutlookModal({
  initialState,
}: {
  initialState: boolean;
}) {
  const lenis = useLenis();
  const [checkboxValue, setCheckboxValue] = useState<CheckedState>(false);
  const [show, setShow] = useState(initialState);
  const handleClose = () => setShow(false);
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
    setShow(false);
  };
  useEffect(() => {
    if (!lenis) return;
    if (show) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [show, lenis, checkboxValue]);
  return (
    show &&
    createPortal(
      <div
        className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center mobile:p-[1.125rem]"
        onClick={() => {}}
      >
        <div className="bg-[#AAE6EE] pl-[28.5rem] pt-[2.6rem] pr-[3rem] pb-[2rem] mobile:pt:[3.56rem] mobile:px-[1.125rem] mobile:pt-[3rem] relative overflow-hidden">
          <div
            onClick={handleClose}
            className="absolute top-0 right-0 p-4 cursor-pointer z-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1346_931)">
                <path
                  d="M20 4L4 20M4 4L20 20"
                  stroke="#282936"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1346_931">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <img
            src={propertyOutlookImage}
            className="absolute top-[0] left-0  h-[29.375rem] w-auto mobile:w-[34.375rem] mobile:h-[34.375rem] mobile:object-cover mobile:overflow-visible mobile:left-[18rem] mobile:-top-[6rem]"
          />
          <div className="max-w-[21.6875rem] mobile:max-w-none relative z-60">
            <div className="text-[#56586C] text-24 font-bold mb-5 leading-[1.125em] mobile:text-20 mobile:mb-[0.625rem] text-left">
              <div className="mb-5">
                New Property Outlook
                <br />
                UK 2025!
              </div>

              <p className="text-black font-normal text-16 text-left mobile:text-14 mobile:w-[10.625rem] ">
                This exclusive report offers in-depth insights into the latest
                trends, opportunities, and challenges shaping the property
                development market in the coming year.
              </p>
            </div>
            <TextInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Email address"
              className="mb-[0.53rem]"
            />
            <div className="text-12 font-normal text-[#56586C] mb-[1.375rem] mobile:w-[18rem]">
              You are signing up to receive communication via email and can
              unsubscribe at any time
            </div>
            <div className="flex justify-center mobile:w-full mb-3">
              <ActionButton
                text={"Access Now"}
                className={
                  "uppercase w-[21.875rem] h-[3.25rem] bg-[#FFA657] mobile:w-full"
                }
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  handleSubmit(e);
                }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Checkbox
                onCheckedChange={(checked) => {
                  setCheckboxValue(checked);
                  localStorage.setItem("hide-popup", checked ? "true" : "false");
                }}
                id="dont-show-popup"
              />
              <label
                htmlFor="dont-show-popup"
                className="text-12 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Don’t show this popup again
              </label>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}
