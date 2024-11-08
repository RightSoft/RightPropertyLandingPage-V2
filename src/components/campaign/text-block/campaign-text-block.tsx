import { cn } from "../../../lib/utils";
import SectionTitle from "../../section-title";

export default function CampaignTextBlock({
  title,
  description,
}: {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  variant?: "gap-sm" | "gap-md";
}) {
  const cnClass = cn("text-center");

  return (
    <div
      className={cn(
        "flex flex-col pb-[5.53rem] pt-[3rem] mobile:py-[1.5rem]",
        cnClass
      )}
    >
      <div>
        <SectionTitle text={title} />
      </div>
      <div className="text-28 w-[60rem] mx-auto mobile:text-12 mobile:w-full  mobile:py-[0rem] mobile:px-[2rem]">
        {description}
      </div>
    </div>
  );
}
