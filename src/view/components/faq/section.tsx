import FaqItem from "./faq-item"

export default function FaqSection() {
    const faqData: Record<string, string | React.ReactNode>[] = [
        {
            question: "How long does it take to set up Right Property?",
            answer: <ul className="list-disc list-inside">
                <li>2D Setup can be completed in as little as 48 hours.</li>
                <li>3D Setup takes 4–6 weeks, depending on project complexity.</li>
            </ul>
        },
        {
            question: "What makes Right Property different from other solutions?",
            answer: <ul className="list-disc list-inside">
                <li>Unlike other tools, Right Property is offering a non-linear, interactive presentation mode, a built-in CRM, and a fully integrated sales & marketing platform—all in one seamless experience. We get you started with precisely what your business needs. No second guessing, no hassles!</li>
            </ul>
        },
        {
            question: "Is Right Property only for large developments?",
            answer: <ul className="list-disc list-inside">
                <li>Not at all! Whether your project is small or large, you get the same high-quality service and experience.</li>
                <li>Our pricing is budget-friendly and scales with your needs, with no hidden fees or surprises.</li>
            </ul>
        },
        {
            question: "What kind of support do you offer?",
            answer: <ul className="list-disc list-inside">
                <li>We provide full onboarding support, ensuring a smooth setup.</li>
                <li>Ongoing support includes technical assistance, updates, and expert guidance to help you get the most out of Right Property.</li>
            </ul>
        },
        // {
        //     question: "Does it work with my existing CRM?",
        // },
        {
            question: "Can I upgrade from 2D to 3D later?",
            answer: <ul className="list-disc list-inside">
                <li>Yes! You can start with 2D for a faster and more budget-friendly setup and upgrade to 3D anytime when you’re ready for an immersive experience.</li>
            </ul>
        },
        {
            question: "Do I need existing marketing materials to use Right Property?",
            answer: <ul className="list-disc list-inside">
                <li>If you already have site plans, renders, videos, and other assets, you can upload them directly.</li>
                <li>If not, we can help create high-quality visualizations to bring your project to life.</li>
            </ul>
        },
        {
            question: "Does the Right Property website replace traditional listing platforms?",
            answer: <ul className="list-disc list-inside">
                <li>
                    Not necessarily—but it removes your reliance on them.
                </li>
                <li>
                    Your fully interactive website is SEO-ready, integrates with Google Analytics, and provides real-time tracking, ensuring you can generate leads independently.
                </li>
            </ul>
        },
        {
            question: "How does pricing work?",
            answer: <ul className="list-disc list-inside">
                <li>
                    Pricing depends on project complexity, but Right Property is the most budget-friendly solution available.

                </li>
                <li>
                    You can start with 2D and upgrade as your needs grow.

                </li>
                <li>
                    Click to visit our calculator to get an estimate.
                </li>
            </ul>
        },
        {
            question: "Do I need to purchase hardware?",
            answer: <ul className="list-disc list-inside">
                <li>
                    RP works with all available touchscreens.
                </li>
            </ul>
        },
    ]
    return <section className="rp-container py-[7.5rem] px-[11.75rem] lg:px-0 lg:py-[5rem]" aria-label="Frequently asked questions about Right Property platform">
        <div className="flex flex-col items-center lg:items-start">
            <p className="mb-4 lg:mb-3 lg:px-6 font-geist-mono text-base lg:text-14 font-normal leading-[150%] tracking-[0.04em] uppercase">
                Have a question?
            </p>
            <h2 className="text-center mb-[6rem] lg:text-left lg:mb-[3.5rem] lg:px-6 font-general-sans text-80 lg:text-40 font-semibold leading-[100%] tracking-[0em]">
                Most frequent questions<br />and answers
            </h2>
            <div className="flex gap-6 lg:flex-col lg:gap-2">
                <div className="flex-1 space-y-6 lg:space-y-2">
                    {faqData.slice(0, 5).map((item, index) => (
                        <div className="">
                            <FaqItem key={index} question={item.question} answer={item.answer} />
                        </div>
                    ))}
                </div>
                <div className="flex-1 space-y-6 lg:space-y-2">
                    {faqData.slice(5).map((item, index) => (
                        <div className="">
                            <FaqItem key={index} question={item.question} answer={item.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}