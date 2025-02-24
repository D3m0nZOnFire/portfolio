import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CertificatesSection() {
    return (
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificats</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: "Preliminary English Test B1",
                organization: "Cambridge English",
                year: 2024,
                description: "Le B1 Preliminary est un examen international sanctionnant un niveau intermédiaire (B1) de maîtrise de la langue anglaise.",
                pdfUrl: "/path-to-certificate.pdf",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-black/50 border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-emerald-50 text-xl font-semibold">{cert.title}</h3>
                      <p className="text-emerald-500">{cert.organization}</p>
                    </div>
                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                      {cert.year}
                    </Badge>
                  </div>
                  <p className="text-gray-400">{cert.description}</p>
                  <Link href={cert.pdfUrl} passHref target="_blank">
                      <Button
                        variant="ghost"
                        className="text-emerald-400 hover:text-emerald-500 hover:bg-emerald-500/10 p-0"
                      >
                        Voir Certification →
                      </Button>
                    </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}