import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "Juan Yanza",
    email: "johnsmith87@aol.com",
    message: "Welcome name is Juan",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page">
      <h1>Contact Juan</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send</button>
      </form>

      {submitted && (
        <p className="success">
          Thanks, {form.name || "friend"} — your message has been recorded.
        </p>
      )}
    </div>
  );
}
