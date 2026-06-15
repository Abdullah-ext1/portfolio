import { useReveal } from '../../hooks/useReveal'
import { skills, skillsOrder, learningNow } from '../../data/skills'
import './Skills.css'

export const Skills = () => {
  const ref = useReveal()

  return (
    <section id="skills">
      <div className="section-label">// stack</div>

      <div className="skills-layout" ref={ref}>
        <div className="skills-table reveal">
          {skillsOrder.map((group) => (
            <div key={group.key} className="skill-row">
              <span className="skill-label">{group.label}</span>
              <div className="skill-values">
                {skills[group.key].map((skill) => (
                  <span key={skill} className="pill pill-light">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-block reveal">
          <div className="learning-title">
            <span className="learning-arrow">&gt;</span> currently learning
          </div>
          <ul className="learning-list">
            {learningNow.map((item) => (
              <li key={item}>
                <span className="learning-arrow">&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


