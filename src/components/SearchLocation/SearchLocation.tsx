"use client"
import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'
 
const locations = [
    "Miraflores",
    "San Isidro",
    "Barranco",
    "La Molina",
    "Santiago de Surco",
    "San Borja",
]
 
interface SearchLocationProps {
    value: string
    onChange: (value: string) => void
}
 
export function SearchLocation({ value, onChange }: SearchLocationProps) {
    const [isOpen, setIsOpen] = useState(false)
 
    const handleSelect = (loc: string) => {
        onChange(loc === value ? "" : loc) // si clickeas el mismo, lo deselecciona
        setIsOpen(false)
    }
 
    return (
        <div
            className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrLocation />
 
            <div className="flex-1">
                <p className="font-medium">Localizacion</p>
                <p className="text-xs text-slate-500">
                    {value || "Selecciona tu localizacion"}
                </p>
            </div>
 
            {isOpen ? <GrFormUp /> : <GrFormDown />}
 
            {isOpen && (
                <div
                    className="absolute top-[70px] bg-white z-50 p-2 rounded-lg shadow-lg w-[220px] left-0 border border-slate-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {locations.map((loc) => (
                        <div
                            key={loc}
                            onClick={() => handleSelect(loc)}
                            className={`px-4 py-2 rounded-md cursor-pointer text-sm transition-colors
                                ${value === loc
                                    ? "bg-secondary text-white font-semibold"
                                    : "hover:bg-slate-100 text-slate-700"
                                }`}
                        >
                            {loc}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}