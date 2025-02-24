import { Card } from "@/components/ui/card"
import { Icon } from "@iconify/react"

export default function SkillsSection() {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Connaissances</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkillCategory
              title="Languages"
              skills={[
                { name: "C#", icon: "logos:c-sharp", Highlight: true },
                { name: "JavaScript", icon: "logos:javascript", Highlight: true },
                { name: "HTML", icon: "logos:html-5" },
                { name: "CSS", icon: "logos:css-3" },
                { name: "PHP", icon: "logos:php" },
                { name: "Kotlin", icon: "logos:kotlin" },
                { name: "Markdown", icon: "teenyicons:markdown-outline" },
                { name: "Bash", icon: "logos:bash" },
              ]}
            />
            <SkillCategory
              title="Frameworks & Technologies"
              skills={[
                { name: "Node.js", icon: "logos:nodejs", Highlight: true },
                { name: "MySQL", icon: "logos:mysql", Highlight: true },
                { name: "React", icon: "logos:react" },
                { name: "MongoDB", icon: "logos:mongodb" },
                { name: "Firebase", icon: "logos:firebase" },
              ]}
            />
            <SkillCategory
              title="Outils & IDEs"
              skills={[
                { name: "Figma", icon: "logos:figma", Highlight: true },
                { name: "Git", icon: "logos:git", Highlight: true },
                { name: "Notion", icon: "logos:notion-icon", Highlight: true },
                { name: "Visual Studio", icon: "logos:visual-studio", Highlight: true },
                { name: "VS Code", icon: "logos:visual-studio-code", Highlight: true },
                { name: "Windows", icon: "logos:microsoft-windows", Highlight: true },
                { name: "GitHub", icon: "logos:github-icon" },
                { name: "GitLab", icon: "logos:gitlab" },
                { name: "Linux", icon: "logos:linux-tux" },
                { name: "Ubuntu", icon: "logos:ubuntu" },
                { name: "CodePen", icon: "skill-icons:codepen-light" },
              ]}
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
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="bg-black/50 border-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-emerald-50">{title}</h3>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} 
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