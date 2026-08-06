/** Renders a bullet string, turning a single **bold** lead-in into <strong>. */
export default function Bullet({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <li>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>,
      )}
    </li>
  );
}
