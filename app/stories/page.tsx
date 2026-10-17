
const GOOGLE_PLAY_URL = "https://play.google.com/store";
const DIRECT_DOWNLOAD_URL = "#download";

const stories = [
  {
    names: "Alice & Jean",
    location: "Kigali, Rwanda",
    image: "/images/couple-1.jpg",
    quote: "We met through UMUHUZA and built a meaningful relationship together.",
  },
  {
    names: "Aline & Patrick",
    location: "Huye, Rwanda",
    image: "/images/couple-2.jpg",
    quote: "A simple connection became something truly special.",
  },
  {
    names: "Diane & Eric",
    location: "Musanze, Rwanda",
    image: "/images/couple-3.jpg",
    quote: "UMUHUZA helped us take the first step toward our future.",
  },
];

function GooglePlayBadge() {
  return (
    <a className="play-badge" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
      <span className="play-triangle">▶</span>
      <span className="play-copy">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="umuhuza-home">
      <header className="topbar">
        <a className="brand" href="/" aria-label="UMUHUZA home">
          <span className="brand-mark">♥</span>
          <span className="brand-name">
            UMUHUZA
            <small>Real Love. Real People.</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a className="active-link" href="/">Home</a>
          <a href="/stories">Success Stories</a>
          <a href="/couples">Couples</a>
        </nav>

        <a className="header-cta" href="#download">♡ Get App</a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            ♥ Rwandan Dating App
          </span>

          <h1>
            Find Your
            <br />
            <span>Perfect Partner</span>
            <br />
            with UMUHUZA
          </h1>

          <p>
            Connect with real people from Rwanda and Burundi
            who are looking for meaningful relationships,
            friendship and marriage.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#download">
              ↓ &nbsp; Get the App <span>›</span>
            </a>
            <GooglePlayBadge />
          </div>

          <a className="secondary-button" href={DIRECT_DOWNLOAD_URL}>
            ↗ &nbsp; Or Download Directly
          </a>

          <div className="hero-note">
            <span>♡ Safe Connections</span>
            <span>♧ Real People</span>
            <span>✓ Meaningful Relationships</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-heart hero-heart-one" />
          <div className="hero-heart hero-heart-two" />
          <img
            className="hero-couple"
            src="/images/hero-couple.jpg"
            alt="A couple sharing a romantic moment"
          />
          <div className="hero-photo-caption">
            <span>♥</span>
            <div>
              <strong>Real Love</strong>
              <small>Starts Here</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-section" id="stories">
        <div className="section-heading">
          <div>
            <span className="section-kicker">LOVE IN REAL LIFE</span>
            <h2><span>♥</span> Success Stories</h2>
            <p>Real people. Real connections. Real love.</p>
          </div>
          <a className="text-link" href="/stories">View More Stories ↗</a>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.names}>
              <div className="story-image">
                <img src={story.image} alt={`Couple portrait: ${story.names}`} />
              </div>
              <div className="story-body">
                <span className="verified">♥ UMUHUZA STORY</span>
                <h3>{story.names}</h3>
                <span className="story-place">📍 {story.location}</span>
                <p>“{story.quote}”</p>
              </div>
            </article>
          ))}
        </div>
        <p className="story-disclaimer">
          Publish real testimonials and photos only with the couples' permission.
        </p>
      </section>

      <section className="download-section" id="download">
        <div className="download-orb">♥</div>
        <span className="section-kicker">YOUR STORY STARTS HERE</span>
        <h2>Ready to Find Your Person?</h2>
        <p>Meet people, build connections, and discover what could be next.</p>
        <div className="download-actions">
          <a className="primary-button" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
            Get UMUHUZA on Google Play ↗
          </a>
          <a className="secondary-button light-button" href={DIRECT_DOWNLOAD_URL}>
            Download Directly ↓
          </a>
        </div>
        <small className="download-footnote">
          Real people. Meaningful connections. Your next chapter.
        </small>
      </section>

      <footer className="footer">
        <a className="brand" href="/">
          <span className="brand-mark">♥</span>
          <span className="brand-name">
            UMUHUZA
            <small>Real Love. Real People.</small>
          </span>
        </a>
        <div>
          <a href="/stories">Success Stories</a>
          <a href="/couples">Couples</a>
          <a href="#download">Get the App</a>
        </div>
        <small>© {new Date().getFullYear()} UMUHUZA. All rights reserved.</small>
      </footer>
    </main>
  );
}
