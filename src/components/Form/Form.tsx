"use client"
import Image from "next/image";
import { useState } from "react";
import { LiaPhoneSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

export function Form() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const getWhatsappLink = () => {
        const text = encodeURIComponent(
            `Hola, me interesa una propiedad de ImmoTech.\n\nNombre: ${name}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
        )
        return `https://wa.me/51907426378?text=${text}`
    }

    return (
        <div className="bg-white rounded-3xl shadow-light border border-slate-100 p-6">

            {/* Agente */}
            <div className="flex items-center gap-4 pb-5 border-b border-slate-100 mb-5">
                <Image
                    src="/assets/comercial/comercial-1.png"
                    alt="Agente comercial"
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-slate-800">Mabel Manturano</p>
                    <p className="text-secondary text-sm font-medium">Agente Comercial</p>
                </div>
            </div>

            {/* Campos */}
            <div className="flex flex-col gap-4">
                <div>
                    <label className="text-sm font-medium text-slate-600 mb-1.5 block">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre completo"
                        className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-slate-600 mb-1.5 block">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+51 9XX XXX XXX"
                        className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-slate-600 mb-1.5 block">Mensaje</label>
                    <textarea
                        name="description"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Estoy interesado en esta propiedad..."
                        className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all resize-none"
                    />
                </div>
            </div>

            {/* Botones */}
            <div className="flex gap-3 mt-5">
                <a
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                    <FaWhatsapp className="text-lg" />
                    Enviar por WhatsApp
                </a>
                <a
                    href="tel:+51907426378"
                    className="flex items-center justify-center gap-2 border border-secondary text-secondary px-4 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/10 transition-colors"
                >
                    <LiaPhoneSolid />
                    Llamar
                </a>
            </div>
        </div>
    )
}