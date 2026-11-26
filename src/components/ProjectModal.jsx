import { useState, useEffect, useCallback } from 'react'
import { LuX, LuChevronLeft, LuChevronRight, LuArrowUpRight } from 'react-icons/lu'


export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const [view, setView] = useState('gallery')
  const images = project.gallery
  const many = images.length > 1

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (view === 'gallery' && many) {
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') prev()
      }
    }
    document.addEventListener('keydown', onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
    }
  }, [onClose, next, prev, view, many])

  const tabClass = (active) =>
    `rounded-full px-4 py-1.5 text-sm font-semibold transition ${
      active ? 'bg-accent text-accent-fg' : 'text-muted hover:text-fg'
    }`

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-pop-in flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-bg"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <div>
            <h3 className="font-display text-lg font-bold">{project.title}</h3>
            <p className="text-xs text-muted">{project.status}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface transition hover:border-accent hover:text-accent"
          >
            <LuX size={18} />
          </button>
        </div>

        {project.video && (
          <div className="flex gap-1 border-b border-line px-5 py-3">
            <button onClick={() => setView('gallery')} className={tabClass(view === 'gallery')}>
              Screenshots
            </button>
            <button onClick={() => setView('video')} className={tabClass(view === 'video')}>
              Walkthrough
            </button>
          </div>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto">
          {view === 'gallery' ? (
            <div>
              <div className="relative bg-surface">
                <img
                  key={images[index].src}
                  src={images[index].src}
                  alt={images[index].alt}
                  className="animate-pop-in mx-auto max-h-[50vh] w-full object-contain"
                />
                {many && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous screenshot"
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg/90 backdrop-blur transition hover:border-accent hover:text-accent"
                    >
                      <LuChevronLeft size={20} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next screenshot"
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg/90 backdrop-blur transition hover:border-accent hover:text-accent"
                    >
                      <LuChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="px-5 py-4">
                <p className="text-sm text-muted">
                  {images[index].caption}
                  {many && (
                    <span className="ml-2 text-xs">
                      ({index + 1} of {images.length})
                    </span>
                  )}
                </p>
                {many && (
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                    {images.map((img, i) => (
                      <button
                        key={img.src}
                        onClick={() => setIndex(i)}
                        aria-label={`Show screenshot ${i + 1}`}
                        className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                          i === index ? 'border-accent' : 'border-line opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.src} alt="" className="h-full w-full object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="px-5 py-5">
              <video
                src={project.video.src}
                poster={project.video.poster}
                controls
                playsInline
                preload="none"
                className="mx-auto max-h-[62vh] rounded-xl bg-black"
              />
              <p className="mt-3 text-center text-xs text-muted">{project.video.note}</p>
            </div>
          )}
        </div>

       {project.live && (
  <div className="flex flex-wrap gap-3 border-t border-line px-5 py-4">
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-fg transition hover:opacity-90"
    >
      Live site <LuArrowUpRight size={16} />
    </a>
  </div>
)}
      </div>
    </div>
  )
}