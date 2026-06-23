import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Stuff",
  description:
    "Co-curricular activities at Chrisco Educational Centre — music, sports, scouts, arts and student clubs for every child.",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>Fun Stuff</span></div>
        <h1>Beyond the<br />Classroom</h1>
        <p>Growing the whole child — every talent, every passion, every strength — through fun co-curricular programmes.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    {/* PHILOSOPHY */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2" style={{alignItems: 'center', gap: '3rem'}}>
          <div className="reveal">
            <span className="eyebrow">💭 Our Thinking</span>
            <h2 className="section-heading">Learning Beyond<br />the <span className="squiggle text-coral">Textbook</span></h2>
            <p className="mb-1">We truly believe the most important things a child develops — teamwork, resilience, creativity, leadership and confidence — are often built outside the classroom.</p>
            <p className="mb-1">Our co-curricular programme is big, welcoming, and built so every child finds something they love. Whether on the football pitch, in the choir, at scout camp, or behind a paintbrush — we want every child to discover their own special gift.</p>
            <p>These aren't "extras." They're a real part of a Chrisco education, weaving character and joy into every part of school life.</p>
          </div>
          <div className="reveal">
            <div className="grid-2" style={{gap: '1rem'}}>
              <div className="sticker-card text-center" style={{background: 'var(--sky-dark)'}}>
                <div style={{fontSize: '2.2rem', marginBottom: '0.5rem'}}>🎯</div>
                <strong style={{color: 'var(--paper-white)', display: 'block', marginBottom: '0.4rem'}}>Leadership</strong>
                <p style={{fontSize: '0.82rem', background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.6rem'}}>Chances to lead, inspire and take responsibility</p>
              </div>
              <div className="sticker-card text-center" style={{background: 'var(--coral-dark)'}}>
                <div style={{fontSize: '2.2rem', marginBottom: '0.5rem'}}>🤝</div>
                <strong style={{color: 'var(--paper-white)', display: 'block', marginBottom: '0.4rem'}}>Teamwork</strong>
                <p style={{fontSize: '0.82rem', background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.6rem'}}>Learning to support and achieve together</p>
              </div>
              <div className="sticker-card text-center" style={{background: 'var(--sun)'}}>
                <div style={{fontSize: '2.2rem', marginBottom: '0.5rem'}}>💡</div>
                <strong>Creativity</strong>
                <p style={{fontSize: '0.82rem', opacity: '0.8', marginTop: '0.3rem'}}>Freedom to explore, create and express</p>
              </div>
              <div className="sticker-card text-center" style={{background: 'var(--grass-dark)'}}>
                <div style={{fontSize: '2.2rem', marginBottom: '0.5rem'}}>💪</div>
                <strong style={{color: 'var(--paper-white)', display: 'block', marginBottom: '0.4rem'}}>Resilience</strong>
                <p style={{fontSize: '0.82rem', background: 'rgba(255,255,255,0.94)', color: 'var(--plum)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.6rem'}}>Building grit, determination and grow-your-own confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ACTIVITIES */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🎪 Our Programmes</span>
          <h2 className="section-heading">Something for <span className="squiggle text-sky">Every Child</span></h2>
        </div>

        <div className="program-card reveal">
          <div className="program-grid">
            <div className="program-side" style={{background: 'var(--coral-dark)'}}>
              <div style={{fontSize: '3.2rem', marginBottom: '0.6rem'}}>🎵</div>
              <h3>Music Programme</h3>
              <span className="program-level">ALL LEVELS</span>
            </div>
            <div className="program-body">
              <p className="mb-1">Music is a big part of life at Chrisco. Our music team nurtures singing, instruments, and a love for music as a way to express, connect and celebrate.</p>
              <div className="program-list">
                <div><span className="text-coral">♪</span> School Choir (primary & junior)</div>
                <div><span className="text-coral">♪</span> One-on-one instrument lessons</div>
                <div><span className="text-coral">♪</span> Piano, guitar, keyboard & more</div>
                <div><span className="text-coral">♪</span> Annual School Concert</div>
                <div><span className="text-coral">♪</span> Music Festival participation</div>
                <div><span className="text-coral">♪</span> Praise & Worship team</div>
              </div>
              <div className="program-highlight">🏅 Our choir has proudly represented the school at several Nairobi Music Festival competitions.</div>
            </div>
          </div>
        </div>

        <div className="program-card reveal">
          <div className="program-grid">
            <div className="program-side" style={{background: 'var(--grass-dark)'}}>
              <div style={{fontSize: '3.2rem', marginBottom: '0.6rem'}}>⚽</div>
              <h3>Sports Programme</h3>
              <span className="program-level">GRADES 3–9</span>
            </div>
            <div className="program-body">
              <p className="mb-1">Sport at Chrisco is about more than winning — it builds character, discipline and the ability to stay calm under pressure. Our sports programme helps children grow athletically and play with pride.</p>
              <div className="program-list">
                <div><span className="text-grass">⚡</span> Boys' & Girls' Football Teams</div>
                <div><span className="text-grass">⚡</span> Athletics (track & field)</div>
                <div><span className="text-grass">⚡</span> Basketball & Volleyball</div>
                <div><span className="text-grass">⚡</span> Netball for girls</div>
                <div><span className="text-grass">⚡</span> Inter-school competitions</div>
                <div><span className="text-grass">⚡</span> Nairobi Regional Championships</div>
              </div>
              <div className="program-highlight">🏅 Our football team qualified for the Nairobi Zonal Championship finals in 2024/2025.</div>
            </div>
          </div>
        </div>

        <div className="program-card reveal">
          <div className="program-grid">
            <div className="program-side" style={{background: 'var(--sky-dark)'}}>
              <div style={{fontSize: '3.2rem', marginBottom: '0.6rem'}}>⚜️</div>
              <h3>Scouts & Life Skills</h3>
              <span className="program-level">GRADES 4–9</span>
            </div>
            <div className="program-body">
              <p className="mb-1">Scouting at Chrisco builds leadership, service, and real-life skills that no textbook can teach. Through fun activities, community service and outdoor adventures, our scouts grow into capable, caring young leaders.</p>
              <div className="program-list">
                <div><span className="text-sky">⚜</span> Registered Kenya Scouts troop</div>
                <div><span className="text-sky">⚜</span> Leadership building</div>
                <div><span className="text-sky">⚜</span> Community service projects</div>
                <div><span className="text-sky">⚜</span> Outdoor camping & navigation</div>
                <div><span className="text-sky">⚜</span> First aid & survival skills</div>
                <div><span className="text-sky">⚜</span> National Jamboree participation</div>
              </div>
              <div className="program-highlight">🏅 Our scouts take part in Kenya Scout Association district activities and leadership programmes.</div>
            </div>
          </div>
        </div>

        <div className="program-card reveal">
          <div className="program-grid">
            <div className="program-side" style={{background: 'var(--sun)'}}>
              <div style={{fontSize: '3.2rem', marginBottom: '0.6rem'}}>🎨</div>
              <h3 style={{color: 'var(--plum)'}}>Arts & Crafts</h3>
              <span className="program-level" style={{background: 'rgba(43,34,80,0.12)', color: 'var(--plum)'}}>ALL LEVELS</span>
            </div>
            <div className="program-body">
              <p className="mb-1">Creativity is one of the best gifts a child can develop. Our arts and crafts programme gives children rich, hands-on chances to express themselves and build their fine motor skills along the way.</p>
              <div className="program-list">
                <div><span className="text-sun">★</span> Drawing & Painting</div>
                <div><span className="text-sun">★</span> Sculpture & Modelling</div>
                <div><span className="text-sun">★</span> Textile art & weaving</div>
                <div><span className="text-sun">★</span> Mixed media projects</div>
                <div><span className="text-sun">★</span> Annual Art Exhibition</div>
                <div><span className="text-sun">★</span> National competition entries</div>
              </div>
              <div className="program-highlight">🏅 Children showcase their work every year at our School Arts Exhibition, loved by parents and the wider community.</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* CLUBS */}
    <section className="section bg-white">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🌟 Student Clubs</span>
          <h2 className="section-heading">Our Student <span className="squiggle text-grass">Clubs</span></h2>
        </div>
        <div className="grid-4">
          <div className="value-blob reveal">
            <div className="blob-icon badge-sky">📖</div>
            <h4>Reading Club</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>Falling in love with books through reading time, stories and chats.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-grass">🔭</div>
            <h4>Science Club</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>Hands-on experiments and science fairs beyond the classroom.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-coral">🎭</div>
            <h4>Drama Club</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>Building confidence and big imaginations through performance.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-sun">🌍</div>
            <h4>Debate Club</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>Growing sharp thinking and the courage to speak up.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-banner" style={{background: 'var(--plum)'}}>
      <div className="container">
        <h2>Help Your Child <span style={{color: 'var(--sun)'}}>Find Their Spark</span></h2>
        <p style={{opacity: '0.85'}}>Join Chrisco and watch your child discover talents you never knew they had.</p>
        <a href="/admissions" className="btn btn-sun">Apply for Admission →</a>
      </div>
    </section>

    </>
  );
}
