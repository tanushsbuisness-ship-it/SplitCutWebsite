import './App.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="logo-icon">✂</span>
          <span className="logo-text">SplitCut</span>
        </div>
        <a
          href="https://apps.apple.com"
          className="nav-cta"
          target="_blank"
          rel="noreferrer"
        >
          Download Free
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-grid" />
      <div className="container">
        <div className="hero-badge">Now available on iPhone</div>
        <h1 className="hero-title">
          Cut smarter.<br />
          <span className="gradient-text">Waste less.</span>
        </h1>
        <p className="hero-sub">
          Plan the most efficient way to cut sheets and boards into the exact
          pieces you need — then print shop-ready diagrams, scaled or full-size.
        </p>
        <div className="hero-actions">
          <a
            href="https://apps.apple.com"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
          <a href="#features" className="btn-ghost">See features ↓</a>
        </div>
        <div className="hero-phones">
          <PhoneMockup screen="login" />
          <PhoneMockup screen="projects" elevated />
          <PhoneMockup screen="addmaterial" />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ screen, elevated }) {
  const screens = {
    login: <LoginScreen />,
    projects: <ProjectsScreen />,
    addmaterial: <AddMaterialScreen />,
  };
  return (
    <div className={`phone-wrap ${elevated ? 'elevated' : ''}`}>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">{screens[screen]}</div>
      </div>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="mock-login">
      <div className="mock-login-bg" />
      <div className="mock-login-content">
        <div className="mock-app-title">SplitCut</div>
        <div className="mock-app-sub">
          Optimize sheet cuts, reuse matching scrap, and keep your shop inventory in one place.
        </div>
        <div className="mock-btn-apple">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Continue with Apple
        </div>
        <div className="mock-btn-google">
          <span className="mock-g">G</span> Sign in with Google
        </div>
        <div className="mock-btn-skip">Use without data storage</div>
      </div>
    </div>
  );
}

function ProjectsScreen() {
  return (
    <div className="mock-projects">
      <div className="mock-nav-bar">
        <div className="mock-nav-pill">Sign Out</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div className="mock-nav-pill">♛</div>
          <div className="mock-nav-pill">+</div>
        </div>
      </div>
      <div className="mock-title">Projects</div>
      <div className="mock-card">
        <div>
          <div className="mock-card-name">Shelf</div>
          <div className="mock-card-sub">0 material(s) · 0 piece(s)</div>
        </div>
        <span className="mock-chevron">›</span>
      </div>
      <div className="mock-tabs">
        <div className="mock-tab active">
          <div className="mock-tab-icon">📁</div>
          <div>Projects</div>
        </div>
        <div className="mock-tab">
          <div className="mock-tab-icon">📥</div>
          <div>Scrap Bin</div>
        </div>
      </div>
    </div>
  );
}

