import Reveal from './Reveal';
import Bullet from './Bullet';
import { CAREER, EDUCATION, STACK } from '../data/career';

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>ABOUT</div>
          <h2 className="sec-title">From backend engineer to AI-native engineer</h2>
          <div className="sec-sub">The throughline: distributed systems and backend depth, now applied to GenAI-native architecture. Language-agnostic by design — the stack changes per problem, the systems thinking doesn't.</div>

          <div className="split" style={{ marginBottom: 36 }}>
            <div>
              <h4>Career Path</h4>
              <div className="timeline">
                {CAREER.map((item) => (
                  <div className="tl-item" key={item.org}>
                    <div className="tl-role">{item.role}</div>
                    <div className="tl-org">{item.org}</div>
                    {(item.desc || item.bullets) && (
                      <div className="tl-desc">
                        {item.desc}
                        {item.bullets && (
                          <ul>
                            {item.bullets.map((b) => <Bullet text={b} key={b} />)}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="edu-line">
                <strong>Education</strong> — {EDUCATION}
              </div>
              <div className="placeholder-note">
                ⚠ Placeholder note: the exact date you moved from CloudBees to SORIM.AI isn't filled in yet — share it and I'll close that gap on both entries.
              </div>
            </div>
            <div>
              <h4>Stack</h4>
              <div className="chips">
                {STACK.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
              <h4 style={{ marginTop: 26 }}>Positioning</h4>
              <p style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: 1.65 }}>
                Transitioning deliberately from backend specialist to language-agnostic GenAI Lead Engineer — someone who can architect the AI reasoning layer and the distributed system underneath it, not just prompt one on top of the other.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
