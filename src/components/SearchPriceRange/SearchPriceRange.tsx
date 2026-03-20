"use client"
import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

const priceRanges = [
    { label: "Cualquier precio",   value: "" },
    { label: "Hasta $250,000",     value: "0-250000" },
    { label: "$250,000 - $500,000", value: "250000-500000" },
    { label: "$500,000 - $800,000", value: "500000-800000" },
    { label: "Más de $800,000",    value: "800000-99999999" },
]

interface SearchPriceRangeProps {
    value: string
    onChange: (value: string) => void
}

export function SearchPriceRange({ value, onChange }: SearchPriceRangeProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (rangeValue: string) => {
        onChange(rangeValue)
        setIsOpen(false)
    }

    const selectedLabel = priceRanges.find(r => r.value === value)?.label

    return (
        <div
            className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrTag />

            <div className="flex-1">
                <p className="font-medium">Rango de precio</p>
                <p className="text-xs text-slate-500">
                    {selectedLabel || "Selecciona tu rango de precio"}
                </p>
            </div>

            {isOpen ? <GrFormUp /> : <GrFormDown />}

            {isOpen && (
                <div
                    className="absolute top-[70px] bg-white z-50 p-2 rounded-lg shadow-lg w-[230px] left-0 border border-slate-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {priceRanges.map((range) => (
                        <div
                            key={range.value}
                            onClick={() => handleSelect(range.value)}
                            className={`px-4 py-2 rounded-md cursor-pointer text-sm transition-colors
                                ${value === range.value
                                    ? "bg-secondary text-white font-semibold"
                                    : "hover:bg-slate-100 text-slate-700"
                                }`}
                        >
                            {range.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}