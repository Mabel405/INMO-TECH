import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-[1fr,1fr,1fr,320px]">

          {/* Columnas de links */}
          {dataFooter.map(({ id, title, links }) => (
            <div key={id}>
              <h5 className="text-white font-semibold mb-5 uppercase tracking-widest text-sm">
                {title}
              </h5>
              {links.map(({ id, name, link }) => (
                <Link
                  key={id}
                  href={link}
                  className="block mb-3 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {name}
                </Link>
              ))}
            </div>
          ))}

          {/* Columna empresa */}
          <div className="col-span-2 md:col-span-1 md:text-right">
            <h4 className="mb-2 text-2xl font-bold text-white">ImmoTech</h4>
            <p className="text-secondary font-medium mb-4 text-sm">Tu hogar en Lima, con expertos</p>
            <p className="text-slate-400 text-sm">Av. El Derby 254, Surco</p>
            <p className="text-slate-400 text-sm">Lima, Perú</p>
            <p className="text-slate-400 text-sm mt-1">+51 901 425 870</p>

            <div className="flex gap-4 mt-6 md:justify-end">
              <Link href="#!" className="p-2 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-200">
                <LiaInstagram className="text-xl" />
              </Link>
              <Link href="#!" className="p-2 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-200">
                <LiaLinkedinIn className="text-xl" />
              </Link>
              <Link href="#!" className="p-2 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-200">
                <LiaPinterestP className="text-xl" />
              </Link>
              <Link href="#!" className="p-2 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-200">
                <LiaYoutube className="text-xl" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ImmoTech. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Lima, Perú</p>
        </div>
      </div>
    </footer>
  )
}