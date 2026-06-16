import './Hero.css'

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-prompt">
        <span className="prompt-char">$</span> whoami
      </div>
      
      <h1 className="hero-name">
        Abdullah<br />
        Khan<span className="cursor">_</span>
      </h1>

      <div className="hero-output">
        <div>
          <span className="prompt-char">&gt;</span> Full Stack Developer · MERN
        </div>
        <div>
          <span className="prompt-char">&gt;</span> Based in Mumbai, India
        </div>
        <div>
          <span className="prompt-char">&gt;</span> Building things that ship
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-label">users</span>
          <span className="stat-dots"></span>
          <span className="stat-value">400+</span>
        </div>
        <div className="stat">
          <span className="stat-label">projects</span>
          <span className="stat-dots"></span>
          <span className="stat-value">8+ live</span>
        </div>
        <div className="stat">
          <span className="stat-label">cgpa</span>
          <span className="stat-dots"></span>
          <span className="stat-value">8.8</span>
        </div>
        <div className="stat">
          <span className="stat-label">stack</span>
          <span className="stat-dots"></span>
          <span className="stat-value">MERN</span>
        </div>
      </div>

      <div className="hero-cta">
        <a className="cta-btn" href="#projects">[view projects]</a>
        <a className="cta-btn" href="https://github.com/Abdullah-ext1" target="_blank" rel="noopener">[github ↗]</a>
        <a className="cta-btn" href="https://www.linkedin.com/in/abdullahfrfr/" target="_blank" rel="noopener">[linkedin ↗]</a>
      </div>
    </section>
  )
}


