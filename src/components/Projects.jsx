const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "A polished React portfolio with animations and clean UI.",
    tech: "React, CSS, Vite",
    link: "https://yourprojectlink.com"
  },
  {
    title: "Dashboard UI",
    desc: "A modern dashboard with charts, stats, and authentication.",
    tech: "React, Chart.js, Firebase",
    link: "https://yourdashboard.com"
  },
  {
    title: "API Weather App",
    desc: "A weather interface using live API data and animations.",
    tech: "React, OpenWeather API",
    link: "https://yourweatherapp.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="tech">{p.tech}</span>
            <a href={p.link} target="_blank" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
