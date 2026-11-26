import { useState } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch (e) {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg transition hover:border-accent hover:text-accent"
    >
      {dark ? <LuSun size={18} /> : <LuMoon size={18} />}
    </button>
  )
}