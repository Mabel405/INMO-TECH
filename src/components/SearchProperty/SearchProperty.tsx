"use client"
import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

const propertyTypes = [
    "Departamento",
    "Casa",
    "Penthouse",
    "Loft",
    "Flat",
    "Dúplex",
]

interface SearchPropertyProps {
    value: string
    onChange: (value: string) => void
}

export function SearchProperty({ value, onChange }: SearchPropertyProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (type: string) => {
        onChange(type === value ? "" : type)
        setIsOpen(false)
    }

    return (
        <div
            className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrHome />

            <div className="flex-1">
                <p className="font-medium">Propiedad</p>
                <p className="text-xs text-slate-500">
                    {value || "Selecciona el tipo de propiedad"}
                </p>
            </div>

            {isOpen ? <GrFormUp /> : <GrFormDown />}

            {isOpen && (
                <div
                    className="absolute top-[70px] bg-white z-50 p-2 rounded-lg shadow-lg w-[220px] left-0 border border-slate-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {propertyTypes.map((type) => (
                        <div
                            key={type}
                            onClick={() => handleSelect(type)}
                            className={`px-4 py-2 rounded-md cursor-pointer text-sm transition-colors
                                ${value === type
                                    ? "bg-secondary text-white font-semibold"
                                    : "hover:bg-slate-100 text-slate-700"
                                }`}
                        >
                            {type}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}