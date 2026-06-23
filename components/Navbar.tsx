"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header id="navbar">
      <div className="navbar-top">
        <div className="container">
          <span>📍 Woodley Estate, Nairobi, Kenya</span>
          <div className="navbar-top-links">
            <a href="tel:+254728411547">📞 +254 728 411 547</a>
            <span className="nb-sep">|</span>
            <a href="mailto:info@chriscoeducationalcentre.ac.ke">✉ Say Hello</a>
            <span className="nb-sep">|</span>
            <span>Mon–Fri 7am–5pm</span>
          </div>
        </div>
      </div>

      <div className="navbar-main">
        <div className="container">
          <nav className="navbar-inner">
            <Link href="/" className="navbar-logo">
              <Image src="/logo.png" alt="Chrisco Educational Centre logo" width={52} height={52} />
              <div className="navbar-logo-text">
                <strong>Chrisco</strong>
                <span>Happy Learners, Bright Futures</span>
              </div>
            </Link>

            <div className="nav-links">
              <div className="nav-item">
                <Link href="/">Home</Link>
              </div>

              <div className="nav-item" data-dropdown>
                <button className="nav-toggle">
                  About <span className="chev">▼</span>
                </button>
                <div className="dropdown">
                  <Link href="/about">
                    <span className="dd-icon">🏫</span>
                    <span className="dd-text">
                      <strong>Our Story</strong>
                      <span>Who we are</span>
                    </span>
                  </Link>
                  <Link href="/about#vision">
                    <span className="dd-icon">🎯</span>
                    <span className="dd-text">
                      <strong>Vision &amp; Mission</strong>
                      <span>What we dream of</span>
                    </span>
                  </Link>
                  <Link href="/about#values">
                    <span className="dd-icon">💛</span>
                    <span className="dd-text">
                      <strong>Our Values</strong>
                      <span>What we believe</span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="nav-item" data-dropdown>
                <button className="nav-toggle">
                  Learning <span className="chev">▼</span>
                </button>
                <div className="dropdown">
                  <Link href="/academics">
                    <span className="dd-icon">📋</span>
                    <span className="dd-text">
                      <strong>Overview</strong>
                      <span>Our CBC curriculum</span>
                    </span>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link href="/academics#playgroup">
                    <span className="dd-icon">🧸</span>
                    <span className="dd-text">
                      <strong>Play Group</strong>
                      <span>Ages 2.5 – 4</span>
                    </span>
                  </Link>
                  <Link href="/academics#preprimary">
                    <span className="dd-icon">🌟</span>
                    <span className="dd-text">
                      <strong>Pre-Primary PP1–PP2</strong>
                      <span>Ages 4 – 6</span>
                    </span>
                  </Link>
                  <Link href="/academics#lower">
                    <span className="dd-icon">📚</span>
                    <span className="dd-text">
                      <strong>Lower Primary Gr 1–3</strong>
                      <span>Ages 6 – 9</span>
                    </span>
                  </Link>
                  <Link href="/academics#upper">
                    <span className="dd-icon">🔬</span>
                    <span className="dd-text">
                      <strong>Upper Primary Gr 4–6</strong>
                      <span>Ages 9 – 12</span>
                    </span>
                  </Link>
                  <Link href="/academics#junior">
                    <span className="dd-icon">🏆</span>
                    <span className="dd-text">
                      <strong>Junior Secondary Gr 7–9</strong>
                      <span>Ages 12 – 15</span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <Link href="/facilities">Our Campus</Link>
              </div>
              <div className="nav-item">
                <Link href="/cocurricular">Fun Stuff</Link>
              </div>

              <div className="nav-item" data-dropdown>
                <button className="nav-toggle">
                  Admissions <span className="chev">▼</span>
                </button>
                <div className="dropdown">
                  <Link href="/admissions">
                    <span className="dd-icon">📝</span>
                    <span className="dd-text">
                      <strong>How to Join</strong>
                      <span>Easy steps</span>
                    </span>
                  </Link>
                  <Link href="/admissions#age-guide">
                    <span className="dd-icon">📅</span>
                    <span className="dd-text">
                      <strong>Age Guide</strong>
                      <span>Find the right class</span>
                    </span>
                  </Link>
                  <Link href="/admissions#requirements">
                    <span className="dd-icon">📄</span>
                    <span className="dd-text">
                      <strong>What You Need</strong>
                      <span>Documents checklist</span>
                    </span>
                  </Link>
                  <div className="dropdown-divider" />
                  <a href="https://wa.me/254728411547" target="_blank" rel="noopener noreferrer">
                    <span className="dd-icon">💬</span>
                    <span className="dd-text">
                      <strong>WhatsApp Us</strong>
                      <span>Chat right now</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="nav-item">
                <Link href="/gallery">Gallery</Link>
              </div>
              <div className="nav-item">
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="nav-cta-wrap">
              <Link href="/admissions" className="btn btn-sun btn-sm">
                Join Us! 🎉
              </Link>
            </div>

            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={openDrawer}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>

      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`} role="dialog" aria-label="Navigation menu">
        <div className="drawer-overlay" onClick={closeDrawer} />
        <div className="drawer-panel">
          <div className="drawer-panel-inner">
            <div className="drawer-close">
              <button aria-label="Close menu" onClick={closeDrawer}>
                ✕
              </button>
            </div>

            <Link href="/" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">🏠</span> Home
            </Link>
            <Link href="/about" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">🏫</span> About Us
            </Link>

            <div className="drawer-section-label">Learning</div>
            <Link href="/academics" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">📋</span> Overview
            </Link>
            <div className="drawer-sub">
              <Link href="/academics#playgroup" onClick={closeDrawer}>🧸 Play Group</Link>
              <Link href="/academics#preprimary" onClick={closeDrawer}>🌟 Pre-Primary (PP1–PP2)</Link>
              <Link href="/academics#lower" onClick={closeDrawer}>📚 Lower Primary (Gr 1–3)</Link>
              <Link href="/academics#upper" onClick={closeDrawer}>🔬 Upper Primary (Gr 4–6)</Link>
              <Link href="/academics#junior" onClick={closeDrawer}>🏆 Junior Secondary (Gr 7–9)</Link>
            </div>

            <div className="drawer-section-label">School Life</div>
            <Link href="/facilities" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">🔬</span> Our Campus
            </Link>
            <Link href="/cocurricular" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">⚽</span> Fun Stuff
            </Link>
            <Link href="/gallery" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">📷</span> Gallery
            </Link>

            <div className="drawer-divider" />
            <Link href="/admissions" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">📝</span> Admissions
            </Link>
            <Link href="/contact" className="drawer-link" onClick={closeDrawer}>
              <span className="dl-icon">📍</span> Contact Us
            </Link>
            <div className="drawer-divider" />

            <div className="drawer-cta">
              <Link href="/admissions" className="btn btn-sun" style={{ width: "100%", justifyContent: "center" }} onClick={closeDrawer}>
                Join Us! 🎉
              </Link>
            </div>

            <div className="drawer-contact">
              <div className="drawer-contact-row">
                <span>📞</span>
                <a href="tel:+254728411547">+254 728 411 547</a>
              </div>
              <div className="drawer-contact-row">
                <span>💬</span>
                <a href="https://wa.me/254728411547" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </div>
              <div className="drawer-contact-row">
                <span>📍</span>
                <span style={{ opacity: 0.6 }}>Woodley Estate, Nairobi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
