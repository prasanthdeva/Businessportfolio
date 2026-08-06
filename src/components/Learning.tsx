import Reveal from './Reveal';
import PhaseCard from './PhaseCard';
import { LEARNING_PATH } from '../data/learningPath';

interface Props {
  progress: Record<string, boolean>;
  onToggleResource: (id: string) => void;
  onReset: () => void;
}

export default function Learning({ progress, onToggleResource, onReset }: Props) {
  const all = LEARNING_PATH.flatMap((p) => p.resources);
  const totalDone = all.filter((r) => progress[r.id]).length;
  const overallPct = all.length ? Math.round((totalDone / all.length) * 100) : 0;

  const handleReset = () => {
    if (!confirm('Reset all learning progress? This cannot be undone.')) return;
    onReset();
  };

  return (
    <section id="learning">
      <Reveal>
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>LEARNING PATH</div>
          <div className="lp-head">
            <div>
              <h2 className="sec-title" style={{ marginBottom: 6 }}>Backend Lead → AI-Native Engineer</h2>
              <div className="sec-sub" style={{ marginBottom: 0 }}>Watch videos inline, or open them straight on YouTube — your call. Progress saves automatically in this browser.</div>
            </div>
            <button className="reset-btn" onClick={handleReset}>↺ Reset progress</button>
          </div>

          <div className="overall">
            <div className="overall-top">
              <div>
                <div className="overall-label">Overall Readiness</div>
                <div className="overall-num">{overallPct}<span>%</span></div>
              </div>
              <div className="overall-meta">{totalDone} / {all.length} resources completed</div>
            </div>
            <div className="strip">
              {all.map((r, i) => (
                <div className={`seg${i < totalDone ? ' done' : ''}`} key={r.id} />
              ))}
            </div>
          </div>

          <div>
            {LEARNING_PATH.map((phase, idx) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                index={idx}
                progress={progress}
                onToggleResource={onToggleResource}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
