import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business } from '../config/business'
import { WhatsAppLink } from './WhatsAppLink'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoUrl = `${import.meta.env.BASE_URL}logo-vocarte.jpeg`

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-link" href="#inicio" aria-label="Vocarte, ir al inicio">
          <img src={logoUrl} alt="Vocarte" width="1536" height="1024" />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {business.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink className="button button-small header-cta">Escríbenos</WhatsAppLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Navegación móvil"
        aria-hidden={!isMenuOpen}
      >
        <div className="container mobile-nav-inner">
          {business.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
              {item.label}
            </a>
          ))}
          <WhatsAppLink
            className="button"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Escríbenos por WhatsApp
          </WhatsAppLink>
        </div>
      </nav>
    </header>
  )
}
