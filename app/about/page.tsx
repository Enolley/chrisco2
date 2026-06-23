import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Chrisco Educational Centre — our story, vision, mission, values and the friendly team who run our school.",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>About Us</span></div>
        <h1>About Chrisco<br />Educational Centre</h1>
        <p>A story of faith, friendship, and a whole lot of believing in every child.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    {/* OUR STORY */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2" style={{alignItems: 'center', gap: '3rem'}}>
          <div className="reveal">
            <span className="eyebrow">📖 Our Story</span>
            <h2 className="section-heading">Built on Faith,<br />Filled with <span className="squiggle text-coral">Joy</span></h2>
            <p className="mb-1">Chrisco Educational Centre started with one simple belief: every child, no matter their background, deserves a happy, high-quality education built on strong values and guided by faith.</p>
            <p className="mb-1">Tucked into the heart of Woodley, Nairobi, our school has grown from a small learning centre into a lively community serving hundreds of families. Through every year of growth, what matters most to us has never changed.</p>
            <p>Education isn't just about facts and figures — it's about shaping kind, curious, confident children who are excited to discover the world around them.</p>
          </div>
          <div className="reveal">
            <div className="sticker-card" style={{background: 'var(--sky-dark)', borderColor: 'var(--plum)'}}>
              <div className="mb-2">
                <div style={{fontSize: '2.6rem', marginBottom: '0.5rem'}}>📜</div>
                <h3 style={{color: 'var(--paper-white)'}}>Founded</h3>
                <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 0.9rem', marginTop: '0.5rem'}}>Over two decades ago, right here in Woodley, Nairobi — with a big dream of joyful, values-led education for every child.</p>
              </div>
              <div className="mb-2">
                <div style={{fontSize: '2.6rem', marginBottom: '0.5rem'}}>🌍</div>
                <h3 style={{color: 'var(--paper-white)'}}>Location</h3>
                <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 0.9rem', marginTop: '0.5rem'}}>Woodley Estate, Nairobi — easy to reach for families across the city.</p>
              </div>
              <div>
                <div style={{fontSize: '2.6rem', marginBottom: '0.5rem'}}>📋</div>
                <h3 style={{color: 'var(--paper-white)'}}>Accreditation</h3>
                <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 0.9rem', marginTop: '0.5rem'}}>Registered with the Kenya Institute of Curriculum Development (KICD) and the Ministry of Education.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* VISION / MISSION / MOTTO */}
    <section className="section" style={{background: 'var(--paper)'}} id="vision">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">💫 Who We Are</span>
          <h2 className="section-heading">Our Vision, Mission & <span className="squiggle text-sky">Motto</span></h2>
        </div>
        <div className="grid-3 mb-2">
          <div className="sticker-card text-center reveal" style={{background: 'var(--sky-dark)'}}>
            <div style={{fontSize: '2.4rem', marginBottom: '0.8rem'}}>👁️</div>
            <h3 style={{color: 'var(--paper-white)', marginBottom: '0.8rem'}}>Our Vision</h3>
            <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.8rem 1rem', fontSize: '0.94rem'}}>To be Nairobi's most loved faith-centred school — raising confident, kind, high-achieving children ready to lead Kenya's future.</p>
          </div>
          <div className="sticker-card text-center reveal" style={{background: 'var(--coral-dark)'}}>
            <div style={{fontSize: '2.4rem', marginBottom: '0.8rem'}}>🎯</div>
            <h3 style={{color: 'var(--paper-white)', marginBottom: '0.8rem'}}>Our Mission</h3>
            <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.8rem 1rem', fontSize: '0.94rem'}}>To give every child a happy, nurturing place to learn — where they are known, valued, and supported to grow academically, socially and spiritually.</p>
          </div>
          <div className="sticker-card text-center reveal" style={{background: 'var(--sun)'}}>
            <div style={{fontSize: '2.4rem', marginBottom: '0.8rem'}}>⚓</div>
            <h3 style={{marginBottom: '0.8rem'}}>Our Motto</h3>
            <p style={{fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem'}}>"Foundation for Success"</p>
            <p style={{fontSize: '0.88rem', opacity: '0.85'}}>Everything we do builds a strong, happy foundation for every child's lifelong journey.</p>
          </div>
        </div>

        <h3 className="text-center mb-2 reveal" id="values">Our Core Values</h3>
        <div className="grid-4">
          <div className="value-blob reveal">
            <div className="blob-icon badge-sky">💛</div>
            <h4>Faith</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Grounded in values that shape good character and good choices.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-sun">⚡</div>
            <h4>Excellence</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Always trying our best and celebrating every step of progress.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-grass">🤝</div>
            <h4>Integrity</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Being honest and doing the right thing, even when no one's watching.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-coral">💕</div>
            <h4>Compassion</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Caring genuinely for every student, family and friend.</p>
          </div>
        </div>
      </div>
    </section>

    {/* PRINCIPAL'S MESSAGE */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2" style={{alignItems: 'center', gap: '3rem'}}>
          <div className="reveal text-center">
            <div style={{width: '180px', height: '180px', borderRadius: '50%', background: 'var(--sky)', margin: '0 auto 1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4.5rem', border: '5px solid var(--plum)'}}>👨‍💼</div>
            <h3>The Principal</h3>
            <p style={{color: 'var(--coral-dark)', fontWeight: '700', fontSize: '0.9rem'}}>Chrisco Educational Centre</p>
          </div>
          <div className="reveal">
            <span className="eyebrow">✉️ From the Principal's Desk</span>
            <h2 className="section-heading">A Message of <span className="squiggle text-coral">Welcome</span></h2>
            <p className="mb-1" style={{fontStyle: 'italic', fontSize: '1.02rem', borderLeft: '4px solid var(--sun)', paddingLeft: '1rem'}}>"At Chrisco, we believe education is the greatest gift we can give a child — not just facts, but character, courage and compassion."</p>
            <p className="mb-1">Welcome to Chrisco Educational Centre! Whether you're already part of our family or just getting to know us, we're so glad you're here. Ours is a school where every child matters, every teacher truly cares, and every day brings something new to discover.</p>
            <p>Come visit us — walk through our classrooms, meet our teachers, and see the joyful environment we've built together. We'd love to welcome your family into ours.</p>
            <div className="mt-2" style={{fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic'}}>— The Principal</div>
          </div>
        </div>
      </div>
    </section>

    {/* LEADERSHIP TEAM */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🌟 Our Leadership</span>
          <h2 className="section-heading">The Friendly Faces <span className="squiggle text-grass">Behind Chrisco</span></h2>
        </div>
        <div className="grid-4">
          <div className="team-card reveal">
            <div className="team-avatar badge-sky">👨‍💼</div>
            <h4>Principal</h4>
            <span className="role">School Leadership & Vision</span>
          </div>
          <div className="team-card reveal">
            <div className="team-avatar badge-coral">👩‍💼</div>
            <h4>Deputy Principal</h4>
            <span className="role">Academics & Curriculum</span>
          </div>
          <div className="team-card reveal">
            <div className="team-avatar badge-sun">👩‍🏫</div>
            <h4>Head of Academics</h4>
            <span className="role">Teaching & Learning</span>
          </div>
          <div className="team-card reveal">
            <div className="team-avatar badge-grass">👨‍💻</div>
            <h4>Director of Admissions</h4>
            <span className="role">Enrolment & Families</span>
          </div>
        </div>
      </div>
    </section>

    {/* AWARDS */}
    <section className="section bg-white">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🏆 Proud Moments</span>
          <h2 className="section-heading">Awards & <span className="squiggle text-sun">Achievements</span></h2>
        </div>
        <div className="grid-3">
          <div className="sticker-card reveal" style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
            <div style={{fontSize: '2.2rem', flexShrink: '0'}}>🏅</div>
            <div>
              <h4>Best School in Woodley</h4>
              <p>Recognised by the Nairobi County Education Board for outstanding results and community impact.</p>
            </div>
          </div>
          <div className="sticker-card reveal" style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
            <div style={{fontSize: '2.2rem', flexShrink: '0'}}>🎖️</div>
            <div>
              <h4>CBC Implementation Champion</h4>
              <p>Commended by KICD for exemplary delivery of the Competency-Based Curriculum.</p>
            </div>
          </div>
          <div className="sticker-card reveal" style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
            <div style={{fontSize: '2.2rem', flexShrink: '0'}}>⭐</div>
            <div>
              <h4>Community Excellence Award</h4>
              <p>Honoured for consistent community service and character-led, faith-based education.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-banner" style={{background: 'var(--sky-dark)'}}>
      <div className="container">
        <h2>Come Meet Us in Person! 🏫</h2>
        <p style={{display: 'inline-block', background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 1.1rem'}}>There's nothing like seeing the smiles and hearing the laughter for yourself. Book a free tour today.</p>
        <div className="btn-row">
          <a href="/contact" className="btn btn-sun">Book a School Tour</a>
          <a href="/admissions" className="btn btn-outline-light">Apply Now</a>
        </div>
      </div>
    </section>

    </>
  );
}
