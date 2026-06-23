import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning",
  description:
    "Academics at Chrisco Educational Centre — a fun, CBC-aligned curriculum from Play Group through Junior Secondary (Grades 7–9).",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>Learning</span></div>
        <h1>Learning That Feels<br />Like an Adventure</h1>
        <p>A fun, CBC-aligned curriculum that unlocks every child's potential — from Play Group through Junior Secondary.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    {/* CBC OVERVIEW */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2" style={{alignItems: 'center', gap: '3rem'}}>
          <div className="reveal">
            <span className="eyebrow">📘 Our Curriculum</span>
            <h2 className="section-heading">Competency-Based<br />Curriculum <span className="squiggle text-coral">(CBC)</span></h2>
            <p className="mb-1">Kenya's CBC reimagines how children learn — moving away from memorising facts towards real understanding, hands-on skills, and knowledge children can actually use.</p>
            <p className="mb-1">At Chrisco, we've fully embraced CBC from day one. Our teachers are well-trained, our resources are CBC-aligned, and the way we check progress reflects the true spirit of the curriculum.</p>
            <p>The result? Children who don't just know things — they can use what they know, creatively and confidently.</p>
          </div>
          <div className="reveal">
            <div className="grid-2" style={{gap: '1.1rem'}}>
              <div className="sticker-card">
                <div className="icon-badge badge-sky">🧠</div>
                <h4 style={{fontSize: '1rem'}}>Critical Thinking</h4>
                <p style={{fontSize: '0.85rem'}}>Children learn to question and solve, not just memorise.</p>
              </div>
              <div className="sticker-card">
                <div className="icon-badge badge-coral">🤲</div>
                <h4 style={{fontSize: '1rem'}}>Practical Skills</h4>
                <p style={{fontSize: '0.85rem'}}>Hands-on, project-based learning rooted in real life.</p>
              </div>
              <div className="sticker-card">
                <div className="icon-badge badge-grass">👥</div>
                <h4 style={{fontSize: '1rem'}}>Teamwork</h4>
                <p style={{fontSize: '0.85rem'}}>Group work builds friendship, communication and confidence.</p>
              </div>
              <div className="sticker-card">
                <div className="icon-badge badge-sun">🌱</div>
                <h4 style={{fontSize: '1rem'}}>Growing Together</h4>
                <p style={{fontSize: '0.85rem'}}>Mind, heart and body, all growing in healthy balance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ACADEMIC PATHWAY */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🗺️ The Journey</span>
          <h2 className="section-heading">Your Child's Academic <span className="squiggle text-sky">Pathway</span></h2>
          <p className="section-sub" style={{margin: '0 auto'}}>From their very first day, each child follows a path designed to grow with them, one happy stage at a time.</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.8rem'}}>

          <div className="level-card reveal" id="playgroup">
            <div className="level-card-header" style={{background: 'var(--sky-dark)'}}>
              <div className="level-emoji">🧸</div>
              <div>
                <h3>Play Group</h3>
                <p>Ages 2.5 – 4 years · The very start of the journey</p>
              </div>
            </div>
            <div className="level-card-body">
              <p className="mb-1">Play Group is where curiosity wakes up! In a warm, safe and stimulating space, our youngest learners explore the world through play, creativity and gentle guidance. We focus on social skills, talking and listening, and building the confidence to learn.</p>
              <div className="mb-1">
                <strong style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--coral-dark)'}}>Learning Areas</strong><br /><br />
                <span className="subject-pill">Language Play</span>
                <span className="subject-pill">Number Fun</span>
                <span className="subject-pill">Arts & Crafts</span>
                <span className="subject-pill">Music & Movement</span>
                <span className="subject-pill">Sensory Play</span>
                <span className="subject-pill">Making Friends</span>
              </div>
              <div className="focus-box">✨ <strong>Focus:</strong> Building confidence, friendships, and the very first steps in reading and counting through joyful play.</div>
            </div>
          </div>

          <div className="level-card reveal" id="preprimary">
            <div className="level-card-header" style={{background: 'var(--sun)'}}>
              <div className="level-emoji">🌟</div>
              <div>
                <h3 style={{color: 'var(--plum)'}}>Pre-Primary (PP1 – PP2)</h3>
                <p>Ages 4 – 6 years · CBC Pre-Primary Level</p>
              </div>
            </div>
            <div className="level-card-body">
              <p className="mb-1">Pre-Primary follows the CBC framework, bringing structure through fun, activity-based lessons. Children build early reading and counting skills, explore their environment, and grow more confident and independent every day.</p>
              <div className="mb-1">
                <strong style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--coral-dark)'}}>Learning Areas</strong><br /><br />
                <span className="subject-pill">Language Activities</span>
                <span className="subject-pill">Maths Activities</span>
                <span className="subject-pill">Exploring Our World</span>
                <span className="subject-pill">Creative & Movement</span>
                <span className="subject-pill">Religious Education</span>
                <span className="subject-pill">Social Skills</span>
              </div>
              <div className="focus-box">✨ <strong>Focus:</strong> Reading, counting, creativity, and learning to share and play well with others.</div>
            </div>
          </div>

          <div className="level-card reveal" id="lower">
            <div className="level-card-header" style={{background: 'var(--grass-dark)'}}>
              <div className="level-emoji">📚</div>
              <div>
                <h3>Lower Primary (Grades 1 – 3)</h3>
                <p>Ages 6 – 9 years · CBC Lower Primary</p>
              </div>
            </div>
            <div className="level-card-body">
              <p className="mb-1">In Lower Primary, children step into more structured learning. The CBC curriculum builds strong reading, writing and maths skills, while keeping creativity, curiosity and a genuine love of learning alive.</p>
              <div className="mb-1">
                <strong style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--coral-dark)'}}>Key Subjects</strong><br /><br />
                <span className="subject-pill">Literacy (English & Kiswahili)</span>
                <span className="subject-pill">Mathematics</span>
                <span className="subject-pill">Environmental Activities</span>
                <span className="subject-pill">Religious Education</span>
                <span className="subject-pill">Creative Arts</span>
                <span className="subject-pill">Movement</span>
              </div>
              <div className="focus-box">✨ <strong>Focus:</strong> Strong reading and number skills, caring for our environment, and good character.</div>
            </div>
          </div>

          <div className="level-card reveal" id="upper">
            <div className="level-card-header" style={{background: 'var(--coral-dark)'}}>
              <div className="level-emoji">🔬</div>
              <div>
                <h3>Upper Primary (Grades 4 – 6)</h3>
                <p>Ages 9 – 12 years · CBC Upper Primary</p>
              </div>
            </div>
            <div className="level-card-body">
              <p className="mb-1">Upper Primary is where curiosity goes deeper. Children take on a richer, more exciting curriculum that builds sharp thinking and problem-solving — getting them ready and confident for Junior Secondary.</p>
              <div className="mb-1">
                <strong style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--coral-dark)'}}>Key Subjects</strong><br /><br />
                <span className="subject-pill">English</span>
                <span className="subject-pill">Kiswahili</span>
                <span className="subject-pill">Mathematics</span>
                <span className="subject-pill">Integrated Science</span>
                <span className="subject-pill">Social Studies</span>
                <span className="subject-pill">Creative Arts & Sports</span>
                <span className="subject-pill">Religious Education</span>
                <span className="subject-pill">Agriculture</span>
              </div>
              <div className="focus-box">✨ <strong>Focus:</strong> Deeper subject knowledge, sharper thinking, and getting ready for Junior Secondary.</div>
            </div>
          </div>

          <div className="level-card reveal" id="junior">
            <div className="level-card-header" style={{background: 'var(--plum)'}}>
              <div className="level-emoji">🏆</div>
              <div>
                <h3>Junior Secondary (Grades 7 – 9)</h3>
                <p>Ages 12 – 15 years · CBC Junior Secondary Level</p>
              </div>
            </div>
            <div className="level-card-body">
              <p className="mb-1">Junior Secondary is the exciting next chapter of Kenya's CBC journey. With a broader, more specialised curriculum, students start exploring their own interests, building advanced skills, and preparing for Senior School.</p>
              <div className="mb-1">
                <strong style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--coral-dark)'}}>Key Subjects</strong><br /><br />
                <span className="subject-pill">English</span>
                <span className="subject-pill">Kiswahili</span>
                <span className="subject-pill">Mathematics</span>
                <span className="subject-pill">Integrated Science</span>
                <span className="subject-pill">Health Education</span>
                <span className="subject-pill">Pre-Technical Studies</span>
                <span className="subject-pill">Social Studies</span>
                <span className="subject-pill">Business Studies</span>
                <span className="subject-pill">Agriculture</span>
                <span className="subject-pill">Creative Arts</span>
                <span className="subject-pill">Life Skills</span>
                <span className="subject-pill">Religious Education</span>
              </div>
              <div className="focus-box">✨ <strong>Focus:</strong> Advanced skills, exploring future careers, and getting ready for Senior Secondary.</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* TEACHER QUALITY */}
    <section className="section bg-white">
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">👩‍🏫 Our Educators</span>
          <h2 className="section-heading">Teachers Who <span className="squiggle text-grass">Inspire</span></h2>
        </div>
        <div className="grid-3">
          <div className="value-blob reveal">
            <div className="blob-icon badge-sky">🎓</div>
            <h4>Qualified & Certified</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Every teacher holds TSC registration and the right qualifications for their level and subject.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-sun">📖</div>
            <h4>CBC Trained</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Every teacher has full CBC training plus ongoing support to keep getting better.</p>
          </div>
          <div className="value-blob reveal">
            <div className="blob-icon badge-coral">💛</div>
            <h4>Child-Centred</h4>
            <p style={{fontSize: '0.88rem', opacity: '0.8'}}>Our teachers genuinely know each child and adjust their teaching to fit how that child learns best.</p>
          </div>
        </div>
      </div>
    </section>

    {/* STATS STRIP */}
    <section className="section-tight" style={{background: 'var(--sun)'}}>
      <div className="container">
        <div className="grid-4">
          <div className="text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--plum)'}}><span data-count="95" data-suffix="%">0%</span></strong>
            <p style={{fontSize: '0.85rem', color: 'var(--plum)', opacity: '0.85'}}>CBC Assessment Pass Rate</p>
          </div>
          <div className="text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--plum)'}}><span data-count="50" data-suffix="+">0+</span></strong>
            <p style={{fontSize: '0.85rem', color: 'var(--plum)', opacity: '0.85'}}>Qualified Teachers</p>
          </div>
          <div className="text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--plum)'}}><span data-count="5">0</span></strong>
            <p style={{fontSize: '0.85rem', color: 'var(--plum)', opacity: '0.85'}}>Academic Levels</p>
          </div>
          <div className="text-center reveal">
            <strong style={{fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--plum)'}}><span data-count="100" data-suffix="%">0%</span></strong>
            <p style={{fontSize: '0.85rem', color: 'var(--plum)', opacity: '0.85'}}>CBC Curriculum Aligned</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tight bg-white">
      <div className="container text-center">
        <h2 className="section-heading">Ready to Begin Your <span className="squiggle text-coral">Child's Journey?</span></h2>
        <p className="section-sub mb-2" style={{margin: '0 auto 1.8rem'}}>Enquire about admission today and find out how we can support your child's unique learning style.</p>
        <a href="/admissions" className="btn btn-sun">Start the Admissions Process →</a>
      </div>
    </section>

    </>
  );
}
