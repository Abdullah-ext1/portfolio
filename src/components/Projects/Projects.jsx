import { useState, useRef, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import projects from '../../data/projects'
import './Projects.css'

const ProjectCard = ({ project, isFeatured, isOpen, onToggle }) => {
  const cardRef = useRef(null)
  const isCurrentlyVisible = cardRef.current?.classList.contains('visible')
  const [lightbox, setLightbox] = useState(null)
  const screenshots = project.screenshots ?? []
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  const handleClick = () => {
    if (!hasScreenshots) return
    onToggle()
  }

  const openLightbox = (e, index) => {
    e.stopPropagation()
    setLightbox(index)
  }

  const closeLightbox = () => setLightbox(null)

  const prevImage = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev + 1) % screenshots.length)
  }

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
    <article 
      ref={cardRef}
      className={`project-card ${isFeatured ? 'featured' : ''} ${isOpen ? 'expanded' : ''} reveal ${isCurrentlyVisible ? 'visible' : ''}`}
      onClick={handleClick}
      style={{ cursor: hasScreenshots ? 'pointer' : 'default' }}
    >
      {hasScreenshots && (
        <span className="toggle-indicator">
          {isOpen ? '[−]' : '[+]'}
        </span>
      )}

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

      {hasScreenshots && !isOpen && (
        <span className="expand-hint">// click to expand</span>
      )}

      {!hasScreenshots && (
        <div className="details-links" onClick={(e) => e.stopPropagation()}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener"
              className="details-link"
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
            >
              ⌥ view code
            </a>
          )}
        </div>
      )}

      {isOpen && hasScreenshots && (
        <div className="card-expanded" onClick={(e) => e.stopPropagation()}>
          <div className="card-divider"></div>
          <div className="screenshot-strip">
            {project.screenshots?.map((src, i) => (
              <div
                key={i}
                className="screenshot-item"
                onClick={(e) => openLightbox(e, i)}
              >
                <img
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="screenshot-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('screenshot-missing')
                  }}
                />
              </div>
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
              onClick={(e) => { e.stopPropagation(); onToggle() }}
              className="details-collapse"
            >
              ✕ collapse
            </button>
          </div>
        </div>
      )}
    </article>

    {lightbox !== null && (
      <div className="lightbox-overlay" onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox}>[✕]</button>
        <button className="lightbox-prev" onClick={prevImage}>[←]</button>
        <img
          src={screenshots[lightbox]}
          alt={`${project.name} screenshot ${lightbox + 1}`}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />
        <button className="lightbox-next" onClick={nextImage}>[→]</button>
        <div className="lightbox-counter">
          {lightbox + 1} / {screenshots.length}
        </div>
      </div>
    )}
    </>
  )
}

export const Projects = () => {
  const ref = useReveal()
  const [openProject, setOpenProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const handleToggle = (name) => {
    setOpenProject((prev) => (prev === name ? null : name))
  }

  const featured = projects[0]
  const visibleOthers = showAll ? projects.slice(1) : projects.slice(1, 4)

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
          {visibleOthers.map((project) => (
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

      {!showAll && (
        <div className="projects-toggle">
          <button className="toggle-btn" onClick={() => setShowAll(true)}>
            [+ view all projects] <span className="toggle-count">+{projects.length - 4} more</span>
          </button>
        </div>
      )}
      {showAll && (
        <div className="projects-toggle">
          <button className="toggle-btn" onClick={() => setShowAll(false)}>
            [− show less]
          </button>
        </div>
      )}
    </section>
  )
}



