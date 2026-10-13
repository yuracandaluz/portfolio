import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { lang } = useLanguage()
  const sorted = [...projects].sort((a, b) => a.year - b.year)
  return (
    <>
      <h1 className="title">{lang === 'pt' ? 'Projetos' : 'Projects'}</h1>
      <ol className="timeline">
        {sorted.map((project) => (
          <li key={project.id} className="timeline-item">
            <p className="caption">{project.year}</p>
            <h2 className="subtitle">{project.name}</h2>
            {project.image && (
              <img className="project-image" src={project.image} alt={project.name} />
            )}
            <p>{project.description[lang]}</p>
            {project.technologies.length > 0 && (
              <p className="tags">{project.technologies.join(' · ')}</p>
            )}
            {project.githubUrl && (
              <a className="link" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
          </li>
        ))}
      </ol>
    </>
  )
}
