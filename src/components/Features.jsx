const FEATURES = [
  { title: "Clean UI", desc: "Modern layouts with consistent spacing." },
  { title: "Smooth Animations", desc: "Subtle motion that feels professional." },
  { title: "Recruiter Ready", desc: "Projects built to impress hiring teams." }
];

export default function Features() {
  return (
    <section id="features" className="features">
      <h2>Professional Front-End Craft</h2>
      <div className="grid">
        {FEATURES.map(f => (
          <div key={f.title} className="card">
            <div className="icon" />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

