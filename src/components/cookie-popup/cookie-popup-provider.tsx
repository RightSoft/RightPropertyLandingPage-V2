import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CookiePopup from "./cookie-popup";
import ReactGA from "react-ga4";
import { constants } from "../../lib/constants";

export default function CookiePopupProvider() {
    const [showPopup, setShowPopup] = useState(false);
    const onClose = () => setShowPopup(false);
    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookie-consent');
        if (!cookieConsent) {
            setShowPopup(true);
        } else if (parseInt(cookieConsent) === 1) {
            ReactGA.initialize(constants.GA_TRACKING_ID);
        }
    }, [])
    return showPopup && createPortal(<CookiePopup onClose={onClose} />, document.body)
}