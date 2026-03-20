"use client"
import { useState } from "react"
import { SearchButton } from "../SearchButton"
import { SearchLocation } from "../SearchLocation"
import { SearchPriceRange } from "../SearchPriceRange"
import { SearchProperty } from "../SearchProperty"
import { RiCloseLine } from "react-icons/ri"

interface FloatedSearchProps {
    onSearch: (filters: { location: string, type: string, priceRange: string }) => void
}

export function FloatedSearch({ onSearch }: FloatedSearchProps) {
    const [location, setLocation] = useState("")
    const [type, setType] = useState("")
    const [priceRange, setPriceRange] = useState("")

    const hasFilters = location || type || priceRange

    const handleSearch = () => {
        onSearch({ location, type, priceRange })
    }

    const handleClear = () => {
        setLocation("")
        setType("")
        setPriceRange("")
        onSearch({ location: "", type: "", priceRange: "" })
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 px-3 bg-white rounded-md shadow-lg">
                <SearchLocation value={location} onChange={setLocation} />
                <SearchProperty value={type} onChange={setType} />
                <SearchPriceRange value={priceRange} onChange={setPriceRange} />
                <SearchButton onClick={handleSearch} />
            </div>

            {/* Solo aparece si hay algún filtro activo */}
            {hasFilters && (
                <div className="flex justify-end">
                    <button
                        onClick={handleClear}
                        className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 transition-colors bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200"
                    >
                        <RiCloseLine className="text-base" />
                        Limpiar filtros
                    </button>
                </div>
            )}
        </div>
    )
}