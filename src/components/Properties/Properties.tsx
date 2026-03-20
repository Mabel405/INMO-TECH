"use client"
import Link from "next/link"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia"
import Image from "next/image"
import { formatPrice } from "@/utils/formatPrice"
import { useState } from "react"
 
type Property = typeof dataProperties[number]
 
interface Props {
  data?: Property[]
}
 
export function Properties({ data = dataProperties }: Props) {
    const [counterHouses, setCounterHouses] = useState(8)
    const dataFilteredHouses = data.slice(0, counterHouses)
 
    const loadMoreHouses = () => {
        setCounterHouses(counterHouses + 6)
    }
 
    return (
        <Transition className="container mx-auto px-4 my-12 md:my-24" id="properties-section">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Nuestras Propiedades Exclusivas</h2>
                <p className="text-slate-500 mt-4 text-lg">Explora las mejores opciones en las zonas más privilegiadas.</p>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {dataFilteredHouses.map(({ id, location, price, bedrooms, bathroom, image, star, meters }) => (
                    <Link key={id} href={`/properties/${id}`}
                        className="group shadow-light hover:shadow-2xl rounded-3xl transition-all duration-500 bg-white overflow-hidden border border-slate-100">
                        
                        <div className="relative overflow-hidden">
                            <div className="absolute z-10 flex items-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm top-4 right-4 text-secondary shadow-sm">
                                <LiaStarSolid className="text-yellow-400" />
                                <span className="ml-1.5 font-bold text-sm">{star}</span>
                            </div>
 
                            <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden">
                                <Image 
                                    src={`/assets/properties/${image}`} 
                                    alt={location} 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
 
                            <div className="px-6 py-6">
                                <h3 className="text-secondary font-medium text-lg truncate">{location}</h3>
                                <p className="font-extrabold text-2xl mt-1 text-slate-900">{formatPrice(price)}</p>
                                
                                <div className="grid grid-cols-3 gap-2 mt-6">
                                    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 group-hover:bg-secondary/10 transition-colors">
                                        <LiaBedSolid className="text-2xl text-slate-600" />
                                        <span className="mt-1 font-semibold text-slate-800">{bedrooms} <small className="font-normal text-xs text-slate-500">Hab</small></span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 group-hover:bg-secondary/10 transition-colors">
                                        <LiaBathSolid className="text-2xl text-slate-600" />
                                        <span className="mt-1 font-semibold text-slate-800">{bathroom} <small className="font-normal text-xs text-slate-500">Baños</small></span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 group-hover:bg-secondary/10 transition-colors">
                                        <LiaRulerCombinedSolid className="text-2xl text-slate-600" />
                                        <span className="mt-1 font-semibold text-slate-800">{meters} <small className="font-normal text-xs text-slate-500">m²</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
 
            <div className="flex justify-center mt-16">
                {counterHouses < data.length && (
                    <button 
                        className="px-10 py-4 text-white font-bold text-lg transition-all duration-300 cursor-pointer bg-slate-900 rounded-2xl hover:bg-secondary hover:shadow-lg active:scale-95"
                        onClick={loadMoreHouses}
                    >
                        Ver más propiedades
                    </button>
                )} 
            </div>
        </Transition>
    )
}