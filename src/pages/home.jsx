import logo from "../logo.svg";

export default function Home() {
  return (
    <div className="page">
      <img src={logo} className="logo" alt="App Logo" />
      <h1>Welcome to My Final React Project</h1>
      <p>This project uses pages, routing, and clean component structure.</p>
    </div>
  );
}
