import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Campus",
  description:
    "Our campus at Chrisco Educational Centre — science lab, computer lab, music room, sports grounds, art studio, library and more.",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>Our Campus</span></div>
        <h1>A Campus Built<br />for Discovery</h1>
        <p>Every space at Chrisco is designed to spark curiosity, fuel imagination, and support your child's growth.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    <section className="section bg-white">
      <div className="container text-center center-col reveal">
        <span className="eyebrow">🏫 Our Campus</span>
        <h2 className="section-heading">A Place Built for <span className="squiggle text-sky">Learning & Fun</span></h2>
        <p className="section-sub" style={{margin: '0 auto'}}>Great learning needs great spaces. We've invested in facilities that don't just support learning — they make children excited to dive in, from labs to creative studios to big green playgrounds.</p>
      </div>
    </section>

    {/* FACILITIES GRID */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="grid-2" style={{gap: '2rem'}}>

          <div className="facility-card reveal">
            <div className="facility-img" style={{background: 'var(--sky)'}}>🔬<span className="facility-tag">STEM Hub</span></div>
            <div className="facility-body">
              <h3 className="mb-1" style={{fontSize: '1.15rem'}}>Science Laboratory</h3>
              <p className="mb-1" style={{fontSize: '0.92rem', opacity: '0.8'}}>Our science lab brings biology, chemistry and physics to life. Children carry out real, hands-on experiments that turn big ideas into exciting discoveries.</p>
              <div className="facility-feature">Safe lab benches with proper safety gear</div>
              <div className="facility-feature">Biology, Chemistry and Physics experiment kits</div>
              <div className="facility-feature">Microscopes and fun science tools</div>
              <div className="facility-feature">Protective gear provided for every experiment</div>
              <div className="facility-feature">A dedicated science teacher to guide the fun</div>
            </div>
          </div>

          <div className="facility-card reveal">
            <div className="facility-img" style={{background: 'var(--plum)'}}>💻<span className="facility-tag">Digital Learning</span></div>
            <div className="facility-body">
              <h3 className="mb-1" style={{fontSize: '1.15rem'}}>Computer Laboratory</h3>
              <p className="mb-1" style={{fontSize: '0.92rem', opacity: '0.8'}}>Computer skills matter more than ever. Our lab gives every child hands-on time with technology, basic coding, and the confidence to use it well.</p>
              <div className="facility-feature">Modern desktops and laptops</div>
              <div className="facility-feature">Fast, reliable internet</div>
              <div className="facility-feature">Digital literacy and beginner coding</div>
              <div className="facility-feature">Friendly educational software and games</div>
              <div className="facility-feature">Supervised, structured computer lessons</div>
            </div>
          </div>

          <div className="facility-card reveal">
            <div className="facility-img" style={{background: 'var(--coral)'}}>🎵<span className="facility-tag">Creative Arts</span></div>
            <div className="facility-body">
              <h3 className="mb-1" style={{fontSize: '1.15rem'}}>Music Room</h3>
              <p className="mb-1" style={{fontSize: '0.92rem', opacity: '0.8'}}>Music brings people together. Our music room is a happy space to try instruments, find your voice, and enjoy the magic of performing.</p>
              <div className="facility-feature">A wide range of instruments to try</div>
              <div className="facility-feature">One-on-one and group music lessons</div>
              <div className="facility-feature">Choir practice and performances</div>
              <div className="facility-feature">A comfortable space built for great sound</div>
              <div className="facility-feature">Yearly music recitals everyone looks forward to</div>
            </div>
          </div>

          <div className="facility-card reveal">
            <div className="facility-img" style={{background: 'var(--grass)'}}>⚽<span className="facility-tag">Active Play</span></div>
            <div className="facility-body">
              <h3 className="mb-1" style={{fontSize: '1.15rem'}}>Sports Grounds</h3>
              <p className="mb-1" style={{fontSize: '0.92rem', opacity: '0.8'}}>Running, jumping and playing matter just as much as books. Our big, well-kept grounds are where teamwork, healthy habits and pure fun come alive.</p>
              <div className="facility-feature">Football pitch for matches and practice</div>
              <div className="facility-feature">Running track for athletics days</div>
              <div className="facility-feature">Basketball and volleyball courts</div>
              <div className="facility-feature">Structured PE lessons with coaches</div>
              <div className="facility-feature">Exciting inter-school sports days</div>
            </div>
          </div>

          <div className="facility-card reveal">
            <div className="facility-img" style={{background: 'var(--sun)'}}>🎨<span className="facility-tag">Creativity</span></div>
            <div className="facility-body">
              <h3 className="mb-1" style={{fontSize: '1.15rem'}}>Arts & Creative Studio</h3>
              <p className="mb-1" style={{fontSize: '0.92rem', opacity: '0.8'}}>Creativity matters in CBC and in life. Our art studio is a bright, busy space for painting, crafts and creative expression of every kind.</p>
              <div className="facility-feature">Painting, drawing and sculpture</div>
              <div className="facility-feature">Craft materials and fabric art</div>
              <div className="facility-feature">A yearly student art show</div>
              <div className="facility-feature">Tied closely to the CBC creative arts curriculum</div>
              <div className="facility-feature">Chances to enter national art competitions</div>
            </div>
          </div>

          <div className="facility-card reveal">
            <div className="facility-img" style={{background: 'var(--sky-dark)'}}>📚<span className="facility-tag">Reading Corner</span></div>
            <div className="facility-body">
              <h3 className="mb-1" style={{fontSize: '1.15rem'}}>Library & Resource Centre</h3>
              <p className="mb-1" style={{fontSize: '0.92rem', opacity: '0.8'}}>A love of reading is one of the best gifts school can give. Our library is full of books, quiet corners, and reasons to fall in love with stories.</p>
              <div className="facility-feature">Tons of storybooks and curriculum textbooks</div>
              <div className="facility-feature">Cosy, quiet corners for focused reading</div>
              <div className="facility-feature">Weekly library lessons and reading time</div>
              <div className="facility-feature">Digital resources for extra research</div>
              <div className="facility-feature">Fun reading challenges and competitions</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* CAMPUS FEATURES */}
    <section className="section bg-white">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🛡️ Campus Features</span>
          <h2 className="section-heading">A Safe, Caring <span className="squiggle text-grass">Campus</span></h2>
        </div>
        <div className="grid-4">
          <div className="value-blob reveal">
            <div className="blob-icon badge-sky">🔒</div>
            <h4>Secure Campus</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>Controlled gates, fencing, and friendly security keep every child safe.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-coral">🍽️</div>
            <h4>Dining Hall</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>A clean dining hall serving tasty, healthy meals every day.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-grass">🏥</div>
            <h4>First Aid Room</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>A trained team and a ready first aid room, just in case.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-sun">🚌</div>
            <h4>Easy to Reach</h4>
            <p style={{fontSize: '0.85rem', opacity: '0.8'}}>Conveniently located in Woodley with easy matatu access from across Nairobi.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-banner" style={{background: 'var(--plum)'}}>
      <div className="container">
        <h2>See Our Campus <span style={{color: 'var(--sun)'}}>In Person</span></h2>
        <p style={{opacity: '0.85'}}>Pictures can only tell part of the story. Book a school tour and walk around with your family.</p>
        <div className="btn-row">
          <a href="/contact" className="btn btn-sun">Book a School Tour</a>
          <a href="/gallery" className="btn btn-outline-light">View Our Gallery</a>
        </div>
      </div>
    </section>

    </>
  );
}
