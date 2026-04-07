import './App.css';

const SUPPORT_EMAIL = 'tanushsbuisness@gmail.com';
const WEBSITE_URL = 'https://splitcut.netlify.app';
const DEVELOPER_NAME = 'Tanush Shrivastava';
const LAST_UPDATED = 'March 15, 2026';
const APP_STORE_URL = 'https://apps.apple.com/us/app/splitcut/id6760597327';

const PRIVACY_SECTIONS = [
  {
    title: '1. Information We Collect',
    blocks: [
      {
        heading: 'Account Information',
        paragraphs: [
          'When you sign in to SplitCut, you may use Sign in with Apple or Google Sign-In. Through these authentication methods and Firebase Authentication, we may receive limited account information such as your name, your email address, and a unique account identifier.',
          'We do not collect or store your password directly.',
        ],
      },
      {
        heading: 'Project Data',
        paragraphs: [
          'SplitCut allows you to create and manage projects. Project data may include project names, dimensions, layout information, and settings or configurations related to your projects.',
        ],
      },
      {
        heading: 'Device Storage',
        paragraphs: [
          'Project data is stored locally on your iPhone or iPad. If you delete a project within the App, that project data is removed from the device.',
        ],
      },
    ],
  },
  {
    title: '2. How We Use Information',
    paragraphs: [
      'We use information only to authenticate your account, allow you to sign in and access the App, enable you to create, save, and manage projects, maintain core app functionality, display and measure advertisements, and process optional purchase-related app access changes such as removing ads.',
      'We do not sell your personal information.',
    ],
  },
  {
    title: '3. How Information Is Stored',
    paragraphs: [
      'Project data is currently stored locally on your iOS or iPadOS device.',
      'Authentication-related information is processed through Firebase Authentication and the sign-in provider you choose, such as Apple or Google.',
    ],
  },
  {
    title: '4. Third-Party Services',
    blocks: [
      {
        heading: 'Firebase',
        paragraphs: ['SplitCut uses Firebase for authentication and related backend functionality.'],
      },
      {
        heading: 'Sign in with Apple',
        paragraphs: [
          'If you use Sign in with Apple, Apple may provide a unique identifier and, depending on your settings, your email address and name.',
        ],
      },
      {
        heading: 'Google Sign-In',
        paragraphs: [
          'If you use Google Sign-In, Google may provide basic profile information such as your name and email address.',
        ],
      },
      {
        heading: 'Advertising (Google AdMob)',
        paragraphs: [
          'SplitCut displays advertisements using Google AdMob.',
          'AdMob may collect certain information to display and measure advertisements, which may include device identifiers, advertising identifiers, IP address, interaction with advertisements, and approximate location derived from IP address.',
          'This information may be used by Google and its partners to provide personalized or non-personalized advertising.',
          'Users who purchase the Remove Ads in-app purchase will no longer see advertisements within the App.',
        ],
      },
      {
        heading: 'In-App Purchases',
        paragraphs: [
          'SplitCut offers an optional in-app purchase to remove advertisements.',
          'All in-app purchases are processed through Apple’s App Store payment system. SplitCut does not collect or store payment card details or billing information.',
          'Apple may collect and process payment information according to its own privacy policies and terms.',
          'Your use of these services may also be subject to the privacy policies and terms of those third parties.',
        ],
      },
    ],
  },
  {
    title: '5. Data Retention',
    paragraphs: [
      'We retain account-related information only as needed to provide authentication and app access.',
      'Project data stored locally on your device remains there until you delete the project, you delete the App, or the data is otherwise removed from your device.',
      'If your account is deleted from Firebase by us upon request, your authentication access to SplitCut will be removed.',
    ],
  },
  {
    title: '6. Account Deletion',
    paragraphs: [
      'At this time, SplitCut does not provide an in-app self-service account deletion feature.',
      `If you would like your account deleted, you may contact us at ${SUPPORT_EMAIL}. Upon request, we can delete your account from Firebase on our side.`,
      'Deleting your account will remove your authentication access to the App. Data stored locally on your device may still remain on your device unless you delete it within the App or remove the App from your device.',
    ],
  },
  {
    title: '7. Data Sharing',
    paragraphs: [
      'We do not sell, rent, or share your personal information with third parties for advertising or marketing purposes.',
      'We only rely on third-party providers as necessary to operate the App, such as authentication and backend services.',
    ],
  },
  {
    title: '8. Advertising Tracking',
    paragraphs: [
      'SplitCut may display advertisements provided by Google AdMob. These ads may use Apple’s advertising identifier (IDFA) to deliver personalized advertisements.',
      'If required, the App will request permission through Apple’s App Tracking Transparency framework before accessing this identifier.',
      'Users may decline tracking at any time through the system prompt.',
      'If SplitCut is configured to use non-personalized ads only, tracking may not apply.',
    ],
  },
  {
    title: '9. Security',
    paragraphs: [
      'We take reasonable measures to protect information used by the App. However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '10. Children’s Privacy',
    paragraphs: [
      'SplitCut is not directed to children under 13, and we do not knowingly collect personal information from children under 13.',
      'If we become aware that we have collected personal information from a child under 13, we will take reasonable steps to delete it.',
    ],
  },
  {
    title: '11. International Users',
    paragraphs: [
      'If you use the App outside your home country, your information may be processed in countries where our service providers operate.',
    ],
  },
  {
    title: '12. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. If we make changes, we will update the “Last Updated” date above.',
      'Your continued use of SplitCut after changes become effective means you accept the revised Privacy Policy.',
    ],
  },
  {
    title: '13. Contact Us',
    paragraphs: [
      'If you have questions about this Privacy Policy or would like to request account deletion, contact us at:',
    ],
    contactEmail: SUPPORT_EMAIL,
  },
];

