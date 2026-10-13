import { useLanguage } from '../i18n/LanguageContext'
import type { Bilingual } from '../i18n/LanguageContext'

const title: Bilingual = { pt: 'Sobre mim', en: 'About me' }

const paragraphs: Bilingual[] = [
  {
    pt: 'Sou estudante de Engenharia de Software na PUC Minas (2023–2027), com bagagem em design e foco em desenvolvimento mobile iOS e aplicações web. Levo para o código o olhar de produto e de experiência do usuário.',
    en: "I'm a Software Engineering student at PUC Minas (2023–2027), with a design background and a focus on iOS mobile development and web applications. I bring a product and user-experience mindset to my code.",
  },
  {
    pt: 'Fui estagiária de Engenharia de Software na dti digital, onde atuei no desenvolvimento de um aplicativo iOS nativo para um cliente internacional. Também fundei e lidero a MINAS Conecta, comunidade com mais de 300 alunas em STEM na PUC Minas.',
    en: 'I was a Software Engineering intern at dti digital, working on a native iOS app for an international client. I also founded and lead MINAS Conecta, a community of 300+ women in STEM at PUC Minas.',
  },
  {
    pt: 'Meus interesses são desenvolvimento iOS com Swift e SwiftUI, desenvolvimento full-stack com React, Spring Boot e MongoDB, design de produto e comunidades de tecnologia. Busco construir produtos acessíveis e de impacto social como engenheira de software.',
    en: 'My interests are iOS development with Swift and SwiftUI, full-stack development with React, Spring Boot and MongoDB, product design and tech communities. I aim to build accessible, socially impactful products as a software engineer.',
  },
]

export default function About() {
  const { lang } = useLanguage()
  return (
    <>
      <h1 className="title">{title[lang]}</h1>
      <div className="about">
        {paragraphs.map((p, i) => (
          <p key={i}>{p[lang]}</p>
        ))}
      </div>
    </>
  )
}
