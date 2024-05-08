import AnchorLink from "../anchor-link";
import RpLogo from "../rp-logo";

export default function Footer() {
    return <div className="py-[5.125rem] pr-[5.625rem] pl-[7.25rem] w-full flex justify-between">
        <div className="">
            <div className="mb-[2.3906rem]">
                <RpLogo width={113} />
            </div>

            <div className="text-[#83869D] font-light text-[1rem] leading-[1.21875rem] w-[12.625rem] mb-[2.29rem]">
                Highland House 401<br />
                165 The Broadway,<br /><br />
                SW19 1NE <br />
                United Kingdom                    
            </div>
            <div className="flex gap-[2.53125rem] ">
                <a href="https://www.instagram.com/rightpropertyapp/" target="_blank">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.002 20.3789C17.7633 20.3789 20.002 18.1403 20.002 15.3789C20.002 12.6175 17.7633 10.3789 15.002 10.3789C12.2405 10.3789 10.002 12.6175 10.002 15.3789C10.002 18.1403 12.2405 20.3789 15.002 20.3789Z" stroke="#525361" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.75 20.3789V10.3789C3.75 6.92713 6.54822 4.12891 10 4.12891H20C23.4517 4.12891 26.25 6.92713 26.25 10.3789V20.3789C26.25 23.8307 23.4517 26.6289 20 26.6289H10C6.54822 26.6289 3.75 23.8307 3.75 20.3789Z" stroke="#525361" stroke-width="1.5" />
                        <path d="M21.873 8.51862L21.888 8.50195" stroke="#525361" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/rightpropertyapp" target="_blank">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.75 2.87891H18C16.3424 2.87891 14.7526 3.53738 13.5806 4.70949C12.4085 5.88159 11.75 7.47131 11.75 9.12891V12.8789H8V17.8789H11.75V27.8789H16.75V17.8789H20.5L21.75 12.8789H16.75V9.12891C16.75 8.79738 16.8818 8.47944 17.1161 8.24502C17.3505 8.01061 17.6685 7.87891 18 7.87891H21.75V2.87891Z" stroke="#525361" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
                <a href="https://twitter.com/ukrightproperty" target="_blank">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.748 4.14148C28.748 4.14148 26.2257 5.63162 24.823 6.05398C24.0702 5.18837 23.0697 4.57484 21.9568 4.29638C20.8439 4.01793 19.6724 4.08797 18.6007 4.49704C17.5289 4.90612 16.6085 5.63448 15.9643 6.58362C15.3199 7.53277 14.9827 8.65689 14.998 9.80398V11.054C12.8013 11.1109 10.6246 10.6237 8.66181 9.63578C6.69897 8.64782 5.01095 7.18977 3.74805 5.39148C3.74805 5.39148 -1.25195 16.6415 9.99805 21.6415C7.42371 23.3889 4.357 24.2652 1.24805 24.1415C12.498 30.3915 26.248 24.1415 26.248 9.76648C26.2469 9.41829 26.2134 9.07097 26.148 8.72898C27.4238 7.47084 28.748 4.14148 28.748 4.14148Z" stroke="#525361" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
        <div>
            <ul className="flex flex-col gap-[1.875rem] text-[#83869D] text-end text[1.25rem] leading-[1.52375rem] mb-[5.3068rem]">
                <li>
                    <AnchorLink href="features">Features</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="onboarding">Onboarding</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="book-a-demo">Book A Demo</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="pricing">Pricing</AnchorLink>
                </li>
            </ul>
            <div className="text-[#525361] leading-[1rem]">
                Powered by <b>Rightsoft</b>
            </div>
        </div>
    </div>
}