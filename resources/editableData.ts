export const formations = [
    {
        title: "Bachelor en Informatique et systèmes de communication",
        institution: "He-Arc, Neuchâtel",
        year: "2025 - Présent",
        description: "Orientation Informatique logicielle",
    },
    {
        title: "CFC d'Informaticien d'Entreprise",
        institution: "CPNE-TI, Neuchâtel",
        year: "2021 - 2025",
        description: "Avec maturité professionnelle integrée",
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
]

export const certificates = [
    {
        title: "Preliminary English Test B1",
        organization: "Cambridge English",
        year: 2024,
        description: "Le B1 Preliminary est un examen international sanctionnant un niveau intermédiaire (B1) de maîtrise de la langue anglaise.",
        pdfUrl: "/path-to-certificate.pdf",
    },
]

export const projects = [
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
        link: "https://drive.google.com/file/d/1hvJiYEhNpbW4Z7KJWRFo3swWo3aGMnDn/view?usp=drive_link",
        image: "/images/prise_connectee.png",
    },
    {
        title: "Bot Discord",
        description:
        "Bot discord multi-fonctions. Utilisé sur un serveur de plus de 10'000 membres",
        tags: ["MongoDB", "Node.js", "discord.js"],
        image: null,
    },
]

export const skills = {
    languages: [
        { name: "C#", icon: "logos:c-sharp", Highlight: true },
        { name: "JavaScript", icon: "logos:javascript", Highlight: true },
        { name: "HTML", icon: "logos:html-5" },
        { name: "CSS", icon: "logos:css-3" },
        { name: "PHP", icon: "logos:php" },
        { name: "Kotlin", icon: "logos:kotlin" },
        { name: "Markdown", icon: "teenyicons:markdown-outline" },
        { name: "Bash", icon: "logos:bash" },
    ],
    frameworks: [
        { name: "Node.js", icon: "logos:nodejs", Highlight: true },
        { name: "MySQL", icon: "logos:mysql", Highlight: true },
        { name: "React", icon: "logos:react" },
        { name: "MongoDB", icon: "logos:mongodb" },
        { name: "Firebase", icon: "logos:firebase" },
    ],
    tools: [
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
    ],
}