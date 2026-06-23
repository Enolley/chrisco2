"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {submitted && (
        <div className="form-success" style={{ display: "block" }}>
          <div style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}>✅</div>
          <strong style={{ fontSize: "1.05rem", display: "block", marginBottom: "0.4rem" }}>
            Message Received!
          </strong>
          Thank you for reaching out. A member of our team will respond within one working day.
        </div>
      )}

      {!submitted && (
        <form className="kid-form form-card" onSubmit={handleSubmit}>
          <div className="form-row-2">
            <div>
              <label>Your Name *</label>
              <input type="text" placeholder="Full name" required />
            </div>
            <div>
              <label>Phone Number *</label>
              <input type="tel" placeholder="+254 7XX XXX XXX" required />
            </div>
          </div>
          <div>
            <label>Email Address *</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label>Subject</label>
            <select defaultValue="">
              <option value="">— Select a subject —</option>
              <option>Admissions Enquiry</option>
              <option>School Tour Request</option>
              <option>Academic Information</option>
              <option>Fees Information</option>
              <option>Co-Curricular Activities</option>
              <option>General Enquiry</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label>Your Message *</label>
            <textarea rows={5} placeholder="Write your message here..." required></textarea>
          </div>
          <div>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "0.83rem",
                lineHeight: 1.5,
              }}
            >
              <input type="checkbox" style={{ width: "auto", marginTop: "3px", flexShrink: 0 }} required />
              I consent to Chrisco Educational Centre storing my details to respond to my enquiry, in
              line with Kenya&apos;s Data Protection Act.
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-sun"
            style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem" }}
          >
            Send Message →
          </button>
          <p className="text-center" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Or reach us directly:{" "}
            <a
              href="https://wa.me/254728411547"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--grass-dark)", fontWeight: 700 }}
            >
              💬 WhatsApp
            </a>{" "}
            ·{" "}
            <a href="tel:+254728411547" style={{ color: "var(--sky-dark)", fontWeight: 700 }}>
              📞 Call
            </a>
          </p>
        </form>
      )}
    </>
  );
}
