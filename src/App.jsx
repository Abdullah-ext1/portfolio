import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { CurrentlyBuilding } from './components/CurrentlyBuilding/CurrentlyBuilding'
import { Process } from './components/Process/Process'
import { Experience } from './components/Experience/Experience'
import { Certifications } from './components/Certifications/Certifications'
import { Blog } from './components/Blog/Blog'
import { Skills } from './components/Skills/Skills'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import './App.css'

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <CurrentlyBuilding />
      <Process />
      <Experience />
      <Certifications />
      <Blog />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

