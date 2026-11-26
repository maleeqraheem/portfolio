import { skillGroups, workStyle } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Skills</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What I work with</h2>
        <p className="mt-4 max-w-2xl text-muted">
          The tools I use to turn ideas into fast, good-looking websites.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GroupIcon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-bold">{group.title}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1.5 text-sm font-medium"
                    >
                      <Icon size={16} className="shrink-0 text-accent" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <p className="text-sm font-semibold text-muted">How I work</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {workStyle.map((w) => (
              <li
                key={w}
                className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}