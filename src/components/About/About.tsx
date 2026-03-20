"use client"
import Image from "next/image"
import { Transition } from "../Transition"
import { LiaAwardSolid, LiaUsersSolid, LiaMapMarkerSolid, LiaHandshakeSolid } from "react-icons/lia"

const stats = [
    { icon: <LiaAwardSolid className="text-3xl" />, value: "10+", label: "Años de experiencia" },
    { icon: <LiaUsersSolid className="text-3xl" />, value: "2,400+", label: "Clientes satisfechos" },
    { icon: <LiaMapMarkerSolid className="text-3xl" />, value: "6", label: "Distritos exclusivos" },
    { icon: <LiaHandshakeSolid className="text-3xl" />, value: "1,800+", label: "Propiedades vendidas" },
]

export function About() {
    return (
        <Transition className="py-16 md:py-32" id="about">

            {/* Grid principal */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Imagen */}
                <div className="relative">
                    <div className="relative h-[400px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/about/about-1.jpg"
                            alt="Sobre nosotros"
                            fill
                            className="object-cover"
                        />
                        {/* Badge flotante */}
                        <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-lg">
                            <p className="text-3xl font-bold text-slate-800">10+</p>
                            <p className="text-sm text-slate-500">Años en el mercado inmobiliario</p>
                        </div>
                    </div>
                </div>

                {/* Contenido */}
                <div>
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Sobre nosotros</span>
                    <h2 className="mt-3 mb-6 text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                        Tu hogar ideal en Lima, con expertos de confianza
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Somos una inmobiliaria especializada en los distritos más exclusivos de Lima. 
                        Desde Miraflores hasta La Molina, conectamos a familias y profesionales con 
                        las propiedades que mejor se adaptan a su estilo de vida.
                    </p>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                        Nuestro equipo de agentes certificados te acompaña en cada etapa del proceso, 
                        desde la primera visita hasta la firma del contrato, garantizando transparencia 
                        y seguridad en cada transacción.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24">
                {stats.map(({ icon, value, label }) => (
                    <div key={label} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-secondary/10 transition-colors duration-300">
                        <div className="text-secondary mb-3">{icon}</div>
                        <p className="text-3xl font-bold text-slate-800 mb-1">{value}</p>
                        <p className="text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </div>

        </Transition>
    )
}