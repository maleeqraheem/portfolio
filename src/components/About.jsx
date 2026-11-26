import { LuDownload, LuGraduationCap, LuMapPin, LuCode } from 'react-icons/lu'
import { site } from '../data/site'

const facts = [
  {
    icon: LuGraduationCap,
    label: 'Education',
    value: 'BSc Computer Science, Caleb University (2022 – 2026)',
  },
  { icon: LuMapPin, label: 'Based in', value: site.location },
  { icon: LuCode, label: 'Focus', value: 'Front-end website development, WordPress and WooCommerce websites' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-16">
        <div className="relative mx-auto w-full max-w-xs md:col-span-4 md:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2rem] border border-accent/40"
          />
          <img
            src="/images/portrait-teal.webp"
            alt="Raheem Abdulmalik"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_35%]"
          />
        </div>

        <div className="md:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A bit about me</h2>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              I'm Abdulmalik, a Computer Science graduate from Caleb University and a tech
              enthusiast who loves building things for the web. I started with business
              websites and online stores in WordPress, Elementor and WooCommerce, building little projects for learning purposes and I've
              been going deeper into custom front-end work with HTML, CSS, JavaScript and
              React.
            </p>
            <p>
              I'm learning new stacks and getting better gradually, and I pick up new tools
              quickly. I care about clean design, sites that feel good on a phone, and
              delivering on time, from setup all the way through launch.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="rounded-2xl border border-line bg-surface p-4">
                <Icon size={20} className="text-accent" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium">{value}</p>
              </li>
            ))}
          </ul>

          <a
            href={site.cv}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            <LuDownload size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}