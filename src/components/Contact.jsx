import { FaWhatsapp } from 'react-icons/fa6'
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Let's build something together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Have a website, an online store or a project in mind? Send me a message and
              let's talk about it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition hover:opacity-90"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
              >
                <LuMail size={18} />
                Send an email
              </a>
            </div>

            <ul className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-muted sm:flex-row sm:gap-8">
              <li className="flex items-center gap-2">
                <LuMail size={16} className="text-accent" />
                <a href={`mailto:${site.email}`} className="transition hover:text-fg">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LuPhone size={16} className="text-accent" />
                <a href={`tel:${site.phone}`} className="transition hover:text-fg">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LuMapPin size={16} className="text-accent" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}