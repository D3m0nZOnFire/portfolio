import { Icon } from "@iconify/react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="mb-8 rounded-full overflow-hidden border-4 border-emerald-500">
                <Image src="/placeholder.svg?height=200&width=200" alt="Ivo Pereira Dantas" width={200} height={200} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Ivo Pereira Dantas
                <span className="block text-emerald-400 mt-2">Informaticien d'Entreprise</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-4">
              <Link href={`mailto:PereiraDI2005@outlook.com`} className={`flex flex-col items-center text-center p-2 rounded-md transition-all duration-200 rounded-full hover:text-emerald-400 hover:bg-emerald-500/10`}>
                  <Icon icon={`ic:round-email`} className="w-8 h-8" />
                </Link>
                <Link href={`tel:+41787217706`} className={`flex flex-col items-center text-center p-2 rounded-md transition-all duration-200 rounded-full hover:text-emerald-400 hover:bg-emerald-500/10`}>
                  <Icon icon={`ic:round-phone`} className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}