import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Chrisco Educational Centre – a happy, colourful school in Woodley, Nairobi for Play Group through Junior Secondary. Come learn, play and grow with us!",
};

export default function Page() {
  return (
    <>
    {/* HERO */}
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-badges mb-1">
              <span className="hero-badge-chip">☀️ Est. 2005</span>
              <span className="hero-badge-chip">📍 Woodley, Nairobi</span>
            </div>
            <h1>Where Every Day Is a <em>New Adventure</em> in Learning!</h1>
            <p>Chrisco Educational Centre is a warm, colourful school where children laugh, ask questions, make friends and grow — from their very first day of Play Group all the way to Junior Secondary.</p>
            <div className="hero-buttons">
              <a href="/admissions" className="btn btn-sun">🎒 Join Our School</a>
              <a href="/about" className="btn btn-outline-light">Meet Chrisco 👋</a>
            </div>
          </div>
          <div className="hero-art">
            <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
              {/* ground */}
              <ellipse cx="210" cy="380" rx="190" ry="18" fill="rgba(0,0,0,0.08)"/>
              {/* school building */}
              <rect x="90" y="190" width="240" height="160" rx="14" fill="#FFF8EC" stroke="#2B2250" strokeWidth="6"/>
              <polygon points="80,195 210,120 340,195" fill="#FF6B5E" stroke="#2B2250" strokeWidth="6" strokeLinejoin="round"/>
              <rect x="190" y="130" width="40" height="40" fill="#FFC93C" stroke="#2B2250" strokeWidth="5"/>
              {/* door */}
              <rect x="185" y="285" width="50" height="65" rx="6" fill="#2EA8DC" stroke="#2B2250" strokeWidth="5"/>
              <circle cx="222" cy="318" r="3" fill="#2B2250"/>
              {/* windows */}
              <rect x="115" y="215" width="42" height="42" rx="6" fill="#2EA8DC" stroke="#2B2250" strokeWidth="5"/>
              <line x1="136" y1="215" x2="136" y2="257" stroke="#2B2250" strokeWidth="4"/>
              <line x1="115" y1="236" x2="157" y2="236" stroke="#2B2250" strokeWidth="4"/>
              <rect x="263" y="215" width="42" height="42" rx="6" fill="#2EA8DC" stroke="#2B2250" strokeWidth="5"/>
              <line x1="284" y1="215" x2="284" y2="257" stroke="#2B2250" strokeWidth="4"/>
              <line x1="263" y1="236" x2="305" y2="236" stroke="#2B2250" strokeWidth="4"/>
              {/* flag */}
              <line x1="210" y1="120" x2="210" y2="80" stroke="#2B2250" strokeWidth="5"/>
              <polygon points="210,80 246,92 210,104" fill="#3FB872" stroke="#2B2250" strokeWidth="4" strokeLinejoin="round"/>

              {/* sun mascot top right */}
              <g className="float-bob">
                <circle cx="340" cy="70" r="38" fill="#FFC93C" stroke="#2B2250" strokeWidth="6"/>
                <circle cx="328" cy="64" r="5" fill="#2B2250"/>
                <circle cx="352" cy="64" r="5" fill="#2B2250"/>
                <path d="M322 78 Q340 90 358 78" fill="none" stroke="#2B2250" strokeWidth="5" strokeLinecap="round"/>
              </g>

              {/* balloons bottom left */}
              <g className="wiggle">
                <ellipse cx="55" cy="290" rx="22" ry="27" fill="#FF6B5E" stroke="#2B2250" strokeWidth="5"/>
                <line x1="55" y1="317" x2="55" y2="355" stroke="#2B2250" strokeWidth="3"/>
                <ellipse cx="95" cy="270" rx="18" ry="22" fill="#3FB872" stroke="#2B2250" strokeWidth="5"/>
                <line x1="95" y1="292" x2="95" y2="345" stroke="#2B2250" strokeWidth="3"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg>
      </div>
    </section>

    {/* QUICK STATS */}
    <section className="section-tight bg-white">
      <div className="container">
        <div className="grid-4">
          <div className="sticker-card text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--sky-dark)'}}><span data-count="32" data-suffix="+">0+</span></strong>
            <p style={{fontWeight: '700', marginTop: '0.3rem'}}>Years of Happy Learning</p>
          </div>
          <div className="sticker-card text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--coral-dark)'}}><span data-count="800" data-suffix="+">0+</span></strong>
            <p style={{fontWeight: '700', marginTop: '0.3rem'}}>Smiling Students</p>
          </div>
          <div className="sticker-card text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--grass-dark)'}}><span data-count="50" data-suffix="+">0+</span></strong>
            <p style={{fontWeight: '700', marginTop: '0.3rem'}}>Caring Teachers</p>
          </div>
          <div className="sticker-card text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--sun-dark)'}}><span data-count="95" data-suffix="%">0%</span></strong>
            <p style={{fontWeight: '700', marginTop: '0.3rem'}}>Happy Parents</p>
          </div>
        </div>
      </div>
    </section>

    {/* WHY CHRISCO */}
    <section className="section bg-white">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🌈 Why Families Love Us</span>
          <h2 className="section-heading">A School Where Kids Feel <span className="squiggle text-coral">Right at Home</span></h2>
          <p className="section-sub" style={{margin: '0 auto'}}>We mix fun, friendship and first-class learning so every child wants to come back tomorrow.</p>
        </div>
        <div className="grid-3">
          <div className="sticker-card reveal">
            <div className="icon-badge badge-sky">🎓</div>
            <h4>Learning Made Fun</h4>
            <p>Our CBC curriculum turns lessons into hands-on discoveries, so children learn by doing, building and exploring.</p>
          </div>
          <div className="sticker-card reveal">
            <div className="icon-badge badge-coral">💛</div>
            <h4>Kind Hearts, Strong Values</h4>
            <p>We help every child grow up caring, honest and confident — building good character alongside good grades.</p>
          </div>
          <div className="sticker-card reveal">
            <div className="icon-badge badge-grass">🏫</div>
            <h4>A Campus Built for Play</h4>
            <p>Science corners, computer labs, art studios and big green playgrounds — there's always something exciting to do.</p>
          </div>
          <div className="sticker-card reveal">
            <div className="icon-badge badge-sun">🌱</div>
            <h4>Room to Grow</h4>
            <p>Sports, music, scouts, drama and art help every child discover what they love and shine in their own way.</p>
          </div>
          <div className="sticker-card reveal">
            <div className="icon-badge badge-sky">👩‍🏫</div>
            <h4>Teachers Who Listen</h4>
            <p>Our teachers know every learner by name, by smile and by story — and cheer them on every step of the way.</p>
          </div>
          <div className="sticker-card reveal">
            <div className="icon-badge badge-coral">🤝</div>
            <h4>One Big Happy Family</h4>
            <p>Parents and teachers work side by side, so every family feels welcomed, heard and part of the Chrisco story.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ACADEMIC PATHWAY */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="mb-2 reveal" style={{maxWidth: '600px'}}>
          <span className="eyebrow">🗺️ Your Child's Journey</span>
          <h2 className="section-heading">From Play Group to <span className="squiggle text-sky">Junior Secondary</span></h2>
          <p className="section-sub">A friendly path that grows right alongside your child, one happy milestone at a time.</p>
        </div>
        <div className="grid-3" style={{marginBottom: '1.6rem'}}>
          <div className="path-card reveal">
            <div className="path-emoji">🧸</div>
            <div>
              <h4>Play Group</h4>
              <p>Ages 2.5 – 4 · Singing, playing & first friendships</p>
              <a href="/academics#playgroup">Learn more →</a>
            </div>
          </div>
          <div className="path-card reveal">
            <div className="path-emoji">🌟</div>
            <div>
              <h4>Pre-Primary (PP1–PP2)</h4>
              <p>Ages 4 – 6 · Letters, numbers & creativity</p>
              <a href="/academics#preprimary">Learn more →</a>
            </div>
          </div>
          <div className="path-card reveal">
            <div className="path-emoji">📚</div>
            <div>
              <h4>Lower Primary (Gr 1–3)</h4>
              <p>Ages 6 – 9 · Core skills & good habits</p>
              <a href="/academics#lower">Learn more →</a>
            </div>
          </div>
          <div className="path-card reveal">
            <div className="path-emoji">🔬</div>
            <div>
              <h4>Upper Primary (Gr 4–6)</h4>
              <p>Ages 9 – 12 · Big ideas & curious minds</p>
              <a href="/academics#upper">Learn more →</a>
            </div>
          </div>
          <div className="path-card reveal">
            <div className="path-emoji">🏆</div>
            <div>
              <h4>Junior Secondary (Gr 7–9)</h4>
              <p>Ages 12 – 15 · Leadership & bright futures</p>
              <a href="/academics#junior">Learn more →</a>
            </div>
          </div>
          <div className="sticker-card reveal" style={{background: 'var(--coral-dark)', borderColor: 'var(--plum)', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3 style={{color: 'var(--paper-white)', fontSize: '1.2rem', marginBottom: '0.6rem'}}>Ready to Join Us? 🎉</h3>
            <p style={{background: 'rgba(255,255,255,0.92)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.8rem', fontSize: '0.88rem', marginBottom: '1.2rem', display: 'inline-block'}}>We welcome new friends all year round!</p>
            <a href="/admissions" className="btn btn-sun btn-sm" style={{alignSelf: 'flex-start'}}>Apply Now →</a>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="section bg-white">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">💬 Parent Voices</span>
          <h2 className="section-heading">What Our Families <span className="squiggle text-grass">Say</span></h2>
        </div>
        <div className="grid-3">
          <div className="quote-card reveal">
            <div className="stars">★★★★★</div>
            <p>"Chrisco has been wonderful for our daughter. The teachers know each child by name, and she runs in every morning excited to learn."</p>
            <div className="quote-author">
              <div className="quote-avatar">AM</div>
              <div><strong>Amina M.</strong><span>Parent, Grade 5</span></div>
            </div>
          </div>
          <div className="quote-card reveal">
            <div className="stars">★★★★★</div>
            <p>"My son comes home bursting to tell us what he discovered that day. Learning here feels like an adventure, not a chore."</p>
            <div className="quote-author">
              <div className="quote-avatar">DK</div>
              <div><strong>David K.</strong><span>Parent, Grade 3</span></div>
            </div>
          </div>
          <div className="quote-card reveal">
            <div className="stars">★★★★★</div>
            <p>"From our very first visit, Chrisco felt warm and welcoming. Our children are happy, confident, and love going to school."</p>
            <div className="quote-author">
              <div className="quote-avatar">GW</div>
              <div><strong>Grace W.</strong><span>Parent, PP2 & Grade 7</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* NEWS & EVENTS */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.2rem', flexWrap: 'wrap', gap: '1rem'}} className="reveal">
          <div>
            <span className="eyebrow">📣 What's Happening</span>
            <h2 className="section-heading">News & <span className="squiggle text-coral">Events</span></h2>
          </div>
          <a href="/gallery" className="btn btn-plum btn-sm">See Gallery →</a>
        </div>
        <div className="grid-3">
          <div className="event-card reveal">
            <div className="event-card-top" style={{background: 'var(--sun)'}}>🏅</div>
            <div className="event-card-body">
              <span className="event-tag">Achievement</span>
              <h4>Amazing CBC Results This Year!</h4>
              <p>Our Grade 6 superstars scored top marks in this year's Competency-Based Assessment — 94% met or beat the standard!</p>
              <div className="event-meta">📅 March 2026</div>
            </div>
          </div>
          <div className="event-card reveal">
            <div className="event-card-top" style={{background: 'var(--sky)'}}>⚽</div>
            <div className="event-card-body">
              <span className="event-tag">Sports</span>
              <h4>Our Football Team Is Going to Finals!</h4>
              <p>After brilliant teamwork, our boys' football squad has booked their spot in the Nairobi Zonal Championship finals.</p>
              <div className="event-meta">📅 April 2026</div>
            </div>
          </div>
          <div className="event-card reveal">
            <div className="event-card-top" style={{background: 'var(--coral)'}}>🎨</div>
            <div className="event-card-body">
              <span className="event-tag">Events</span>
              <h4>Arts & Culture Day — Save the Date!</h4>
              <p>Get ready for music, dancing, art and tasty treats at our Annual Arts & Culture Day. The whole family is invited!</p>
              <div className="event-meta">📅 June 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="cta-banner">
      <div className="container">
        <h2>Give Your Child a <span style={{color: 'var(--sun)'}}>Happy Start</span> Today</h2>
        <p style={{display: 'inline-block', background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 1.1rem'}}>Join hundreds of families who trust Chrisco with their child's most important years — full of learning, laughter and friendship.</p>
        <div className="btn-row">
          <a href="/admissions" className="btn btn-sun">Start Application</a>
          <a href="/contact" className="btn btn-outline-light">Book a School Tour</a>
        </div>
      </div>
    </section>

    </>
  );
}
