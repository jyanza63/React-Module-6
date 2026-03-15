import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">Front-End Developer</p>
        <h1>
          Building <span>polished</span> web experiences.
        </h1>
        <p className="sub">
          I create modern, animated, recruiter-ready interfaces using React.
        </p>

        <div className="actions">
          <a href="#projects" className="primary">View Projects</a>
          <a href="#contact" className="secondary">Contact</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profilePic} alt="Juan Yanza" className="profile-pic" />

        <div className="hero-card">
          <p className="card-title">Portfolio Snapshot</p>
          <ul>
            <li><span>Projects</span><strong>8+</strong></li>
            <li><span>Focus</span><strong>React & UI/UX</strong></li>
            <li><span>Location</span><strong>Queens, NY</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

