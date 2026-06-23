import type { Metadata } from "next";
import AdmissionsForm from "@/components/AdmissionsForm";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions at Chrisco Educational Centre — how to apply, age guide, requirements and frequently asked questions.",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>Admissions</span></div>
        <h1>Join the Chrisco<br />Family</h1>
        <p>We welcome new friends all year round. Here's how simple it is to give your child a happy start.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    {/* PROCESS + FORM */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2" style={{gap: '3rem', alignItems: 'flex-start'}}>

          <div className="reveal">
            <span className="eyebrow">🪜 Admissions Process</span>
            <h2 className="section-heading">Four Simple <span className="squiggle text-coral">Steps</span></h2>
            <p className="mb-2" style={{opacity: '0.8'}}>We've made joining Chrisco simple, friendly and stress-free for every family.</p>

            <div className="process-step active">
              <div className="step-circle">1</div>
              <div className="step-content">
                <h4>Submit Your Enquiry</h4>
                <p>Fill in the form on this page, or reach us by phone or WhatsApp. Tell us about your child and the level they'll be joining.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-circle">2</div>
              <div className="step-content">
                <h4>School Visit & Assessment</h4>
                <p>We'll invite you for a school tour and a short, friendly chat to understand your child's learning level and make sure it's a great fit.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-circle">3</div>
              <div className="step-content">
                <h4>Offer of Place</h4>
                <p>If it's a match, we'll send a formal offer of a place at Chrisco, along with everything you need to confirm enrolment.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-circle">4</div>
              <div className="step-content">
                <h4>Enrol & Join Us</h4>
                <p>Complete the enrolment steps, pay the applicable fees, and welcome your child to the Chrisco family. We can't wait to meet them!</p>
              </div>
            </div>

            <div className="mt-2" style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <a href="https://wa.me/254722407837?text=Hello%2C+I+would+like+to+enquire+about+admission+to+Chrisco+Educational+Centre" target="_blank" rel="noopener" className="contact-quickbtn" style={{background: 'var(--grass-dark)'}}>
                <span style={{fontSize: '1.3rem'}}>💬</span> Enquire on WhatsApp
              </a>
              <a href="tel:+254722407837" className="contact-quickbtn" style={{background: 'var(--plum)'}}>
                <span style={{fontSize: '1.3rem'}}>📞</span> Call Us: +254 722 407 837
              </a>
            </div>
          </div>

          <div className="reveal">
            <AdmissionsForm />
          </div>
        </div>
      </div>
    </section>

    {/* AGE GUIDE */}
    <section className="section" style={{background: 'var(--paper)'}} id="age-guide">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">📅 Entry Requirements</span>
          <h2 className="section-heading">Age Guide & <span className="squiggle text-sky">Entry Levels</span></h2>
        </div>
        <div style={{overflowX: 'auto'}} className="reveal">
          <table className="kid-table">
            <thead>
              <tr><th>Level</th><th>Grade / Year</th><th>Typical Age</th><th>CBC Stage</th><th>Available</th></tr>
            </thead>
            <tbody>
              <tr><td>Play Group</td><td>–</td><td>2.5 – 4 years</td><td>Pre-Primary</td><td>✓ Open</td></tr>
              <tr><td>Pre-Primary</td><td>PP1</td><td>4 – 5 years</td><td>Pre-Primary</td><td>✓ Open</td></tr>
              <tr><td>Pre-Primary</td><td>PP2</td><td>5 – 6 years</td><td>Pre-Primary</td><td>✓ Open</td></tr>
              <tr><td>Lower Primary</td><td>Grade 1</td><td>6 – 7 years</td><td>Lower Primary</td><td>✓ Open</td></tr>
              <tr><td>Lower Primary</td><td>Grade 2</td><td>7 – 8 years</td><td>Lower Primary</td><td>✓ Open</td></tr>
              <tr><td>Lower Primary</td><td>Grade 3</td><td>8 – 9 years</td><td>Lower Primary</td><td>✓ Open</td></tr>
              <tr><td>Upper Primary</td><td>Grade 4</td><td>9 – 10 years</td><td>Upper Primary</td><td>✓ Open</td></tr>
              <tr><td>Upper Primary</td><td>Grade 5</td><td>10 – 11 years</td><td>Upper Primary</td><td>✓ Open</td></tr>
              <tr><td>Upper Primary</td><td>Grade 6</td><td>11 – 12 years</td><td>Upper Primary</td><td>✓ Open</td></tr>
              <tr><td>Junior Secondary</td><td>Grade 7</td><td>12 – 13 years</td><td>Junior Secondary</td><td>✓ Open</td></tr>
              <tr><td>Junior Secondary</td><td>Grade 8</td><td>13 – 14 years</td><td>Junior Secondary</td><td>✓ Open</td></tr>
              <tr><td>Junior Secondary</td><td>Grade 9</td><td>14 – 15 years</td><td>Junior Secondary</td><td>✓ Open</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-center mt-1" style={{fontSize: '0.82rem', opacity: '0.65'}}>* Age guidelines are approximate. Placement may depend on assessment results and prior academic records.</p>
      </div>
    </section>

    {/* REQUIREMENTS + FEES + FAQ */}
    <section className="section bg-white" id="requirements">
      <div className="container">
        <div className="grid-2" style={{gap: '3rem', alignItems: 'flex-start'}}>
          <div className="reveal">
            <span className="eyebrow">🎒 What to Bring</span>
            <h3 className="mb-1" style={{fontSize: '1.4rem'}}>Documents Needed<br />for <span className="squiggle text-coral">Enrolment</span></h3>
            <div className="mt-1" style={{display: 'flex', flexDirection: 'column', gap: '0.7rem'}}>
              <div className="req-item"><span className="req-icon">📄</span> Birth certificate (original + copy)</div>
              <div className="req-item"><span className="req-icon">📸</span> Recent passport-size photos (x2)</div>
              <div className="req-item"><span className="req-icon">🎓</span> Previous school report (if applicable)</div>
              <div className="req-item"><span className="req-icon">💉</span> Immunisation / health card</div>
              <div className="req-item"><span className="req-icon">🪪</span> Parent / Guardian national ID copy</div>
              <div className="req-item"><span className="req-icon">📋</span> Completed application form (collected at school)</div>
            </div>
          </div>

          <div className="reveal">
            <div className="sticker-card mb-2" style={{background: 'var(--coral-dark)'}}>
              <h3 style={{color: 'var(--sun)', fontSize: '1.2rem'}} className="mb-1">School Fees</h3>
              <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 0.9rem'}} className="mb-1">Our fee structure is designed to be fair and accessible, reflecting the quality of education and facilities we offer.</p>
              <p style={{background: 'rgba(255,255,255,0.85)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 0.9rem', fontSize: '0.85rem'}}>For a full fee breakdown covering tuition, activities and other costs, please contact our admissions office directly.</p>
              <div className="mt-1" style={{display: 'flex', gap: '0.7rem', flexWrap: 'wrap'}}>
                <a href="tel:+254722407837" className="btn btn-sun btn-sm">📞 Call for Fees</a>
                <a href="https://wa.me/254722407837" target="_blank" rel="noopener" className="btn btn-outline-light btn-sm">💬 WhatsApp Us</a>
              </div>
            </div>

            <h4 className="mb-1">Frequently Asked Questions</h4>
            <div className="faq-item">
              <div className="faq-q">Do you accept mid-term enrolments? <span className="faq-icon">+</span></div>
              <div className="faq-a"><div className="faq-a-inner">Yes! Subject to space being available, we welcome students throughout the year. Contact us to check current spots in your child's preferred level.</div></div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is there a registration fee? <span className="faq-icon">+</span></div>
              <div className="faq-a"><div className="faq-a-inner">Yes, a one-time, non-refundable registration fee is payable once an offer of place is accepted. Contact our admissions office for the current amount.</div></div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Are there payment plan options? <span className="faq-icon">+</span></div>
              <div className="faq-a"><div className="faq-a-inner">Yes, we offer flexible payment arrangements. Speak to our admissions team about what works best for your family.</div></div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How long is the assessment process? <span className="faq-icon">+</span></div>
              <div className="faq-a"><div className="faq-a-inner">It's short and informal — usually done in a single school visit. We aim to share a decision within 3 working days of the assessment.</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
