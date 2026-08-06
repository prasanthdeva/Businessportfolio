import { useState } from 'react';
import type { LearningResource } from '../types';

interface Props {
  resource: LearningResource;
  checked: boolean;
  onToggle: () => void;
}

export default function ResourceItem({ resource, checked, onToggle }: Props) {
  const [watching, setWatching] = useState(false);
  const isVideo = !!resource.embed;

  return (
    <div className="res-item">
      <div className="res-row">
        <button
          type="button"
          className={`res-check${checked ? ' checked' : ''}`}
          aria-label={checked ? 'Mark incomplete' : 'Mark complete'}
          aria-pressed={checked}
          onClick={onToggle}
        />
        <div className="res-body">
          <div className={`res-title${checked ? ' checked-text' : ''}`}>{resource.title}</div>
          <div className="res-source">{resource.src}</div>
        </div>
        <div className="res-type">{resource.type}</div>
        <div className="res-actions">
          {isVideo && (
            <button type="button" className="res-toggle" onClick={() => setWatching((w) => !w)}>
              {watching ? 'hide ▴' : 'watch ▾'}
            </button>
          )}
          <a className="res-link" href={resource.url} target="_blank" rel="noopener noreferrer">
            {isVideo ? 'YouTube ↗' : 'open ↗'}
          </a>
        </div>
      </div>
      {isVideo && watching && (
        <div className="video-wrap">
          <div className="video-frame">
            <iframe src={resource.embed} loading="lazy" allowFullScreen title={resource.title} />
          </div>
          <div className="video-hint">Watched it? Tick the box above to mark this complete. Prefer YouTube itself? Use the link on the right instead.</div>
        </div>
      )}
    </div>
  );
}
