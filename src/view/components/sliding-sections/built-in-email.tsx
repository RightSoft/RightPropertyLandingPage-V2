import builtInEmail from "@/assets/built-in-email.png";
import builtInEmailMobile from "@/assets/email_mobile.png";
export default function BuiltInEmail() {
    return (
        <div className="lg:bg-[#F5F5F5] lg:h-[42rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex lg:flex-col gap-[8.4375rem] items-center justify-center lg:gap-[2.25rem]">
                    <img className="lg:hidden w-[33.125rem] lg:w-full h-auto lg:px-2" src={builtInEmail} alt="Fully interactive project website" />
                    <img className="hidden lg:block lg:w-full h-auto lg:px-2" src={builtInEmailMobile} alt="Fully interactive project website" />

                    <div className="flex flex-col">
                        <p className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            Built-in Email Marketing
                        </p>
                        <h2 className="mb-10 font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                            Built-in email creation and campaign management, reaching potential buyers has never been easier.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}