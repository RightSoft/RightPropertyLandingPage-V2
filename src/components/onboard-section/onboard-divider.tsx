export default function OnboardDivider() {
    return <div className="flex flex-col items-center gap-[3.75rem] ">
        <>  <svg className="mobile:hidden" width="4" height="234" viewBox="0 0 4 234" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="0.730103" x2="1.99999" y2="233.6" stroke="url(#paint0_linear_592_3511)" stroke-width="3" />
            <defs>
                <linearGradient id="paint0_linear_592_3511" x1="0" y1="0.730103" x2="-1.01791e-05" y2="233.6" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.375" stop-color="#03D4FB" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
            <svg className="hidden mobile:block" width="375" height="3" viewBox="0 0 375 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.243164" y1="1.02441" x2="375.243" y2="1.02441" stroke="url(#paint0_linear_809_4586)" stroke-width="2" />
                <defs>
                    <linearGradient id="paint0_linear_809_4586" x1="0.243164" y1="2.52441" x2="375.243" y2="2.52441" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0" />
                        <stop offset="0.375" stop-color="#03D4FB" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        </>


    </div>
}