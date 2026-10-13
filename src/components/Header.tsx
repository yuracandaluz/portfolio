import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="masthead">Yura Andaluz</div>
      <nav className="nav">
        <NavLink to="/">Sobre</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/experiencias">Experiências</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}
