import HeroSection from "@/components/HeroSection"
import Header from "@/components/Header"
import AboutMeSection from "@/components/AboutMeSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import CertificatesSection from "@/components/CertificatesSection"
import FormationSection from "@/components/FormationSection"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[800px] bg-emerald-500 opacity-20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[700px] bg-emerald-500 opacity-20 blur-[120px] animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <FormationSection />
      </div>
    </div>
  )
}