import { experiences } from '../data/experiences'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const { lang } = useLanguage()
  return (
    <>
      <h1 className="title">{lang === 'pt' ? 'Experiências' : 'Experience'}</h1>
      <ul className="experience-list">
        {experiences.map((item) => (
          <li key={item.id} className="experience-item">
            <p className="caption">{item.period[lang]}</p>
            <h2 className="subtitle">{item.role[lang]}</h2>
            <p className="organization">
              {item.organization}
              {item.location ? ` · ${item.location}` : ''}
            </p>
            <p>{item.description[lang]}</p>
            <p className="tags">{item.tags.join(' · ')}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
