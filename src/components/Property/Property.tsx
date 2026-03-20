'use client'

import Image from "next/image"
import Link from "next/link"
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid, LiaMapMarkerSolid, LiaArrowLeftSolid } from "react-icons/lia"
import { formatPrice } from "@/utils/formatPrice"
import { Transition } from "../Transition"
import { PropertyProps } from "./Property.types"
import { Form } from "../Form"

interface PropertyComponentProps {
    house: PropertyProps;
}

export function Property({ house }: PropertyComponentProps) {
    return (
        <Transition className="container mx-auto px-4 my-12 md:my-24">

            <Link
                href="/"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors mb-8 font-medium"
            >
                <LiaArrowLeftSolid className="text-lg" />
                Volver a propiedades
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8 items-start">

                {/* Columna izquierda — imagen + info */}
                <div className="bg-white rounded-3xl shadow-light border border-slate-100 overflow-hidden">

                    {/* Imagen */}
                    <div className="relative h-[350px] md:h-[480px] w-full overflow-hidden">
                        <Image
                            src={`/assets/properties/${house.image}`}
                            alt={house.location}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 text-secondary shadow-sm">
                            <LiaStarSolid className="text-yellow-400" />
                            <span className="text-sm font-bold">{house.star}</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="px-8 py-8">
                        <div className="flex items-center gap-2 text-secondary mb-2">
                            <LiaMapMarkerSolid className="text-xl" />
                            <p className="font-medium">{house.location}</p>
                        </div>

                        <p className="font-extrabold text-4xl text-slate-900 mb-6">
                            {formatPrice(house.price)}
                        </p>

                        <p className="text-slate-500 leading-relaxed mb-8">
                            {house.description}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50">
                                <LiaBedSolid className="text-2xl text-slate-600" />
                                <span className="text-sm font-bold mt-2">{house.bedrooms}</span>
                                <span className="text-xs text-slate-400">Habitaciones</span>
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50">
                                <LiaBathSolid className="text-2xl text-slate-600" />
                                <span className="text-sm font-bold mt-2">{house.bathroom}</span>
                                <span className="text-xs text-slate-400">Baños</span>
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50">
                                <LiaRulerCombinedSolid className="text-2xl text-slate-600" />
                                <span className="text-sm font-bold mt-2">{house.meters} m²</span>
                                <span className="text-xs text-slate-400">Superficie</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna derecha — formulario sticky */}
                <div className="lg:sticky lg:top-24">
                    <Form />
                </div>

            </div>
        </Transition>
    )
}