const TERMS_SECTIONS = [
  {
    title: '1. Use of the App',
    paragraphs: [
      'SplitCut is a mobile application designed to help users create, save, and manage project and cutting-related data.',
      'You may use the App only in compliance with these Terms and all applicable laws.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'You must be legally permitted to use the App under the laws of your jurisdiction.',
      'If you are under the age required to enter into a binding agreement in your jurisdiction, you may use the App only with appropriate permission from a parent or legal guardian.',
    ],
  },
  {
    title: '3. Accounts and Authentication',
    paragraphs: [
      'To access certain features, you may need to sign in using Sign in with Apple or Google Sign-In.',
      'Authentication is managed through Firebase.',
      'You are responsible for maintaining the security of your chosen sign-in account and for any activity associated with it.',
    ],
  },
  {
    title: '4. User Data and Content',
    paragraphs: [
      'You may create and store project data within the App. You are responsible for the content you create and store.',
      'Project data is currently stored locally on your device.',
      'You are responsible for maintaining your own backups and for verifying the accuracy of any project, layout, measurement, or cutting information before relying on it.',
    ],
  },
  {
    title: '5. Acceptable Use',
    list: [
      'Use the App in violation of any law or regulation',
      'Attempt to interfere with or disrupt the App or related systems',
      'Attempt to gain unauthorized access to any account, service, or data',
      'Use the App in a way that could harm the developer, the App, or other users',
    ],
    intro: 'You agree not to:',
  },
  {
    title: '6. Account Deletion and Termination',
    paragraphs: [
      `At this time, users cannot delete their accounts directly from within the App. If you want your account deleted, you may contact us at ${SUPPORT_EMAIL}, and we may delete your account from Firebase on our side.`,
      'We may suspend or terminate access to the App if necessary for security, abuse prevention, legal compliance, or technical reasons.',
    ],
  },
  {
    title: '7. Availability and Changes',
    paragraphs: [
      'We may modify, update, suspend, or discontinue all or part of the App at any time, with or without notice.',
      'We do not guarantee that the App will always be available, error-free, or uninterrupted.',
    ],
  },
  {
    title: '8. Payments and Purchases',
    paragraphs: [
      'SplitCut may offer optional in-app purchases, such as the ability to remove advertisements.',
      'All purchases are processed through Apple’s App Store payment system. Payment transactions are subject to Apple’s terms and conditions.',
      'Purchases are handled by Apple, and SplitCut does not store or process payment card information.',
      'Refunds are managed by Apple according to App Store policies.',
    ],
  },
  {
    title: '9. No Professional Advice',
    paragraphs: [
      'SplitCut is provided as a planning and project tool only. It does not provide engineering, construction, safety, or professional trade advice.',
      'You are solely responsible for reviewing and verifying any dimensions, layouts, cuts, and project decisions before real-world use.',
    ],
  },
  {
    title: '10. Disclaimer of Warranties',
    paragraphs: [
      'The App is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.',
      'To the fullest extent permitted by law, we disclaim all warranties, including warranties of merchantability, fitness for a particular purpose, non-infringement, and availability.',
    ],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
      `To the fullest extent permitted by law, ${DEVELOPER_NAME} will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, revenue, business, or use arising out of or related to your use of the App.`,
      'Your use of the App is at your own risk.',
    ],
  },
  {
    title: '12. Third-Party Services',
    paragraphs: [
      'The App may rely on third-party services, including Apple, Google, Firebase, and Google AdMob. We are not responsible for the availability, accuracy, or practices of third-party services.',
      'Your use of those services may also be governed by their own terms and policies.',
    ],
  },
  {
    title: '13. Intellectual Property',
    paragraphs: [
      `All rights, title, and interest in and to SplitCut, excluding user-created content, are owned by ${DEVELOPER_NAME} or its licensors.`,
      'You may not copy, modify, distribute, sell, reverse engineer, or exploit any part of the App except as allowed by law.',
    ],
  },
  {
    title: '14. Changes to These Terms',
    paragraphs: [
      'We may update these Terms from time to time. If we do, we will update the “Last Updated” date above.',
      'Your continued use of the App after updated Terms become effective means you accept the revised Terms.',
    ],
  },
  {
    title: '15. Governing Law',
    paragraphs: [
      `These Terms are governed by the laws of the jurisdiction in which ${DEVELOPER_NAME} operates, without regard to conflict of law principles.`,
    ],
  },
  {
    title: '16. Contact',
    paragraphs: ['If you have questions about these Terms, contact:'],
    contactEmail: SUPPORT_EMAIL,
  },
];

