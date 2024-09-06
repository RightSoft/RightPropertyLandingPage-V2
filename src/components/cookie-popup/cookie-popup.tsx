import ReactGA from "react-ga4";
import { constants } from "../../lib/constants";

export default function CookiePopup({onClose}: {onClose: () => void}) {
    const onReject = () => {
        localStorage.setItem('cookie-consent', "0");
        onClose();
    }
    const onAccept = () => {
        localStorage.setItem('cookie-consent', "1");
        ReactGA.initialize(constants.GA_TRACKING_ID);
        onClose();
    }
    return <div className="cookie-popup w-[19.815rem] flex flex-col p-6 text-12 leading-[1.4375rem] text-[#707170] gap-[1.06rem] bg-white fixed bottom-[50px] right-[50px] z-[999]">
        <div>
            Our website relies on cookies to provide essential features, improve user experience, and analyze web traffic. By continuing, you accept our cookie usage. For more details, refer to our Privacy Policy.
        </div>
        <div className="flex gap-[0.375rem] w-full">
            <button onClick={onReject} className="bg-[#E0E0E6] text-[#56586C] text-base w-full py-[1px] ">Reject</button>
            <button onClick={onAccept} className="bg-[#5EC6D3] text-white text-base  w-full  py-[1px] ">Accept</button>
        </div>
    </div>
}