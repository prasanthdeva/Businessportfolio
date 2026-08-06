import { CONTACT_LINKS } from '../data/contact';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="fbrand">MANIRATHNAM MURUGESAN</div>
        <div className="flinks">
          {CONTACT_LINKS.map((l) =>
            l.url ? (
              <a
                key={l.label}
                href={l.url}
                {...(l.url.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {l.label}
              </a>
            ) : (
              <span className="flink-soon" title="Link not added yet" key={l.label}>
                {l.label} <em>soon</em>
              </span>
            ),
          )}
        </div>
        <div className="fnote">BUILT FOR THE FAULTLINE.AI / GENAI-LEAD-ENGINEER TRACK · LAST UPDATED 2026-08-06</div>
      </div>
    </footer>
  );
}
