"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { skills } from "@/resources/editableData";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (iconsRef.current.length === 0) return;

    const groupedIcons: HTMLDivElement[][] = [];
    for (let i = 0; i < iconsRef.current.length; i += 3) {
      groupedIcons.push(iconsRef.current.slice(i, i + 3).filter(Boolean) as HTMLDivElement[]);
    }

    groupedIcons.forEach((group, index) => {
      gsap.fromTo(
        group,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3, // Décalage progressif entre chaque trio
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Connaissances</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SkillCategory
            title="Languages"
            skills={skills.languages}
            iconsRef={iconsRef}
          />
          <SkillCategory
            title="Frameworks & Technologies"
            skills={skills.frameworks}
            iconsRef={iconsRef}
          />
          <SkillCategory
            title="Outils & IDEs"
            skills={skills.tools}
            iconsRef={iconsRef}
          />
        </div>
      </div>
    </section>
  )
}

interface Skill {
  name: string;
  icon: string;
  Highlight?: boolean;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  iconsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function SkillCategory({ title, skills, iconsRef }: SkillCategoryProps) {
  return (
    <Card className="bg-black/50 border-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-emerald-50">{title}</h3>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={skill.name} 
              ref={(el) => {
                if(el) iconsRef.current.push(el);
              }}
              className={`flex flex-col items-center text-center p-2 rounded-md rounded-lg ${
                skill.Highlight 
                ? "bg-emerald-500/10 scale-110 transform transition-all duration-300 hover:bg-emerald-500/20"
                : "hover:bg-white/5 transition-all duration-300"
              }`}>
              <Icon icon={skill.icon} className="w-8 h-8 mb-2" />
              <span className="text-sm text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}