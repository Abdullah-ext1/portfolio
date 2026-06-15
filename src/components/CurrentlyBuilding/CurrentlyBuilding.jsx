import { useReveal } from '../../hooks/useReveal'
import { wipProjects } from '../../data/process'
import './CurrentlyBuilding.css'

export const CurrentlyBuilding = () => {
  const ref = useReveal()

  const getStatusBadge = (status) => {
    switch(status) {
      case 'in-progress':
        return <span className="status in-progress">● in-progress</span>
      case 'shipped':
        return <span className="status shipped">✓ shipped</span>
      case 'next':
        return <span className="status next">~ next</span>
      default:
        return null
    }
  }

  return (
    <section id="currently-building">
      <div className="section-label dark">$ ls ~/wip</div>

      <div className="wip-grid" ref={ref}>
        {wipProjects.map((project) => (
          <article key={project.name} className="wip-card reveal">
            <div className="card-header">
              <h3 className="wip-name">{project.name}</h3>
              {getStatusBadge(project.status)}
            </div>
            <p className="wip-desc">
              {project.desc}
              {project.status === 'next' && <span className="cursor">_</span>}
            </p>
            {project.tech.length > 0 && (
              <div className="wip-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">[{tech}]</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

