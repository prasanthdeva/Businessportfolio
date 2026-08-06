import Reveal from './Reveal';
import { FAULTLINE_BUILT } from '../data/career';

export default function Startup() {
  return (
    <section id="startup">
      <Reveal>
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>STARTUP SPOTLIGHT</div>
          <h2 className="sec-title">What I'm building</h2>
          <div className="sec-sub">The main project right now — an AI reasoning layer for incident response, built from real production-pain, not a hackathon idea.</div>

          <div className="startup-card">
            <div className="startup-head">
              <div>
                <div className="startup-name">Faultline.ai</div>
                <div className="startup-tag">An AI-native observability platform that reads traces, logs, and deploy history together and explains <em>why</em> a distributed system broke — in plain English, not a wall of dashboards.</div>
              </div>
              <div className="yc-badge">◆ YC application in progress — with co-founder</div>
            </div>

            <div className="split">
              <div>
                <h4>The Problem</h4>
                <p>Modern incident response means correlating traces, logs, metrics, and deploy history by hand across five different tools, under time pressure, during an outage. Existing observability platforms surface the data — they don't explain the failure.</p>
              </div>
              <div>
                <h4>The Approach</h4>
                <p>An AI reasoning layer sits on top of OpenTelemetry-instrumented systems, correlating signal across the stack and generating a plain-English root-cause explanation instead of a dashboard full of graphs to interpret manually.</p>
              </div>
            </div>

            <div className="split">
              <div>
                <h4>Built So Far <span className="count">({FAULTLINE_BUILT.length} shipped)</span></h4>
                <ul className="built-list">
                  {FAULTLINE_BUILT.map((item) => (
                    <li key={item}><span className="ck"></span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Differentiated Features</h4>
                <p>An "Incident Replay &amp; Fault Taxonomy" mode for teaching teams to recognize failure patterns, plus a Kafka-specific fault taxonomy — most observability tools treat Kafka as a generic queue rather than modeling its actual failure modes.</p>
              </div>
            </div>

            <h4 style={{ marginTop: 8 }}>Competitive Landscape</h4>
            <div className="vs-row">
              <span className="vs-chip">vs Datadog</span>
              <span className="vs-chip">vs New Relic</span>
              <span className="vs-chip">vs SigNoz</span>
              <span className="vs-chip">vs Grafana</span>
              <span className="vs-chip">vs Dynatrace</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
