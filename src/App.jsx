import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import AutomationHighlights from './components/AutomationHighlights'
import AISkills from './components/AISkills'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <AutomationHighlights />
        <AISkills />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
