"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() =>{
    if(!projectsRef.current) return;

    const projects = projectsRef.current.children;

    gsap.fromTo(
      projects,
      { opacity: 0, y: 50},
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3, // Délai entre chaque projet
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={projectsRef}>
          {[
            {
              title: "SchemaSuite",
              description:
                "SchemaSuite est un éditeur de schémas de réseau fibrés et électriques",
              tags: ["C#", "WPF"],
              link: "https://www.newis.ch/schemasuite/",
              image: "/images/SchemaSuite.png",
            },
            {
              title: "Less: Prise connectée",
              description:
                "Travail de TIP (travail inter-discipline centré sur un projet), ",
              tags: ["C++", "React-native", "Firebase"],
              image: "/placeholder.svg?height=200&width=400",
            },
            {
              title: "Bot Discord",
              description:
                "Bot discord multi-fonctions. Utilisé sur un serveur de plus de 1000 membres",
              tags: ["MongoDB", "Node.js", "discord.js"],
              image: null,
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="bg-black/50 border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              {project.image ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full object-cover aspect-video"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-emerald-950/20" />
                )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-50">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-emerald-500/50 text-emerald-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Link href={project.link} passHref target="_blank">
                    <Button
                      variant="ghost"
                      className="text-emerald-400 hover:text-emerald-500 hover:bg-emerald-500/10 p-0"
                    >
                      Voir Projet →
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}