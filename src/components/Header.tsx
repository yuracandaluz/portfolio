import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import type { Bilingual } from '../i18n/LanguageContext'

const links: { to: string; label: Bilingual }[] = [
  { to: '/', label: { pt: 'Sobre', en: 'About' } },
  { to: '/projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { to: '/experiencias', label: { pt: 'Experiências', en: 'Experience' } },
  { to: '/contato', label: { pt: 'Contato', en: 'Contact' } },
]

export default function Header() {
  const { lang, setLang } = useLanguage()
  return (
    <header className="header">
      <div className="masthead">Yura Andaluz</div>
      <nav className="nav">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label[lang]}
          </NavLink>
        ))}
        <button
          type="button"
          className="lang-toggle"
          aria-label="Switch language"
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        >
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </nav>
    </header>
  )
}