function Nav({ legalMode = false }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="SplitCut home">
          <span className="logo-icon">✂</span>
          <span className="logo-text">SplitCut</span>
        </a>
        {legalMode ? (
          <div className="nav-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/account-deletion">Account deletion</a>
          </div>
        ) : (
          <a href={APP_STORE_URL} className="nav-cta" target="_blank" rel="noreferrer">
            Download Free
          </a>
        )}
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
          pieces you need, then print shop-ready diagrams, scaled or full-size.
        </p>
        <div className="hero-actions">
          <a href={APP_STORE_URL} className="btn-primary" target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
          <a href="#features" className="btn-ghost">See features ↓</a>
        </div>
        <div className="hero-phones">
          <PhoneMockup imageSrc="/simImages/simOne.png" imageAlt="SplitCut off-cut screen" />
          <PhoneMockup imageSrc="/simImages/simTwo.png" imageAlt="SplitCut bookshelf screen" elevated />
          <PhoneMockup imageSrc="/simImages/simThree.png" imageAlt="SplitCut add material screen" />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ imageSrc, imageAlt, elevated }) {
  return (
    <div className={`phone-wrap ${elevated ? 'elevated' : ''}`}>
      <div className="phone">
        <img className="phone-image" src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: '🗂', title: 'Project Organization', desc: 'Create projects with custom materials and required cut pieces. Everything in one place.' },
  { icon: '📐', title: 'Waste Optimization', desc: 'Automatically optimize cut layouts across full sheets and boards to minimize waste.' },
  { icon: '♻️', title: 'Scrap Reuse', desc: 'Save leftover pieces to your Scrap Bin and reuse them in future projects automatically.' },
  { icon: '📷', title: 'AR Camera Measure', desc: 'Use your iPhone camera to measure a physical board with augmented reality with no tape needed.' },
  { icon: '📄', title: 'PDF Export & Print', desc: 'Export cut plans to PDF. Print scaled to A4 or tile full-size layouts across multiple pages.' },
  { icon: '☁️', title: 'Cloud Sync', desc: 'Sign in with Apple or Google and your projects sync across all your devices automatically.' },
  { icon: '🔷', title: 'Multiple Shapes', desc: 'Pieces can be rectangles, triangles, circles, semicircles, or quarter circles and all render accurately.' },
  { icon: '🪵', title: 'Material Types', desc: 'Works for plywood, hardwood boards, fabric panels, and more. Common stock size presets included.' },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2 className="section-title">Everything you need<br />in the shop</h2>
        <p className="section-sub">
          From material input to printable shop diagrams, SplitCut handles the whole workflow.
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
    { num: '02', title: 'Add required pieces', desc: 'List every piece you need, size, shape, and quantity. Supports rectangles, triangles, circles, and more.' },
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
              checks whether any saved scrap matches what you need by type, thickness, and appearance.
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
                { w: 80, h: 50, color: '#74d2ff', label: '18 × 24"' },
                { w: 60, h: 40, color: '#2d8cff', label: '12 × 18"' },
                { w: 100, h: 30, color: '#5aa7ff', label: '24 × 12"' },
                { w: 70, h: 60, color: '#1f58d6', label: '16 × 20"' },
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
    { icon: '🪵', title: 'Woodworking', desc: 'Cabinets, shelves, furniture. Optimize your plywood and solid wood cuts.' },
    { icon: '🏗', title: 'Fabrication', desc: 'Panel cutting, metal sheets, and composite materials for construction or manufacturing.' },
    { icon: '🪡', title: 'Fabric & Sewing', desc: 'Plan fabric cuts for quilting, upholstery, and apparel with less waste.' },
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
          <a href={APP_STORE_URL} className="btn-primary" target="_blank" rel="noreferrer">
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
  const handleSupportClick = async (event) => {
    event.preventDefault();

    const mailto = `mailto:${SUPPORT_EMAIL}?subject=SplitCut%20Support`;
    window.location.href = mailto;

    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      window.setTimeout(() => {
        window.alert(`Support email copied: ${SUPPORT_EMAIL}`);
      }, 120);
    } catch (error) {
      window.setTimeout(() => {
        window.alert(`Email us at ${SUPPORT_EMAIL}`);
      }, 120);
    }
  };

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
            <a href="/terms">Terms of Service</a>
            <a href="/account-deletion">Account Deletion</a>
            <button type="button" className="footer-support" onClick={handleSupportClick}>
              Support
            </button>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} SplitCut. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function LegalSection({ section }) {
  return (
    <section className="legal-section">
      <h2>{section.title}</h2>
      {section.intro ? <p>{section.intro}</p> : null}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.blocks?.map((block) => (
        <div key={block.heading} className="legal-block">
          <h3>{block.heading}</h3>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}
      {section.list ? (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.contactEmail ? (
        <p>
          <a className="legal-link" href={`mailto:${section.contactEmail}`}>
            {section.contactEmail}
          </a>
        </p>
      ) : null}
    </section>
  );
}

function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <div className="legal-page">
      <Nav legalMode />
      <main className="legal-main">
        <div className="container legal-container">
          <div className="legal-shell">
            <div className="legal-eyebrow">{eyebrow}</div>
            <h1 className="legal-title">{title}</h1>
            <div className="legal-meta">Last Updated: {LAST_UPDATED}</div>
            <p className="legal-intro">{intro}</p>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy Policy for SplitCut"
      intro="SplitCut (“SplitCut,” “the App,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how information is collected, used, stored, and disclosed when you use the SplitCut mobile application on iOS and iPadOS. By using SplitCut, you agree to this Privacy Policy."
    >
      {PRIVACY_SECTIONS.map((section) => (
        <LegalSection key={section.title} section={section} />
      ))}
    </LegalLayout>
  );
}

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="Terms of Service for SplitCut"
      intro="These Terms of Service (“Terms”) govern your use of the SplitCut mobile application on iOS and iPadOS. By downloading, accessing, or using SplitCut, you agree to these Terms. If you do not agree, do not use the App."
    >
      {TERMS_SECTIONS.map((section) => (
        <LegalSection key={section.title} section={section} />
      ))}
    </LegalLayout>
  );
}

