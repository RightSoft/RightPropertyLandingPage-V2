import { Helmet } from "react-helmet";
import Button from "../components/button";

export default function NotFoundPage() {
    const handleGoHome = () => {
        window.location.href = "/";
    };

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Right Property</title>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="canonical" href="https://rightproperty.app/" />
            </Helmet>
            <main className="rp-container min-h-screen flex flex-col items-center justify-center py-[7.5rem] lg:py-[5rem] lg:px-6">
                <div className="text-center max-w-[600px]">
                    <h1 className="mb-6 font-general-sans font-semibold text-80 lg:text-60 leading-[100%] tracking-[0em] text-squid-ink">
                        404
                    </h1>
                    <h2 className="mb-6 font-general-sans font-semibold text-48 lg:text-32 leading-[110%] tracking-[0em] text-squid-ink">
                        Page Not Found
                    </h2>
                    <p className="mb-12 lg:mb-8 font-geist font-normal text-20 lg:text-18 leading-[140%] tracking-[0em] text-squid-ink">
                        Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                    </p>
                    <Button 
                        onClick={handleGoHome}
                        label="Return to Home"
                        variant="primary"
                        className="lg:w-full"
                    />
                </div>
            </main>
        </>
    );
} 