import { useState, useEffect } from 'react'
import './Navbar.css'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a className="nav-logo" href="#hero">
        <span className="nav-tilde">~</span>/abdullah
      </a>
      <div className="nav-links">
        <a href="#projects">./projects</a>
        <a href="#skills">./skills</a>
        <a href="#about">./about</a>
        <a href="#contact">./contact</a>
      </div>
      <a className="nav-hire" href="mailto:khanabdullah11915@gmail.com">
        [hire me]
      </a>
      <button
        className="hamburger"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-close"
          onClick={closeMobileMenu}
        >
          ✕
        </button>
        <a href="#projects" onClick={closeMobileMenu}>./projects</a>
        <a href="#skills" onClick={closeMobileMenu}>./skills</a>
        <a href="#about" onClick={closeMobileMenu}>./about</a>
        <a href="#contact" onClick={closeMobileMenu}>./contact</a>
        <a 
          className="mobile-hire" 
          href="mailto:khanabdullah11915@gmail.com" 
          onClick={closeMobileMenu}
          style={{ 
            color: 'var(--terminal-green)', 
            border: '1px solid var(--terminal-green-dim)', 
            padding: '10px 20px', 
            fontSize: '18px',
            marginTop: '1rem'
          }}
        >
          [hire me]
        </a>
      </div>
    </nav>
  )
}


