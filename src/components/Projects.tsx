import Reveal from './Reveal';
import { PROJECTS, STATUS_CLASS } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>PROJECTS</div>
          <h2 className="sec-title">What else is in flight</h2>
          <div className="sec-sub">Faultline.ai is the headline project — these run alongside it, spanning fintech, healthcare, and a creative side project.</div>
          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <div className="proj-card" key={p.title}>
                <div className="proj-top">
                  <div className="proj-title">{p.title}</div>
                  <div className={`proj-status ${STATUS_CLASS[p.status]}`}>{p.status}</div>
                </div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
