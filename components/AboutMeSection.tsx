import { Card } from "@/components/ui/card"

export default function AboutMeSection() {
    return (
      <section id="aboutme" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">A propos de moi</h2>
            <Card className="bg-black/50 border-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-emerald-50">Informations Personnelles</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <strong>Langues:</strong> Français, Portugais, Anglais
                      </li>
                      <li>
                        <strong>Date de Naissance:</strong> 9 Septembre 2005
                      </li>
                      <li>
                        <strong>Lieu de Naissance:</strong> Neuchâtel, Suisse
                      </li>
                      <li>
                        <strong>Téléphone:</strong> +41 78 721 77 06
                      </li>
                      <li>
                        <strong>Email:</strong> PereiraDI2005@outlook.com
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-emerald-50">Intérets Personnels</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li> Développement Web </li>
                      <li> Montage / Démontage de PC </li>
                      <li> Séries animées </li>
                      <li> Mangas </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
    )
}