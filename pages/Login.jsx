import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Simple fake auth: any non-empty email/password logs in
    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    setUser({
      firstName: "Juan",
      email: form.email,
    });

    navigate("/dashboard");
  }

  return (
    <div className="page">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
