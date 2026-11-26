import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  )
}