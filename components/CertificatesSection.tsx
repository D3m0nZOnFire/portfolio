"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { certificates } from "@/resources/editableData";

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesSection() {
  const certificatesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (certificatesRef.current.length === 0) return;

    gsap.fromTo(
      certificatesRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5, // Adjusted for smooth transition
        stagger: 0.2,  // Stagger delay between certificates
        ease: "power2.out",
        scrollTrigger: {
          trigger: certificatesRef.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certificats</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              ref={(el) => {
                if(el) certificatesRef.current.push(el);
              }}
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