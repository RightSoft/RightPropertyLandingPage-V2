export default function SlideElement({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col gap-4">
        {children}
    </div>
}