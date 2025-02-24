import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FormationSection() {
    return (
      <section id="formations" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Formations</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-6 top-0 transform -translate-x-1/2 w-px bg-emerald-500/20 h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/50 to-emerald-500/50 bg-[length:1px_8px] bg-repeat-y"></div>
              </div>

              {/* Formation Items */}
              {[
                {
                  title: "CFC d'Informaticien d'Entreprise",
                  institution: "CPNE-TI, Neuchâtel",
                  year: "2021 - 2025",
                  description: "",
                },
                {
                  title: "École Degré Secondaire",
                  institution: "La Fontenelle, Cernier",
                  year: "2018 - 2021",
                  description: "",
                },
                {
                  title: "École Degré Primaire",
                  institution: "Collège Le Lynx, Les Geneveys-sur-Coffrane",
                  year: "2010 - 2018",
                  description: "",
                },
              ].map((formation, index) => (
                <div key={index} className="mb-8 flex items-start pl-12">
                  <div className="absolute left-6 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-black" />
                  </div>
                  <Card className="flex-grow bg-black/50 border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-emerald-50 text-xl font-semibold">{formation.title}</h3>
                          <p className="text-emerald-500">{formation.institution}</p>
                        </div>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                          {formation.year}
                        </Badge>
                      </div>
                      <p className="text-gray-400">{formation.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}