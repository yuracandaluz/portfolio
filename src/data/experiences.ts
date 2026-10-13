import type { Bilingual } from '../i18n/LanguageContext'

export interface Experience {
  id: string
  organization: string
  role: Bilingual
  period: Bilingual
  location?: string
  description: Bilingual
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: "minas-conecta",
    organization: "MINAS Conecta",
    role: { pt: "Fundadora e Tech Community Manager", en: "Founder & Tech Community Manager" },
    period: { pt: "Jan 2024 – presente", en: "Jan 2024 – Present" },
    location: "Belo Horizonte, MG",
    description: {
      pt: "Fundei e lidero a primeira comunidade de alunas do ICEI da PUC Minas, hoje com mais de 300 participantes. Organizo eventos e trilhas de desenvolvimento, estabeleço parcerias institucionais e promovo ações de diversidade e inclusão em tecnologia.",
      en: "I founded and lead the first community of female students at PUC Minas' ICEI, now with 300+ members. I organize events and learning tracks, build institutional partnerships and promote diversity and inclusion in tech.",
    },
    tags: ["Community management", "Strategy", "Partnerships", "Events"],
  },
  {
    id: "google-ambassador",
    organization: "Google",
    role: { pt: "Embaixadora Estudantil", en: "Student Ambassador" },
    period: { pt: "Ago 2026 – Out 2026", en: "Aug 2026 – Oct 2026" },
    description: {
      pt: "Integrante do programa Embaixadores Estudantis do Google 2026.",
      en: "Member of the Google Student Ambassadors program 2026.",
    },
    tags: ["Education", "Community"],
  },
  {
    id: "friends-of-figma",
    organization: "Friends of Figma, Belo Horizonte",
    role: { pt: "Líder de Parcerias e Patrocínios", en: "Partnerships and Sponsorship Lead" },
    period: { pt: "Fev 2026 – Jul 2026", en: "Feb 2026 – Jul 2026" },
    location: "Belo Horizonte, MG",
    description: {
      pt: "Responsável por construir parcerias estratégicas que fortalecem a comunidade de design de Belo Horizonte.",
      en: "Responsible for building strategic partnerships that strengthen the Belo Horizonte design community.",
    },
    tags: ["Partnerships", "Sponsorship", "Design community"],
  },
  {
    id: "dti-digital",
    organization: "dti digital",
    role: { pt: "Estagiária de Engenharia de Software (iOS)", en: "Software Engineering Intern (iOS)" },
    period: { pt: "Set 2025 – Jun 2026", en: "Sep 2025 – Jun 2026" },
    location: "Belo Horizonte, MG",
    description: {
      pt: "Atuei no desenvolvimento de um aplicativo iOS nativo para um cliente internacional, em uma equipe multidisciplinar e internacional. Participei de todo o ciclo das funcionalidades, da análise à implementação, com testes, correção de bugs, Pull Requests e code reviews.",
      en: "I worked on a native iOS app for an international client, in a multidisciplinary international team. I took part in the full feature cycle, from analysis to implementation, including testing, bug fixing, Pull Requests and code reviews.",
    },
    tags: ["Swift", "SwiftUI", "UIKit", "Xcode", "Git", "REST APIs"],
  },
  {
    id: "aspire-leaders",
    organization: "Aspire Institute",
    role: { pt: "Global Leadership Fellow – Aspire Leaders Program", en: "Global Leadership Fellow – Aspire Leaders Program" },
    period: { pt: "Ago 2025 – Out 2025", en: "Aug 2025 – Oct 2025" },
    location: "Remoto",
    description: {
      pt: "Selecionada para o programa global de liderança fundado em Harvard, realizado inteiramente em inglês, com masterclasses de professores e conexão com uma rede internacional de jovens líderes.",
      en: "Selected for the global leadership program founded at Harvard, taught entirely in English, with masterclasses by renowned faculty and a network of young leaders worldwide.",
    },
    tags: ["Leadership", "Communication", "Critical thinking"],
  },
  {
    id: "eldorado",
    organization: "Instituto de Pesquisas Eldorado",
    role: {
      pt: "Capacitação em Swift, iOS, Cloud Services e IoT (HackaTruck MakerSpace)",
      en: "Swift, iOS, Cloud Services and IoT Training (HackaTruck MakerSpace)",
    },
    period: { pt: "Mar 2025 – Abr 2025", en: "Mar 2025 – Apr 2025" },
    location: "Belo Horizonte, MG",
    description: {
      pt: "Formação intensiva em desenvolvimento iOS com Swift e SwiftUI, incluindo cloud services, serviços cognitivos, IoT e Node-RED, com certificação de 100 horas.",
      en: "Intensive iOS development training with Swift and SwiftUI, including cloud services, cognitive services, IoT and Node-RED, with a 100-hour certification.",
    },
    tags: ["Swift", "SwiftUI", "Node-RED", "IoT", "Cloud Services"],
  },
  {
    id: "sede-mg",
    organization: "Secretaria de Estado de Desenvolvimento Econômico de MG",
    role: {
      pt: "Estagiária na Diretoria de Inovação Aberta e Empreendedorismo Tecnológico",
      en: "Intern at the Directorate of Open Innovation and Technological Entrepreneurship",
    },
    period: { pt: "Mar 2024 – Mai 2024", en: "Mar 2024 – May 2024" },
    location: "Belo Horizonte, MG",
    description: {
      pt: "Estágio no governo do Estado de Minas Gerais, em área ligada a inovação e empreendedorismo tecnológico.",
      en: "Internship at the Minas Gerais state government, in an area focused on innovation and technological entrepreneurship.",
    },
    tags: ["Artificial Intelligence", "Visual design"],
  },
  {
    id: "puctec",
    organization: "PUCTec",
    role: { pt: "Bolsista do Business Induction Program", en: "Scholarship Holder, Business Induction Program" },
    period: { pt: "Out 2023 – Nov 2023", en: "Oct 2023 – Nov 2023" },
    location: "Belo Horizonte, MG",
    description: {
      pt: "Selecionada em banco de talentos para o programa de indução ao mundo dos negócios do hub de inovação da PUC Minas, que conecta a comunidade acadêmica ao ecossistema de inovação de Minas Gerais.",
      en: "Selected from a talent board for the induction-to-business program of PUC Minas' innovation hub, which connects the academic community to the Minas Gerais innovation ecosystem.",
    },
    tags: ["Research", "Visual design"],
  },
]
