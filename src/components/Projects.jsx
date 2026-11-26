import { useState, useRef } from 'react'
import { LuArrowUpRight, LuImages, LuCheck, LuChevronDown } from 'react-icons/lu'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const INITIAL_COUNT = 2

function ProjectRow({ project, index, onOpen }) {
  const flip = index % 2 === 1
  const cover = project.gallery[0]

  return (
    <article
      className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
        index >= INITIAL_COUNT ? 'animate-pop-in' : ''
      }`}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${project.title} screenshots`}
        className={`group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface text-left transition hover:border-accent lg:col-span-5 lg:max-w-none ${
          flip ? 'lg:order-2' : ''
        }`}
      >
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-line bg-bg/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
          <LuImages size={14} />
          {project.gallery.length} {project.gallery.length === 1 ? 'screenshot' : 'screenshots'}
        </span>
      </button>

      <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-semibold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
            {project.status}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <LuCheck size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition hover:opacity-90"
            >
              Live site <LuArrowUpRight size={16} />
            </a>
          )}
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            <LuImages size={16} />
            {project.video ? 'Screenshots and video' : 'Screenshots'}
          </button>
        </div>

        {project.offlineNote && (
          <p className="mt-4 text-xs text-muted">{project.offlineNote}</p>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT)
  const hasMore = projects.length > INITIAL_COUNT

  const toggle = () => {
    if (showAll) {
      setShowAll(false)
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setShowAll(true)
    }
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-20 pb-20 pt-16 md:pb-28 md:pt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Things I've built</h2>
        <p className="mt-4 max-w-2xl text-muted">
          A mix of template builds, practice projects and demos. Tap any project to see more
          screenshots.
        </p>

        <div className="mt-12 space-y-16 md:space-y-24">
          {visible.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={toggle}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              {showAll ? 'Show fewer projects' : 'See more projects'}
              <LuChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>

      {active && (
        <ProjectModal key={active.id} project={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}