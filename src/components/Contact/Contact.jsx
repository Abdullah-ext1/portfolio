import { useReveal } from '../../hooks/useReveal'
import './Contact.css'

export const Contact = () => {
  const ref = useReveal()

  return (
    <section id="contact">
      <div className="contact-layout" ref={ref}>
        <div className="contact-text reveal">
          <div className="contact-line">got a project?</div>
          <div className="contact-cta">let's build it. →</div>
        </div>

        <div className="contact-links reveal">
          <div className="contact-row">
            <span className="contact-key">mail</span>
            <a href="mailto:khanabdullah11915@gmail.com">khanabdullah11915@gmail.com</a>
          </div>
          <div className="contact-row">
            <span className="contact-key">phone</span>
            <a href="tel:+917408562618">+91 74085 62618</a>
          </div>
          <div className="contact-row">
            <span className="contact-key">github</span>
            <a href="https://github.com/Abdullah-ext1" target="_blank" rel="noopener">github.com/Abdullah-ext1</a>
          </div>
          <div className="contact-row">
            <span className="contact-key">linkedin</span>
            <a href="https://www.linkedin.com/in/abdullahfrfr/" target="_blank" rel="noopener">linkedin.com/in/abdullahfrfr</a>
          </div>
        </div>
      </div>
    </section>
  )
}

