import { useState, useEffect, useRef } from 'react'
import { LuMenu, LuX, LuDownload } from 'react-icons/lu'
import ThemeToggle from './ThemeToggle'
import { site } from '../data/site'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  // Header background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu when tapping outside it, or pressing Escape
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      {/* Dim backdrop behind the open menu (mobile only) */}
      <div
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open
            ? 'border-line bg-bg/90 backdrop-blur-md'
            : 'border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-xl font-bold">
            Abdulmalik<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted transition hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={site.cv}
              download
              className="hidden items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent sm:flex"
            >
              <LuDownload size={16} />
              CV
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface md:hidden"
            >
              <span className="relative block h-5 w-5">
                <LuMenu
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <LuX
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Slide-down mobile menu */}
        <div
          inert={!open}
          className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mx-auto flex max-w-6xl flex-col border-t border-line px-6 py-3">
              {links.map((l, i) => (
                <li
                  key={l.href}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
                  className={`transition-all duration-300 ${
                    open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                  }`}
                >
                  <a
                    href={l.href}
                    onClick={close}
                    className="block py-3 text-base font-medium text-muted transition hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li
                style={{ transitionDelay: open ? `${100 + links.length * 60}ms` : '0ms' }}
                className={`transition-all duration-300 ${
                  open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
              >
                <a
                  href={site.cv}
                  download
                  onClick={close}
                  className="flex items-center gap-2 py-3 text-base font-semibold text-accent"
                >
                  <LuDownload size={18} />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}