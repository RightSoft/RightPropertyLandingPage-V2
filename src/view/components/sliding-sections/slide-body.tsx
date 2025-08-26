import BlueExploreButton from "../blue-explore-button"
import BookADemoButton from "../book-a-demo-button"

export default function SlideBody({ caption, title, description, buttonType }: { caption: string, title: string, description: string, buttonType?: string }) {


    const ElementButton = () => {
        switch (buttonType) {
            case "book":
                return <BookADemoButton />
            default:
                return <BlueExploreButton className="uppercase" href="meet-right-property" title="Learn More" />
        }
    }


    return <div className="p-6 bg-white h-[27.5rem] flex flex-col">
        <div className="font-geist-mono text-sm font-medium mb-4 uppercase text-[#232323]">
            {caption}
        </div>
        <div className="font-general-sans text-32 leading-[130%] -tracking-[0.01em] mb-6 text-[#232323]">
            {title}
        </div>
        <div className="grow font-geist text-24 font-normal leading-[130%] -tracking-[0.01em] text-[#434343] mb-[2rem]">
            {description}
        </div>

        <ElementButton />
    </div>
}