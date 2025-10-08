import Link from "next/link"

export default function Header() {
    return (
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Ivo Pereiras Dantas
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#aboutme" className="hover:text-emerald-400 transition-colors">
            A propos de moi
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#projects" className="hover:text-emerald-400 transition-colors">
            Projets
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#skills" className="hover:text-emerald-400 transition-colors">
            Connaissances
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#certificates" className="hover:text-emerald-400 transition-colors">
            Certificats
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#formations" className="hover:text-emerald-400 transition-colors">
            Formations
          </Link>
        </div>
      </nav>
    </header>
    )
}