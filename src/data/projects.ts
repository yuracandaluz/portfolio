import type { Bilingual } from '../i18n/LanguageContext'

export interface Project {
  id: string
  name: string
  year: number
  description: Bilingual
  technologies: string[]
  githubUrl?: string
  image?: string
}

// TODO: complete githubUrl and image for each project, and add up to 5 projects in total.
export const projects: Project[] = [
  {
    id: "invoke-hackathon",
    name: "Hackathon Microsoft Invoke",
    year: 2022,
    description: {
      pt: "1º lugar no hackathon da Microsoft em parceria com a PUC Minas, voltado para a placa de circuitos integrados Invoke.",
      en: "1st place at the Microsoft hackathon held with PUC Minas, built around the Invoke integrated circuit board.",
    },
    technologies: [], // TODO
  },
  {
    id: "crohn-app",
    name: "App iOS para pacientes com Doença de Crohn",
    year: 2025,
    description: {
      pt: "Projeto final do HackaTruck MakerSpace: aplicativo iOS para acompanhamento de medicamentos, hidratação, alimentação e atividade física, com foco em acessibilidade e experiência do usuário.",
      en: "Final project of the HackaTruck MakerSpace: an iOS app to track medication, hydration, nutrition and physical activity, focused on accessibility and user experience.",
    },
    technologies: ["Swift", "SwiftUI", "Cloud Services", "Cognitive Services", "IoT", "Node-RED"],
  },
  {
    id: "portfolio",
    name: "Portfólio profissional",
    year: 2026,
    description: {
      pt: "Este site: portfólio bilíngue com identidade editorial, construído com React e TypeScript e publicado na Vercel.",
      en: "This website: a bilingual portfolio with an editorial identity, built with React and TypeScript and deployed on Vercel.",
    },
    technologies: ["React", "TypeScript", "Vite", "React Router", "Vercel"],
    githubUrl: "https://github.com/yuracandaluz/portfolio",
  },
]
