export default function Profile() {
  return (
    <div className="page">
      <h1>Profile Dashboard</h1>
      <div className="profile-card">
        <h2>Juan Yanza</h2>
        <p>Front-End Developer</p>
        <p>Lives in Queens, NY</p>

        <div className="stats">
          <div>
            <span className="orange">32</span>
            <p>Projects Completed</p>
          </div>
          <div>
            <span className="green">26</span>
            <p>Happy Clients</p>
          </div>
          <div>
            <span className="blue">6</span>
            <p>Active Projects</p>
          </div>
        </div>

        <p>Email: <strong>jyanza63@gmail.com</strong></p>
      </div>
    </div>
  );
}
