import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Header />

      <main className="about-main">
        {/* HERO */}
        <section className="hero hero--andes">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__kicker">ABOUT</p>
              <h1 className="hero__title">FLÂNEUR</h1>
              <p className="hero__lede">
                Colombian electronic producer creating atmospheric soundscapes
                from the Central Andes.
              </p>

              <div className="hero__cta">
                <a
                  className="btn btn--primary"
                  href="https://soundcloud.com/flaneur23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen on SoundCloud
                </a>
                <a className="btn btn--ghost" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <aside className="hero__sidebar">
              <ul className="hero__meta" aria-label="quick facts">
                <li className="meta-item">
                  <span className="meta-label">Origin</span>
                  <span className="meta-value">Quimbaya, Quindío (COL)</span>
                </li>
                <li className="meta-item">
                  <span className="meta-label">Collective</span>
                  <span className="meta-value">LEVEL MUSIC</span>
                </li>
                <li className="meta-item">
                  <span className="meta-label">Approach</span>
                  <span className="meta-value">Modular Synthesis</span>
                </li>
                <li className="meta-item">
                  <span className="meta-label">Influences</span>
                  <span className="meta-value">Ambient, IDM, Techno</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* BIOGRAPHY */}
        <section className="section container">
          <div className="section__header">
            <h2 className="section__title">Biography</h2>
            <p className="section__subtitle">
              Exploring sound through landscape and introspection
            </p>
          </div>

          <div className="grid two">
            <div className="bio-content">
              <p className="bio-lead">
                Flâneur is a Colombian electronic music producer and founder of
                the collective LEVEL MUSIC. His work blends
                field recordings from the Andes with modular synthesis, creating
                immersive soundscapes.
              </p>

              <div className="bio-details">
                <p>
                  Inspired by the Central Andes and Los Nevados National Park,
                  Flâneur treats darkness and the unknown as creative material—a
                  way to explore sound and existence more deeply.
                </p>

                <p>
                  Using subtractive and modular synthesis, he composes
                  multisensory experiences that invite introspection and
                  expansion. As his name suggests (from the literary concept of
                  the flâneur—the observer-wanderer), he is an explorer of
                  landscapes and sound.
                </p>
              </div>
            </div>

            <aside className="card card--quote" aria-label="artistic statement">
              <div className="quote-icon">"</div>
              <p className="quote">
                Darkness is not a limit: it is a way of listening.
              </p>
              <p className="quote__sub">
                Deep electronica · Landscape · Introspection · Texture
              </p>
            </aside>
          </div>
        </section>

        {/* SONIC LANGUAGE */}
        <section className="section section--dark">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Sonic Language</h2>
              <p className="section__subtitle">
                Techniques, influences, and creative approach
              </p>
            </div>

            <div className="grid three">
              <article className="card card--feature">
                <div className="card__inner">
                  <div className="card__icon">🎛️</div>
                  <h3 className="card__title">Synthesis</h3>
                  <p>
                    Subtractive and modular synthesis form the
                    core of his sound, creating dense textures and layered
                    atmospheres in both studio and live performances.
                  </p>
                </div>
              </article>

              <article className="card card--feature">
                <div className="card__inner">
                  <div className="card__icon">🏔️</div>
                  <h3 className="card__title">Inspiration</h3>
                  <p>
                    The Andes mountains, literature, and nature
                    serve as emotional maps, translating landscape into sound
                    through field recordings and harmonic structures.
                  </p>
                </div>
              </article>

              <article className="card card--feature">
                <div className="card__inner">
                  <div className="card__icon">🎯</div>
                  <h3 className="card__title">Philosophy</h3>
                  <p>
                    Prioritizes essence over genre, creating
                    focused journeys of introspection where each set tells a
                    distinct sonic narrative.
                  </p>
                </div>
              </article>
            </div>

            <div className="influences">
              <h3 className="influences__title">Key Influences</h3>
              <div className="pillbar" aria-label="influences">
                <span className="pill">Pink Floyd</span>
                <span className="pill">Kraftwerk</span>
                <span className="pill">Tangerine Dream</span>
                <span className="pill">Luigi Tozzi</span>
                <span className="pill">The Cure</span>
                <span className="pill">Radiohead</span>
                <span className="pill">Beethoven</span>
                <span className="pill">Interpol</span>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="section container">
          <div className="section__header">
            <h2 className="section__title">Featured Works</h2>
            <p className="section__subtitle">
              Selected releases and exploratory sessions
            </p>
          </div>

          <div className="releases">
            <article className="release">
              <div className="release__number">01</div>
              <div className="release__content">
                <div className="release__header">
                  <span className="release__tag">Album · 2025</span>
                  <h3 className="release__title">Volátil</h3>
                </div>
                <p className="release__desc">
                  A conceptual exploration of impermanence through deep
                  electronics, modular synthesis, and atmospheric textures
                  inspired by Andean topography.
                </p>
                <div className="release__links">
                  <a
                    className="link"
                    href="https://soundcloud.com/flaneur23/vola-til"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen →
                  </a>
                </div>
              </div>
            </article>

            <article className="release">
              <div className="release__number">02</div>
              <div className="release__content">
                <div className="release__header">
                  <span className="release__tag">Single</span>
                  <h3 className="release__title">Kaputt</h3>
                </div>
                <p className="release__desc">
                  Hybrid electronic piece combining modular synthesis with
                  ambient textures, creating a sonic representation of
                  fragmented memory and landscape.
                </p>
                <div className="release__links">
                  <a
                    className="link"
                    href="https://soundcloud.com/flaneur23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen →
                  </a>
                </div>
              </div>
            </article>

            <article className="release">
              <div className="release__number">03</div>
              <div className="release__content">
                <div className="release__header">
                  <span className="release__tag">Series</span>
                  <h3 className="release__title">Sound Signature Sessions</h3>
                </div>
                <p className="release__desc">
                  Ongoing experimental sessions focused on sound design and
                  synthesis techniques—an open laboratory for new approaches to
                  electronic composition.
                </p>
                <div className="release__links">
                  <a
                    className="link"
                    href="https://soundcloud.com/flaneur23/sound-design-signature-mix-001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
