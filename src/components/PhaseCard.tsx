import { useState } from 'react';
import type { LearningPhase } from '../types';
import ResourceItem from './ResourceItem';

interface Props {
  phase: LearningPhase;
  index: number;
  progress: Record<string, boolean>;
  onToggleResource: (id: string) => void;
}

function statusFor(pct: number) {
  if (pct === 0) return { cls: 'not-started', label: 'queued' };
  if (pct === 100) return { cls: 'complete', label: 'complete' };
  return { cls: 'in-progress', label: 'active' };
}

export default function PhaseCard({ phase, index, progress, onToggleResource }: Props) {
  const [open, setOpen] = useState(false);
  const total = phase.resources.length;
  const done = phase.resources.filter((r) => progress[r.id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const status = statusFor(pct);

  return (
    <div className={`phase${open ? ' open' : ''}`}>
      <button type="button" className="phase-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <div className="phase-num">{String(index + 1).padStart(2, '0')}</div>
        <div className="phase-info">
          <div className="phase-title">{phase.title}</div>
          <div className="phase-desc">{phase.desc}</div>
        </div>
        <div className="phase-stats">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className={`status-badge ${status.cls}`}>{status.label}</span>
            <span className="phase-pct">{pct}%</span>
          </div>
          <div className="pct-strip">
            {Array.from({ length: total }).map((_, i) => (
              <div className={`seg${i < done ? ' done' : ''}`} key={i} />
            ))}
          </div>
        </div>
        <div className="chev">▶</div>
      </button>
      <div className="resources">
        <div className="res-list">
          {phase.resources.map((r) => (
            <ResourceItem
              key={r.id}
              resource={r}
              checked={!!progress[r.id]}
              onToggle={() => onToggleResource(r.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
