"use client";

import { useState, FormEvent } from "react";

export default function AdmissionsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-card">
      <h3 className="mb-1" style={{ fontSize: "1.2rem" }}>
        Admissions Enquiry
      </h3>
      <p className="mb-2" style={{ fontSize: "0.88rem", opacity: 0.75 }}>
        Fill in the form and our admissions team will be in touch within one working day.
      </p>

      {submitted && (
        <div className="form-success" style={{ display: "block" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✅</div>
          <strong>Thank you for your enquiry!</strong>
          <br />
          Our admissions team will contact you within one working day.
        </div>
      )}

      {!submitted && (
        <form className="kid-form" onSubmit={handleSubmit}>
          <div className="form-row-2">
            <div>
              <label>Parent / Guardian Name *</label>
              <input type="text" placeholder="Full name" required />
            </div>
            <div>
              <label>Phone Number *</label>
              <input type="tel" placeholder="+254 7XX XXX XXX" required />
            </div>
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div className="form-row-2">
            <div>
              <label>Child&apos;s Name *</label>
              <input type="text" placeholder="Child's full name" required />
            </div>
            <div>
              <label>Child&apos;s Age *</label>
              <input type="number" placeholder="Age in years" min={2} max={16} required />
            </div>
          </div>
          <div>
            <label>Level Applying For *</label>
            <select required defaultValue="">
              <option value="">— Select Level —</option>
              <option>Play Group</option>
              <option>Pre-Primary PP1</option>
              <option>Pre-Primary PP2</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7 (Junior Secondary)</option>
              <option>Grade 8 (Junior Secondary)</option>
              <option>Grade 9 (Junior Secondary)</option>
            </select>
          </div>
          <div>
            <label>Message / Additional Information</label>
            <textarea
              rows={3}
              placeholder="Tell us anything else we should know about your child or your enquiry..."
            ></textarea>
          </div>
          <div>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "0.85rem",
              }}
            >
              <input type="checkbox" required style={{ width: "auto", marginTop: "0.2rem" }} />
              I agree that Chrisco Educational Centre may contact me about this enquiry.
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-sun"
            style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}
          >
            Submit Enquiry →
          </button>
        </form>
      )}
    </div>
  );
}
