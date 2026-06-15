import { useReveal } from '../../hooks/useReveal'
import './About.css'

export const About = () => {
  const ref = useReveal()

  return (
    <section id="about">
      <div className="section-label dark">$ cat about.txt</div>
      <div className="about-layout" ref={ref}>
        <div className="about-text reveal">
          <p>Third-year Electronics & CS student at Rizvi College of Engineering, Mumbai. I've been building and shipping production MERN apps since my first year — not tutorials, actual users.</p>
          <p>I work end-to-end. API architecture, database design, deployment, debugging at 2am when prod breaks. Campus has 400+ real users. Bharat Watch had 150 in month one. These aren't portfolio pieces — they're products.</p>
          <p>Part of Code Cell RCOE. I've pitched at ideathons, run workshops, and built AI-integrated tools with Groq and OpenAI APIs. Currently looking for a full-stack internship where I can ship real things.</p>
        </div>

        <div className="about-whois reveal">
          <div className="whois-row">
            <span className="whois-label">location:</span>
            <span className="whois-value">Mumbai, India</span>
          </div>
          <div className="whois-row">
            <span className="whois-label">college:</span>
            <span className="whois-value">Rizvi COE</span>
          </div>
          <div className="whois-row">
            <span className="whois-label">degree:</span>
            <span className="whois-value">B.E. Electronics & CS</span>
          </div>
          <div className="whois-row">
            <span className="whois-label">batch:</span>
            <span className="whois-value">2023 – 2027</span>
          </div>
          <div className="whois-row">
            <span className="whois-label">cgpa:</span>
            <span className="whois-value">8.8</span>
          </div>
          <div className="whois-row">
            <span className="whois-label">stack:</span>
            <span className="whois-value">MERN</span>
          </div>
          <div className="whois-row">
            <span className="whois-label">status:</span>
            <span className="whois-value status-open">
              open to internships<span className="status-dot">●</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}


