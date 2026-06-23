import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Gallery — Chrisco Educational Centre. Photos and videos of school life, facilities, sports, arts and events.",
};

export default function Page() {
  return (
    <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="/">Home</a> › <span>Gallery</span></div>
        <h1>Life at<br />Chrisco</h1>
        <p>A peek into the colourful, joyful world of our school community — in pictures.</p>
      </div>
      <div className="wave-bottom"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,68 480,0 720,24 C960,48 1200,12 1440,32 L1440,60 L0,60 Z" fill="#FFF8EC"/></svg></div>
    </section>

    <section className="section bg-white">
      <div className="container">

        <GalleryGrid />
      </div>
    </section>

    {/* VIDEO SECTION */}
    <section className="section" style={{background: 'var(--paper)'}}>
      <div className="container">
        <div className="text-center center-col mb-2 reveal">
          <span className="eyebrow">🎬 School Videos</span>
          <h2 className="section-heading">See Chrisco in <span className="squiggle text-coral">Action</span></h2>
          <p className="section-sub" style={{margin: '0 auto'}}>Watch our school videos and event recordings for an even better feel for life at Chrisco.</p>
        </div>
        <div className="grid-2" style={{gap: '1.6rem'}}>
          <div className="video-card reveal" style={{background: 'var(--sky-dark)'}}>
            <div className="video-play-btn">▶</div>
            <p className="vc-text">School Tour — Chrisco 2026</p>
            <p className="vc-time">3:42 min</p>
          </div>
          <div className="video-card reveal" style={{background: 'var(--coral-dark)'}}>
            <div className="video-play-btn">🎓</div>
            <p className="vc-text">Graduation Day Highlights 2026</p>
            <p className="vc-time">5:18 min</p>
          </div>
        </div>
        <p className="text-center mt-2" style={{fontSize: '0.85rem', opacity: '0.65'}}>📹 Videos will appear here once your school's media is uploaded. Contact us to share your school videos.</p>
      </div>
    </section>


    </>
  );
}
