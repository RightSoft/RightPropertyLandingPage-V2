import SectionTitle from "../section-title";
import MultiPlatform from "./multi-platform";
import WallPlatform from "./wall-platform";

export default function PlatformsSection() {
    return <div className="section">
        <WallPlatform />
        <SectionTitle text={<div>
            ALL DEVICES<br />IN ONE PLATFORM
        </div>} className="text-center" />
        <div className="pt-[8.75rem]">
            <MultiPlatform />

        </div>
    </div>
}