function AccountDeletionPage() {
  return (
    <LegalLayout
      eyebrow="Account Deletion"
      title="Account Deletion / Privacy Choices for SplitCut"
      intro="This page explains how SplitCut users can request account deletion or ask questions about privacy choices."
    >
      <section className="legal-section">
        <h2>Account Deletion</h2>
        <p>At this time, SplitCut does not support in-app self-service account deletion.</p>
        <p>If you would like your account deleted, please send a request to:</p>
        <p>
          <a className="legal-link" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>Please include the email address associated with your SplitCut account.</p>
        <p>Once your request is processed, your account can be deleted from Firebase on our side.</p>
      </section>

      <section className="legal-section">
        <h2>What Happens When Your Account Is Deleted</h2>
        <p>When your account is deleted:</p>
        <ul>
          <li>your authentication access to SplitCut will be removed</li>
          <li>you will no longer be able to sign in using that deleted account for SplitCut unless a new account is created later</li>
        </ul>
        <p>Please note:</p>
        <ul>
          <li>project data currently stored locally on your device may remain on your device unless you delete it within the App or remove the App from your device</li>
          <li>deleting the account from our side does not automatically erase data already stored locally on your device</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>Other Privacy Requests</h2>
        <p>If you have questions about your data or privacy choices, contact:</p>
        <p>
          <a className="legal-link" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          For more information, please review our{' '}
          <a className="legal-link" href={`${WEBSITE_URL}/privacy`}>
            Privacy Policy
          </a>{' '}
          and our{' '}
          <a className="legal-link" href={`${WEBSITE_URL}/terms`}>
            Terms of Service
          </a>.
        </p>
      </section>
    </LegalLayout>
  );
}

function HomePage() {
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

function NotFoundPage() {
  return (
    <LegalLayout
      eyebrow="404"
      title="Page not found"
      intro="The page you requested does not exist. You can return to the SplitCut homepage or use the legal links below."
    >
      <section className="legal-section">
        <p>
          <a className="btn-primary" href="/">
            Back to home
          </a>
        </p>
      </section>
    </LegalLayout>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/privacy') {
    return <PrivacyPage />;
  }

  if (path === '/terms') {
    return <TermsPage />;
  }

  if (path === '/account-deletion') {
    return <AccountDeletionPage />;
  }

  if (path === '/') {
    return <HomePage />;
  }

  return <NotFoundPage />;
}
