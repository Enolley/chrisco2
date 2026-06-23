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
            <p className="mb-1">Chrisco Educational Centre was founded way back in 1990 by Pastor Jeremiah Mugala (Chrisco Central Church Nairobi) as a feeding programme for children from disadvantaged backgrounds from Kibera Slums. The programme thrived owing to the fact that children could be taught the word of God, alongside mentorship activities that were being offered by Chrisco Central Church.</p>
            <p className="mb-1">By early 1991 what had been a feeding programme for about one year attracted so many children from Kibera and the community around. This led to the tremendous growth of a kindergarten school in 1991.</p>
            <p className="mb-1">The kindergarten school ran for ten years then led to the establishment of a primary school in 2001. With the proper foundation, character development and impressive academic scores, the school grew very fast and in the year 2009, Chrisco Educational Centre became a full-fledged school and had its first registration with the Ministry of Education in 2013.</p>
            <p>The hard work put in studies by the teachers and children was replicated for the first time in 2012 when our school produced the best candidate in KCPE examinations in Kibra Sub-County.</p>
          </div>
          <div className="reveal">
            <div className="sticker-card" style={{background: 'var(--sky-dark)', borderColor: 'var(--plum)'}}>
              <div className="mb-2">
                <div style={{fontSize: '2.6rem', marginBottom: '0.5rem'}}>📜</div>
                <h3 style={{color: 'var(--paper-white)'}}>Founded</h3>
                <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.7rem 0.9rem', marginTop: '0.5rem'}}>Over three decades ago, right here in Woodley, Nairobi — with a big dream of joyful, values-led education for every child.</p>
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
            <p style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.8rem 1rem', fontSize: '0.94rem'}}>&quot;Foundation For Success&quot;</p>
          </div>
          <div className="sticker-card text-center reveal" style={{background: 'var(--coral-dark)'}}>
            <div style={{fontSize: '2.4rem', marginBottom: '0.8rem'}}>🎯</div>
            <h3 style={{color: 'var(--paper-white)', marginBottom: '0.8rem'}}>Our Mission</h3>
            <div  style={{background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.8rem 1rem', fontSize: '0.94rem'}}>
              <p style={{}}>Meet The Needs Of The Total Man:</p>
                  <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.5rem" }}>
                  <li>Mentally</li>
                  <li>Physically</li>
                  <li>Socially</li>
                  <li>Spiritually</li>
                </ul>
            </div>
          </div>
          <div className="sticker-card text-center reveal" style={{background: 'var(--sun)'}}>
            <div style={{fontSize: '2.4rem', marginBottom: '0.8rem'}}>⚓</div>
            <h3 style={{marginBottom: '0.8rem'}}>Our Motto</h3>
            <p style={{fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem'}}>"Foundation for Success"</p>
            <p style={{fontSize: '0.88rem', opacity: '0.85'}}>Everything we do is designed to lay a strong, lasting foundation for every student&apos;s lifelong journey of success.</p>
          </div>
        </div>

        <h3 className="text-center mb-2 reveal" id="values">Our Core Values</h3>
        <div className="grid-3">
          <div className="value-blob reveal">
            <div className="blob-icon badge-sky">💛</div>
            <h4>Glorifying God</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Grounded in Christian values that shape character and guide decision-making.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-sun">⚡</div>
            <h4>Excellence</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>An unwavering commitment to the highest standards in everything we do.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-grass">🤝</div>
            <h4>Discipline</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Honesty, transparency and doing right — even when no one is watching.</p>
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
            <h2 className="section-heading">Welcome to <span className="squiggle text-coral">Chrisco Educational Centre</span></h2>
            <p className="mb-1" style={{fontStyle: 'italic', fontSize: '1.02rem', borderLeft: '4px solid var(--sun)', paddingLeft: '1rem'}}>&quot;I am honoured to lead a school community rooted in faith, academic excellence and talent development. At Chrisco, we believe every learner is created with a purpose — to excel in class, on the field, on stage and in character. This is basically rooted in our Motto: <strong>&quot;Foundation for Success&quot;</strong>&quot; </p>
            <p className="mb-1">As a faith based institution, spiritual growth and mentorship are at the heart of everything we do. We nurture minds, build character and raise students who serve God and the community with integrity.</p>
            <p className="mb-1">Our school has consistently posted impressive results in national exams ever since 2009. We have enjoyed and celebrated the advantage of producing top candidates not only in our sub-county but also nationwide.</p>
            <p className="mb-1">Beyond academics, we remain strong and we have consistently shone as Sub County champions in girls’ basketball, and we thrive in drama, music, athletics and other ball games because we know that discipline in books and on the field builds a winner’s life.</p>
            <p style={{fontStyle: "italic"}}>I invite you, parents and visitors to partner with us. Together, we will unlock potential and shape responsible, God-fearing learners for Kenya and beyond.</p>
            <div className="mt-2" style={{fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic'}}>— Maurice Kutswa, The Principal</div>
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
              <h4>2nd Best School</h4>
              <p>Awarded a trophy for emerging 2nd best school in by then Langata District in 2013 KCPE</p>
            </div>
          </div>
          <div className="sticker-card reveal" style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
            <div style={{fontSize: '2.2rem', flexShrink: '0'}}>🎖️</div>
            <div>
              <h4>Top Best Teachers </h4>
              <p>Our English and Kiswahili teachers were awarded the top best teachers in 2013 KCPE in Langata District.</p>
            </div>
          </div>
          <div className="sticker-card reveal" style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
            <div style={{fontSize: '2.2rem', flexShrink: '0'}}>⭐</div>
            <div>
              <h4>Top Candidates in KCPE</h4>
              <p>Produced the top candidates in KCPE in Kibra Sub-County in 2016, 2018, 2019 and in 2023</p>
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
