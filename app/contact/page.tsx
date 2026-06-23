import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Chrisco Educational Centre — Woodley, Nairobi. Phone, email, WhatsApp and location map.",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>Contact Us</span></div>
        <h1>Get in Touch<br />With Us</h1>
        <p>We'd love to hear from you! Reach us by phone, WhatsApp, email, or come visit us in Woodley, Nairobi.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    {/* CONTACT CARDS */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid-4">
          <div className="contact-card reveal">
            <div className="cc-icon badge-sun">📞</div>
            <h4>Call Us</h4>
            <p>Our admissions team is happy to answer your questions during school hours.</p>
            <a href="tel:+254728411547" className="cc-link">+254 728 411 547</a>
          </div>
          <div className="contact-card reveal">
            <div className="cc-icon badge-grass">💬</div>
            <h4>WhatsApp</h4>
            <p>The fastest way to reach us. Chat with our team right away.</p>
            <a href="https://wa.me/254728411547?text=Hello%2C+I%27d+like+to+enquire+about+Chrisco+Educational+Centre" target="_blank" rel="noopener" className="cc-link">Chat on WhatsApp</a>
          </div>
          <div className="contact-card reveal">
            <div className="cc-icon badge-coral">✉️</div>
            <h4>Email Us</h4>
            <p>Send us a detailed message and we'll reply within one working day.</p>
            <a href="mailto:info@chriscoeducationalcentre.ac.ke" className="cc-link" style={{fontSize: '0.8rem', wordBreak: 'break-all'}}>info@chriscoeducationalcentre.ac.ke</a>
          </div>
          <div className="contact-card reveal">
            <div className="cc-icon badge-sky">📍</div>
            <h4>Visit Us</h4>
            <p>We love school visits! Find us in the heart of Woodley Estate, Nairobi.</p>
            <a href="https://maps.google.com/?q=Woodley+Estate+Nairobi" target="_blank" rel="noopener" className="cc-link">Woodley Estate, Nairobi</a>
          </div>
        </div>
      </div>
    </section>

    {/* MAP + FORM */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="grid-2" style={{gap: '3rem', alignItems: 'flex-start'}}>

          <div className="reveal">
            <span className="eyebrow">🗺️ Find Us</span>
            <h2 className="section-heading mb-1">Our <span className="squiggle text-sky">Location</span></h2>
            <div className="mb-2" style={{border: '3px solid var(--plum)', borderRadius: 'var(--radius-md)', overflow: 'hidden'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808!2d36.7800!3d-1.2950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a4e5a8a8a8%3A0x1!2sWoodley%20Estate%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%" height="340" style={{border: '0', display: 'block'}} allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map to Chrisco Educational Centre">
              </iframe>
            </div>

            <div className="hours-card">
              <h4 className="mb-1" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>🕐 School Hours</h4>
              <div className="hours-row"><div style={{opacity: '0.7'}}>Monday – Friday</div><div style={{fontWeight: '700'}}>7:00 AM – 5:00 PM</div></div>
              <div className="hours-row"><div style={{opacity: '0.7'}}>Saturday</div><div style={{fontWeight: '700'}}>8:00 AM – 12:00 PM</div></div>
              <div className="hours-row"><div style={{opacity: '0.7'}}>Sunday / Public Holidays</div><div style={{fontWeight: '700', color: 'var(--coral-dark)'}}>Closed</div></div>
              <div className="mt-1" style={{paddingTop: '1rem', borderTop: '2px solid var(--line)', fontSize: '0.82rem', opacity: '0.7'}}>
                📞 Admissions enquiries are answered Monday–Friday, 8:00 AM – 4:30 PM.
              </div>
            </div>

            <div className="social-row">
              <a href="#" className="social-btn" style={{background: '#1877f2', color: 'white', borderColor: 'var(--plum)'}}><span>f</span> Facebook</a>
              <a href="https://wa.me/254728411547" target="_blank" rel="noopener" className="social-btn" style={{background: 'var(--grass-dark)', color: 'white', borderColor: 'var(--plum)'}}><span>💬</span> WhatsApp</a>
              <a href="#" className="social-btn" style={{background: 'var(--plum)', color: 'white'}}><span>𝕏</span> Twitter/X</a>
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">📝 Send a Message</span>
            <h2 className="section-heading mb-1">General <span className="squiggle text-coral">Enquiry</span></h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    {/* VISIT CTA */}
    <section className="section bg-plum">
      <div className="container">
        <div className="grid-2" style={{alignItems: 'center', gap: '2.5rem'}}>
          <div className="reveal">
            <span className="eyebrow">🚪 Come See Us</span>
            <h2 className="mb-1">Book a <span style={{color: 'var(--sun)'}}>School Tour</span></h2>
            <p style={{opacity: '0.85'}}>The best way to experience Chrisco is to walk our halls, meet our teachers, and see our students having fun while they learn. We welcome visits every school day — just call or message to arrange a time.</p>
          </div>
          <div className="reveal" style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start'}}>
            <a href="https://wa.me/254728411547?text=Hello%2C+I+would+like+to+book+a+school+tour+at+Chrisco+Educational+Centre" target="_blank" rel="noopener" className="btn" style={{background: '#25D366', color: 'white', fontSize: '1rem', padding: '1rem 2rem'}}>💬 Book via WhatsApp</a>
            <a href="tel:+254728411547" className="btn btn-outline-light" style={{fontSize: '1rem', padding: '1rem 2rem'}}>📞 Call to Book a Visit</a>
            <p style={{opacity: '0.6', fontSize: '0.82rem'}}>Tours available Mon–Fri, 9:00 AM – 3:00 PM</p>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