function AddMaterialScreen() {
  return (
    <div className="mock-addmat">
      <div className="mock-topbar">
        <div className="mock-topbar-pill">Cancel</div>
        <div className="mock-topbar-title">Add Material</div>
        <div className="mock-topbar-pill">Save</div>
      </div>
      <div className="mock-section-label">Quick Fill</div>
      <div className="mock-quick-fill">
        <div className="mock-quick-row">
          <span className="mock-quick-icon">⊹</span>
          <span className="mock-link-text">Measure with AR Camera</span>
        </div>
        <div className="mock-divider" />
        <div className="mock-quick-row">
          <span className="mock-quick-icon">📥</span>
          <span className="mock-link-text">Pick from Scrap Bin</span>
        </div>
      </div>
      <div className="mock-section-label">Material Info</div>
      <div className="mock-fields">
        <div className="mock-field-placeholder">Name (e.g. 3/4&quot; Birch Ply)</div>
        <div className="mock-divider" />
        <div className="mock-field-row">
          <span>Type</span><span className="mock-field-val">Sheet ⌃</span>
        </div>
        <div className="mock-divider" />
        <div className="mock-field-row">
          <span>Common Size</span><span className="mock-field-val">Custom ⌃</span>
        </div>
      </div>
      <div className="mock-section-label">Dimensions (inches)</div>
      <div className="mock-fields">
        <div className="mock-field-row"><span>Width</span><span className="mock-field-val">48 &quot;</span></div>
        <div className="mock-divider" />
        <div className="mock-field-row"><span>Height / Length</span><span className="mock-field-val">96 &quot;</span></div>
        <div className="mock-divider" />
        <div className="mock-field-row"><span>Quantity</span><span className="mock-field-val">1</span></div>
      </div>
      <div className="mock-section-label">Appearance</div>
      <div className="mock-wood-swatches">
        {['#d4a55a', '#e8c98a', '#b8956a', '#c8a870', '#8b3a2a', '#4a2010'].map((c, i) => (
          <div key={i} className={`mock-swatch ${i === 0 ? 'active' : ''}`} style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: '🗂', title: 'Project Organization', desc: 'Create projects with custom materials and required cut pieces. Everything in one place.' },
  { icon: '📐', title: 'Waste Optimization', desc: 'Automatically optimize cut layouts across full sheets and boards to minimize waste.' },
  { icon: '♻️', title: 'Scrap Reuse', desc: 'Save leftover pieces to your Scrap Bin and reuse them in future projects automatically.' },
  { icon: '📷', title: 'AR Camera Measure', desc: 'Use your iPhone camera to measure a physical board with augmented reality — no tape needed.' },
  { icon: '📄', title: 'PDF Export & Print', desc: 'Export cut plans to PDF. Print scaled to A4 or tile full-size layouts across multiple pages.' },
  { icon: '☁️', title: 'Cloud Sync', desc: 'Sign in with Apple or Google and your projects sync across all your devices automatically.' },
  { icon: '🔷', title: 'Multiple Shapes', desc: 'Pieces can be rectangles, triangles, circles, semicircles, or quarter circles — all rendered accurately.' },
  { icon: '🪵', title: 'Material Types', desc: 'Works for plywood, hardwood boards, fabric panels, and more. Common stock size presets included.' },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2 className="section-title">Everything you need<br />in the shop</h2>
        <p className="section-sub">
          From material input to printable shop diagrams — SplitCut handles the whole workflow.
        </p>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Create a project', desc: 'Name your project and add the sheet materials or boards you have on hand. Choose from common stock sizes or enter custom dimensions.' },
    { num: '02', title: 'Add required pieces', desc: 'List every piece you need — size, shape, and quantity. Supports rectangles, triangles, circles, and more.' },
    { num: '03', title: 'Optimize & review', desc: 'SplitCut calculates the most efficient layout, optionally pulling from your Scrap Bin before touching new material.' },
    { num: '04', title: 'Print & cut', desc: 'Export a PDF with cut diagrams. Print to scale on A4 or tile full-size layouts as real-world cutting guides.' },
  ];
  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-title">From plan to cut<br />in four steps</h2>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step-num">{s.num}</div>
              <div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrapSection() {
  return (
    <section className="scrap-section">
      <div className="container">
        <div className="scrap-inner">
          <div className="scrap-text">
            <div className="section-label">Scrap Bin</div>
            <h2 className="section-title">Stop forgetting<br />about leftover pieces</h2>
            <p className="section-sub">
              Every offcut can be saved to your Scrap Bin. Before cutting into new material, SplitCut
              checks whether any saved scrap matches what you need — by type, thickness, and appearance.
            </p>
            <div className="scrap-behaviors">
              {[
                { icon: '⬆', label: 'Use scrap first', desc: 'Prefer saved pieces before new material' },
                { icon: '♻', label: 'Only use scrap', desc: 'Never touch new material in this project' },
                { icon: '✕', label: 'Do not use scrap', desc: 'Always cut from fresh stock' },
              ].map((b) => (
                <div key={b.label} className="scrap-behavior">
                  <div className="scrap-behavior-icon">{b.icon}</div>
                  <div>
                    <div className="scrap-behavior-label">{b.label}</div>
                    <div className="scrap-behavior-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scrap-visual">
            <div className="scrap-board">
              <div className="scrap-board-label">Scrap Bin</div>
              {[
                { w: 80, h: 50, color: '#d4a55a', label: '18 × 24"' },
                { w: 60, h: 40, color: '#8b3a2a', label: '12 × 18"' },
                { w: 100, h: 30, color: '#b8956a', label: '24 × 12"' },
                { w: 70, h: 60, color: '#4a7a4a', label: '16 × 20"' },
              ].map((p, i) => (
                <div key={i} className="scrap-piece" style={{ width: p.w, height: p.h, background: p.color }}>
                  <span className="scrap-piece-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { icon: '🪵', title: 'Woodworking', desc: 'Cabinets, shelves, furniture — optimize your plywood and solid wood cuts.' },
    { icon: '🏗', title: 'Fabrication', desc: 'Panel cutting, metal sheets, composite materials for construction or manufacture.' },
    { icon: '🪡', title: 'Fabric & Sewing', desc: 'Plan fabric cuts for quilting, upholstery, and apparel with zero waste.' },
    { icon: '🔨', title: 'DIY & Makers', desc: 'Any project requiring cut-down sheet goods benefits from a proper cut plan.' },
  ];
  return (
    <section className="use-cases">
      <div className="container">
        <div className="section-label">Use Cases</div>
        <h2 className="section-title">Built for makers<br />of all kinds</h2>
        <div className="use-cases-grid">
          {cases.map((c) => (
            <div key={c.title} className="use-case-card">
              <div className="use-case-icon">{c.icon}</div>
              <div className="use-case-title">{c.title}</div>
              <div className="use-case-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-glow" />
          <div className="section-label" style={{ color: 'var(--accent)' }}>Free to download</div>
          <h2 className="cta-title">Plan your first cut today</h2>
          <p className="cta-sub">Free to use. One-time purchase to remove ads. No subscription.</p>
          <a href="https://apps.apple.com" className="btn-primary" target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-icon">✂</span>
            <span className="logo-text">SplitCut</span>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="mailto:support@splitcut.app">Support</a>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} SplitCut. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <ScrapSection />
      <UseCases />
      <CTA />
      <Footer />
    </>
  );
}
