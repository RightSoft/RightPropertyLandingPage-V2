import { cn } from "../../lib/utils"

export default function Button({ ref,label, variant = 'primary', onClick,className }: { ref?: React.RefObject<HTMLButtonElement | null>, label: string, variant?: 'primary' | 'outline' | 'primaryLight', onClick?: () => void,className?:string }) {
    const variantClasses = {
        primary: 'bg-azure-light text-azure ',
        outline: 'bg-transparent text-azure border border-azure-light ',
        primaryLight: 'bg-blue-light text-navy '
    }
  
    
    return (
        <button ref={ref} onClick={onClick} className={`${cn(variantClasses[variant], 'cursor-pointer inline-block font-geist font-semibold leading-30px tracking-[0em] px-30 py-15 rounded-full','lg:py-[0.75rem] lg:text-18',className)} text-19`}>
            {label}
        </button>
    )
}