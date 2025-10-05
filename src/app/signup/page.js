"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./signup.module.scss";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://submit-form.com/uKLMSFiS5", formData);
      alert("Signup successful!");
      setFormData({ name: "", email: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <section className={styles.signup}>
      <div className={styles.box}>
        <h1>Join the CreatorHub</h1>
        <p>Get free resources, insider tools, and weekly insights.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
}
