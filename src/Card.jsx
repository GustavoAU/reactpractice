export default function Card({ text, style }) {
  return (
    <div className="card" style={style}>
      {text}
    </div>
  );
}
