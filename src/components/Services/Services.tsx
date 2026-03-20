"use client"
import { Transition } from "../Transition"
import { Slider } from "./Slider"
import { LiaHomeSolid, LiaHandshakeSolid, LiaShieldAltSolid } from "react-icons/lia"

export function Services() {
    return (
        <Transition className="py-16 md:py-32" id="services">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* Columna izquierda */}
                <div>
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Servicios</span>
                    <h2 className="mt-3 mb-6 text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                        Promociona tu vivienda para alquilarla
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                        Te ayudamos a publicar, gestionar y alquilar tu propiedad de forma rápida y segura.
                        Conectamos propietarios con los mejores inquilinos en los distritos más exclusivos de Lima.
                    </p>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-start gap-5">
                            <div className="p-4 rounded-2xl bg-secondary/10 text-secondary shrink-0">
                                <LiaHomeSolid className="text-3xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 text-lg mb-1">Publica tu propiedad gratis</h4>
                                <p className="text-slate-500">Crea tu anuncio en minutos y llega a miles de interesados en toda Lima.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="p-4 rounded-2xl bg-secondary/10 text-secondary shrink-0">
                                <LiaHandshakeSolid className="text-3xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 text-lg mb-1">Asesoría personalizada</h4>
                                <p className="text-slate-500">Nuestros agentes te guían en cada paso del proceso de alquiler o venta.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="p-4 rounded-2xl bg-secondary/10 text-secondary shrink-0">
                                <LiaShieldAltSolid className="text-3xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 text-lg mb-1">Transacciones seguras</h4>
                                <p className="text-slate-500">Verificamos a todos los usuarios para garantizar operaciones confiables.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna derecha - Slider */}
                <div className="flex items-center justify-center">
                    <Slider />
                </div>

            </div>
        </Transition>
    )
}