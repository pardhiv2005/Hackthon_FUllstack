import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import '../styles/global.css';

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signin", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in!");
      navigate("/weather");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
