import { useReveal } from '../../hooks/useReveal'
import { processItems } from '../../data/process'
import './Process.css'

export const Process = () => {
  const ref = useReveal()

  return (
    <section id="process">
      <div className="section-label">// how I work</div>

      <div className="process-grid" ref={ref}>
        {processItems.map((item) => (
          <article key={item.num} className="process-card reveal">
            <div className="card-number">{item.num}</div>
            <h3 className="process-title">{item.title}</h3>
            <p className="process-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
