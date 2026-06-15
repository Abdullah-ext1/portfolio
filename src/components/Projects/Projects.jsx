import { useState, useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import projects from '../../data/projects'
import './Projects.css'

const ScreenshotImage = ({ src }) => {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="screenshot-placeholder" onClick={(e) => e.stopPropagation()}>
        <span className="placeholder-text">// screenshot</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Project screenshot"
      className="screenshot-img"
      onError={() => setFailed(true)}
      onClick={(e) => e.stopPropagation()}
    />
  )
}

const ProjectCard = ({ project, isFeatured, isOpen, onToggle }) => {
  const cardRef = useRef(null)
  const isCurrentlyVisible = cardRef.current?.classList.contains('visible')

  return (
    <article 
      ref={cardRef}
      className={`project-card ${isFeatured ? 'featured' : ''} ${isOpen ? 'expanded' : ''} reveal ${isCurrentlyVisible ? 'visible' : ''}`}
      onClick={onToggle}
    >
      <span className="toggle-indicator">
        {isOpen ? '[−]' : '[+]'}
      </span>

      <div>
        <span className="pill pill-light">{isFeatured ? 'Featured' : project.eyebrow}</span>
      </div>
      <h3 className="project-title">{project.name}</h3>
      <div className="card-divider"></div>
      <div className="project-metric">{project.metric}</div>
      <div className="card-divider"></div>
      <p className="project-desc">{project.desc}</p>
      
      <div className="tech-chips">
        {project.tech.map((tech) => (
          <span key={tech} className="chip" onClick={(e) => e.stopPropagation()}>
            [{tech}]
          </span>
        ))}
      </div>

      {!isOpen && (
        <div className="click-cue">// click to expand</div>
      )}

      <div className={`project-details ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="card-divider"></div>
        <div className="screenshot-strip">
          {project.screenshots && project.screenshots.map((src) => (
            <ScreenshotImage key={src} src={src} />
          ))}
        </div>
        <div className="card-divider"></div>
        <div className="details-links">
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener" 
              className="details-link" 
              onClick={(e) => e.stopPropagation()}
            >
              ↗ live demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener" 
              className="details-link" 
              onClick={(e) => e.stopPropagation()}
            >
              ⌥ view code
            </a>
          )}
          <button 
            onClick={(e) => { e.stopPropagation(); onToggle(); }} 
            className="details-collapse"
          >
            ✕ collapse
          </button>
        </div>
      </div>
    </article>
  )
}

export const Projects = () => {
  const ref = useReveal()
  const [openProject, setOpenProject] = useState(null)

  const handleToggle = (name) => {
    setOpenProject((prev) => (prev === name ? null : name))
  }

  const featured = projects[0]
  const others = projects.slice(1)

  return (
    <section id="projects">
      <div className="section-label">// projects</div>

      <div className="projects-container" ref={ref}>
        {/* Featured project - full width */}
        <ProjectCard 
          project={featured} 
          isFeatured={true} 
          isOpen={openProject === featured.name} 
          onToggle={() => handleToggle(featured.name)} 
        />

        {/* Other projects - 3 col grid */}
        <div className="projects-grid">
          {others.map((project) => (
            <ProjectCard 
              key={project.name}
              project={project} 
              isFeatured={false} 
              isOpen={openProject === project.name} 
              onToggle={() => handleToggle(project.name)} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}



