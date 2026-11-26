import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaSnapchat,
} from 'react-icons/fa6'
import { LuArrowUp } from 'react-icons/lu'
import { site } from '../data/site'

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
  x: FaXTwitter,
  tiktok: FaTiktok,
  snapchat: FaSnapchat,
}

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="font-display text-xl font-bold">
              Abdulmalik<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {site.role} based in {site.location}. Building clean, fast websites.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col md:gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold">Find me online</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {site.socials.map(({ id, label, url }) => {
                const Icon = socialIcons[id]
                if (!Icon) return null
                return (
                  <li key={id}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-2 transition hover:text-accent">
            <LuArrowUp size={16} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}