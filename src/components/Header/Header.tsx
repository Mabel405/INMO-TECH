"use client"

import { CiMenuFries } from 'react-icons/ci'
import { BsTelephone, BsPerson } from 'react-icons/bs' // Añadido icono de persona
import Link from "next/link"
import { Navbar } from '../Navbar'
import { useState, useEffect } from 'react'

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between bg-white/40 md:bg-transparent p-2 md:p-0 rounded-2xl">
          
          {/* Logo con un toque más moderno */}
          <Link href="/" className="group flex items-center gap-1 text-2xl font-extrabold tracking-tight">
            <span className="text-slate-900">Inmo</span>
            <span className="text-secondary group-hover:text-slate-700 transition-colors">Tech</span>
          </Link>

          {/* Menú de Navegación Central */}
          <div className="hidden md:block">
             <Navbar openMobileMenu={openMobileMenu} />
          </div>

          {/* Acciones de la derecha */}
          <div className='flex items-center gap-3 lg:gap-6'>
            {/* Teléfono: Más visible y con diseño de "píldora" sutil */}
            <Link 
              href="tel:907426378" 
              className='hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-secondary transition-all'
            >
              <div className="p-2 bg-secondary/10 rounded-full">
                <BsTelephone className="text-secondary" />
              </div>
              <span>+51 907 426 378</span>
            </Link>

            {/* Hamburguesa Mobile: Mejorada */}
            <button 
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="md:hidden p-2.5 text-2xl rounded-xl bg-slate-100 text-slate-700 hover:bg-secondary hover:text-white transition-all"
            >
              <CiMenuFries />
            </button>
          </div>
        </div>
      </div>
      
      {/* Navbar Mobile (Overlay) si es necesario */}
      {openMobileMenu && (
        <div className="md:hidden">
             <Navbar openMobileMenu={openMobileMenu} />
        </div>
      )}
    </header>
  )
}