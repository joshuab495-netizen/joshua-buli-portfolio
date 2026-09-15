import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TbMenu2, TbX } from 'react-icons/tb'
import { NAV_LINKS } from '../data/nav'
import useActiveSection from '../hooks/useActiveSection'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white/0'
      }`}
    >
      <nav className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-heading text-lg font-bold text-navy">
          Joshua<span className="text-accent">.</span>Buli
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-slate-600 hover:text-navy'
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.03]"
        >
          Contact Me
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-navy p-2 rounded-lg hover:bg-slate-100"
        >
          {mobileOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeId === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block text-sm font-medium ${
                        isActive ? 'text-accent' : 'text-slate-600'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
