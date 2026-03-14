import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="brand">Juan Yanza React Final</span>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        {!user && <Link to="/login">Login</Link>}
        {user && <span className="user-pill">Hi, {user.firstName}</span>}
      </div>
    </nav>
  );
}
<Link to="/scanner">Media Scanner</Link>

