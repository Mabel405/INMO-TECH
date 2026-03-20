import { RiSearch2Line } from 'react-icons/ri'
 
interface SearchButtonProps {
    onClick: () => void
}
 
export function SearchButton({ onClick }: SearchButtonProps) {
    return (
        <div
            onClick={onClick}
            className="gap-4 border-[1px] rounded-lg px-14 py-2 bg-secondary flex items-center text-white justify-center cursor-pointer hover:opacity-90 transition-opacity"
        >
            <RiSearch2Line />
        </div>
    )
}
 