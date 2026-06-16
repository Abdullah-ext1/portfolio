import { useReveal } from '../../hooks/useReveal'
import experience from '../../data/experience'
import './Experience.css'

export const Experience = () => {
  const ref = useReveal()

  return (
    <section id="experience">
      <div className="section-label dark">$ cat experience.log</div>

      <div className="timeline" ref={ref}>
        {experience.map((item) => (
          <div key={`${item.role}-${item.duration}`} className="timeline-item reveal">
            <div className="timeline-marker">
              <span className="timeline-dot">●</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-duration">{item.duration}</div>
              <div className="timeline-header">
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-badge">[{item.type}]</span>
              </div>
              <p className="timeline-org">{item.org}</p>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
