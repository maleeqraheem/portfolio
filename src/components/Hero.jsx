import { FaWhatsapp } from 'react-icons/fa6'
import { LuDownload, LuMapPin } from 'react-icons/lu'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-12 md:grid-cols-2 md:pb-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            I build clean, fast websites for{' '}
            <span className="text-accent">growing businesses</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            I'm Abdulmalik, a front-end and web developer working with React,
            Tailwind CSS, WordPress and WooCommerce. From business sites to
            online stores, I take projects from idea to launch.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition hover:opacity-90"
            >
              <FaWhatsapp size={18} />
              Hire me
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              <LuDownload size={18} />
              Download CV
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <LuMapPin size={16} className="text-accent" />
            {site.location}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2rem] border border-accent/40"
          />
          <img
            src="/images/portrait-bw.webp"
            alt="Portrait of Raheem Abdulmalik"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}