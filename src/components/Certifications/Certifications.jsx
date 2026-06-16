import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import certifications from '../../data/certifications'
import './Certifications.css'

const CertImage = ({ src, alt, onClick }) => {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="cert-image-placeholder">
        <span className="cert-placeholder-text">// certificate</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="cert-image"
      onError={() => setFailed(true)}
      onClick={onClick}
    />
  )
}

export const Certifications = () => {
  const ref = useReveal()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="certifications">
      <div className="section-label">// certifications</div>

      <div className="cert-grid" ref={ref}>
        {certifications.map((cert) => (
          <article key={cert.name} className="cert-card reveal">
            <CertImage
              src={cert.image}
              alt={cert.name}
              onClick={() => setLightbox(cert.image)}
            />
            <div className="cert-body">
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              {cert.verify ? (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener"
                  className="cert-verify"
                >
                  verify ↗
                </a>
              ) : (
                <span className="cert-participation">// participation</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
          >
            [✕]
          </button>
          <img
            src={lightbox}
            alt="Certificate"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
