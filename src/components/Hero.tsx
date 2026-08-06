export default function Hero({ readinessPct }: { readinessPct: number | null }) {
  return (
    <div className="wrap hero">
      <div className="hero-status">
        <span>●</span> Currently building Faultline.ai — preparing YC application
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)', letterSpacing: '.04em', marginBottom: 14 }}>
        MANIRATHNAM MURUGESAN
      </div>
      <h1>
        Backend Lead turned <span className="grad">AI-native</span> engineer, building the observability layer AI incident response has been missing.
      </h1>
      <div className="hero-desc">
        Lead Software Engineer &amp; GenAI Engineer based in Chennai, India. 5+ years across Java/Spring Boot backend engineering, distributed systems, and now GenAI-accelerated delivery — currently leading a Ford Credit cloud modernization engagement at SORIM.AI while building Faultline.ai on the side.
      </div>
      <div className="hero-cta">
        <a className="btn btn-primary" href="#startup">View the startup ↓</a>
        <a className="btn btn-ghost" href="#learning">Track my learning path</a>
      </div>
      <div className="hero-stats">
        <div className="hstat"><div className="num">5+</div><div className="lbl">Years Engineering</div></div>
        <div className="hstat"><div className="num">5</div><div className="lbl">Companies</div></div>
        <div className="hstat"><div className="num">5</div><div className="lbl">Active Projects</div></div>
        <div className="hstat"><div className="num">1</div><div className="lbl">Startup in Flight</div></div>
        <div className="hstat">
          <div className="num">{readinessPct === null ? '—' : `${readinessPct}%`}</div>
          <div className="lbl">AI-Native Readiness</div>
        </div>
      </div>
    </div>
  );
}
