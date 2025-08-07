interface RevealItemsIndicatorProps {
    items: number;
    currentItem: number;
}

export default function RevealItemsIndicator({ items, currentItem }: RevealItemsIndicatorProps) {
    return <div className="flex flex-col justify-center items-center gap-[1rem]">
        {Array.from({ length: items }).map((_, index) => (
            <div key={index} className={`w-[1px] h-[5.375rem] rounded-full ${currentItem === index ? 'w-[4px] bg-[#FF9985]' : 'bg-[#53B5EE]'}`} />
        ))}
    </div>
}