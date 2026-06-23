import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image src="/logo.png" alt="Chrisco Educational Centre logo" width={56} height={56} />
              <p>
                A warm, joyful school in Woodley, Nairobi where every child feels safe, loved, and
                excited to learn — from Play Group all the way to Junior Secondary.
              </p>
              <span className="footer-motto">✦ Happy Learners, Bright Futures ✦</span>
            </div>

            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/academics">Learning</Link></li>
                <li><Link href="/facilities">Our Campus</Link></li>
                <li><Link href="/cocurricular">Fun Stuff</Link></li>
                <li><Link href="/admissions">Admissions</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Classes We Offer</h5>
              <ul>
                <li><Link href="/academics#playgroup">Play Group</Link></li>
                <li><Link href="/academics#preprimary">Pre-Primary (PP1–PP2)</Link></li>
                <li><Link href="/academics#lower">Lower Primary (Gr 1–3)</Link></li>
                <li><Link href="/academics#upper">Upper Primary (Gr 4–6)</Link></li>
                <li><Link href="/academics#junior">Junior Secondary (Gr 7–9)</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Get in Touch</h5>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Woodley Estate, Nairobi, Kenya</span>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <a href="tel:+254728411547">+254 728 411 547</a>
              </div>
              <div className="footer-contact-item">
                <span>✉</span>
                <a href="mailto:info@chriscoeducationalcentre.ac.ke">info@chriscoeducationalcentre.ac.ke</a>
              </div>
              <div className="footer-contact-item">
                <span>🕐</span>
                <span>Mon–Fri: 7am – 5pm<br />Sat: 8am – 12pm</span>
              </div>
              <div className="footer-social" style={{ marginTop: "1rem" }}>
                <a href="#" title="Facebook" aria-label="Facebook">f</a>
                <a href="#" title="Twitter/X" aria-label="Twitter">𝕏</a>
                <a href="https://wa.me/254728411547" title="WhatsApp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">W</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Chrisco Educational Centre. All rights reserved.</span>
          <span>Made with 💛 for our Chrisco kids</span>
        </div>
      </div>
    </footer>
  );
}
