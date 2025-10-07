"use client";
import { useEffect, useRef, useState, useMemo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeroSection from "@/components/HeroSection"
import Header from "@/components/Header"
import AboutMeSection from "@/components/AboutMeSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import CertificatesSection from "@/components/CertificatesSection"
import FormationSection from "@/components/FormationSection"

gsap.registerPlugin(ScrollTrigger);


export default function Portfolio() {
  const sectionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    if (!sectionsRef.current) return;

    const sections = sectionsRef.current.children;

    gsap.utils.toArray<HTMLElement>(sections).forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Gradient Overlay */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[800px] bg-emerald-500 opacity-20 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[700px] bg-emerald-500 opacity-20 blur-[120px] animate-pulse-slow" />
        </div>

        {/* Content */}
        <div className="relative">
            <Header />
            <div ref={sectionsRef}>
              <HeroSection />
              <AboutMeSection />
              <ProjectsSection />
              <SkillsSection />
              <CertificatesSection />
              <FormationSection />
            </div>
            
        </div>
      </div>
    </>
  )
}