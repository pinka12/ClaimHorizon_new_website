import { FormEvent, useState } from "react";
import {
  Activity,
  BarChart3,
  Camera,
  CheckCircle2,
  Cloud,
  Cpu,
  FileCheck,
  FileText,
  LoaderCircle,
  Mail,
  Menu,
  Phone,
  ScanSearch,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Video,
  X,
  Zap,
} from "lucide-react";
import logo from "./assets/claimhorizon_logo_nobg.png";
import heroImage from "./assets/hero-vehicle-inspection.jpeg";
import riskImage from "./assets/preinspection-risk.png";
import capabilitiesImage from "./assets/core-capabilities.png";

const web3FormsKey =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ??
  "f6a3e5de-6607-4174-84dd-11a2df9a4b54";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Challenges & Their Solutions", id: "challenges-solutions" },
  { label: "Why Pre-Inspection", id: "why-pre-inspection" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Features", id: "features" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const reasons = [
  {
    title: "Fraud Prevention",
    description:
      "Identify pre-existing damages and discrepancies before policy issuance. Stop fraudulent claims at the source with timestamped visual evidence.",
    icon: ShieldAlert,
  },
  {
    title: "Accurate Risk Assessment",
    description:
      "AI evaluates the precise condition of the vehicle, allowing underwriters to price premiums accurately from real-world asset health.",
    icon: Activity,
  },
  {
    title: "Faster Processing",
    description:
      "Replace days of manual surveying with instant AI-driven reports. Policies move from request to approval in minutes, not weeks.",
    icon: Zap,
  },
  {
    title: "Reduced Disputes",
    description:
      "A clear, annotated record of the vehicle condition at inception removes ambiguity during future claim settlements.",
    icon: ShieldCheck,
  },
];

const challengeProblems = [
  {
    title: "Rampant Fraud",
    description:
      "Staged damages, recycled photos, and manipulated submissions create avoidable underwriting exposure.",
    icon: ShieldAlert,
  },
  {
    title: "Manual Delays",
    description:
      "Traditional inspection workflows slow policy issuance and create inconsistent customer experiences.",
    icon: Activity,
  },
  {
    title: "Human Dependency",
    description:
      "Surveyor availability, subjective assessments, and fragmented field operations reduce reliability at scale.",
    icon: Search,
  },
];

const challengeSolutions = [
  {
    title: "AI-First Intelligence",
    description:
      "Computer vision models identify damage patterns and produce consistent inspection outputs across every branch.",
    icon: Sparkles,
  },
  {
    title: "Zero-Fraud Architecture",
    description:
      "Document cross-checking, metadata validation, and guided capture flows make every submission more trustworthy.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Automation",
    description:
      "Move from vehicle capture to report generation in minutes with a single digital pre-inspection workflow.",
    icon: Zap,
  },
];

const steps = [
  {
    title: "Document Upload",
    description:
      "Customer or agent uploads Registration Certificate, prior policy, and chassis number securely.",
    icon: FileText,
  },
  {
    title: "Image Capture",
    description:
      "Capture guided, high-resolution images from all angles: front, rear, left, right, and top.",
    icon: Camera,
  },
  {
    title: "360 Video Walkaround",
    description:
      "Upload a seamless 360-degree video of the vehicle for additional spatial context.",
    icon: Video,
  },
  {
    title: "AI Analysis",
    description:
      "Our virtual surveyor detects dents, scratches, and anomalies and classifies severity as minor, moderate, or severe.",
    icon: Cpu,
  },
  {
    title: "Document Verification",
    description:
      "The system cross-checks submitted documents with extracted image metadata and number plates for authenticity.",
    icon: FileCheck,
  },
  {
    title: "Instant Report",
    description:
      "Generate a structured pre-inspection report ready for underwriter approval with one click.",
    icon: ScanSearch,
  },
];

const capabilities = [
  {
    title: "AI Damage Detection & Annotation",
    description:
      "Computer vision algorithms highlight areas of interest and draw precise annotations around anomalies.Each anomaly is clearly marked with part-level identification",
    icon: Sparkles,
  },
  {
    title: "Severity Classification",
    description:
      "Findings are categorized into Minor and Major damage to support automated decision engines. Additionally, the system estimates the approximate age of damages",
    icon: BarChart3,
  },
  {
    title: "SaaS Deployment Model",
    description:
      "Launch ClaimHorizon as a managed SaaS platform with automated updates, usage-based billing, and enterprise SLAs.",
    icon: Server,
  },
  {
    title: "Fraud Detection & Prevention",
    description:
      "Detect manipulated images, recycled submissions, and suspicious payloads using metadata and pixel-level checks. The system enforces continuous, no-pause live video capture via webcam, ensuring zero opportunity for tampering during inspection.",
    icon: ShieldAlert,
  },
  {
    title: "Document-to-Image Verification",
    description:
      "OCR ensures the chassis number and license plates in the image set match the submitted documents.",
    icon: Search,
  },
  {
    title: "Fast Report Generation",
    description:
      "Convert raw uploads into structured PDF-style and JSON-ready reports in seconds.",
    icon: Zap,
  },
  {
    title: "Smart Inspection Intelligence",
    description:
      "The system automatically detects stickers, external markings, and unusual visual elements on vehicles, which are often used to conceal or manipulate damages, strengthening fraud detection capabilities.",
    icon: ScanSearch,
  },
  {
    title: "User-Friendly & Self-Explanatory Workflow",
    description:
      "Designed for simplicity, the platform can be used effortlessly by non-technical users or field agents.",
    icon: CheckCircle2,
  },
];

const impactStats = [
  {
    value: "99%",
    label: "Accuracy Rate",
    description:
      "In automated damage detection compared to manual expert surveyors.",
  },
  {
    value: "95%",
    label: "Faster Processing",
    description:
      "Reduction in turnaround time from inspection request to policy issuance.",
  },
  {
    value: "90%",
    label: "Fraud Detection",
    description:
      "Detection confidence for pre-existing damages and suspicious submissions.",
  },
  {
    value: "20X",
    label: "Scalability",
    description:
      "Increase in inspection volume handled without additional headcount.",
  },
];

const enterprisePillars = [
  {
    title: "Enterprise Ready",
    description:
      "Deploy with insurer-grade workflows, clear audit trails, and process control across teams.",
    icon: FileText,
  },
  {
    title: "Pan-India Scalability",
    description:
      "Designed for distributed branch operations, agent-led capture, and high inspection throughput.",
    icon: Cloud,
  },
  {
    title: "Drastic Fraud Reduction",
    description:
      "Multi-layered verification reduces false declarations and improves inspection credibility.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Turnaround",
    description:
      "Compress inspection and underwriting preparation from days to minutes with structured automation.",
    icon: Zap,
  },
];

const heroStats = [
  { value: "99%", label: "Accuracy" },
  { value: "< 5 min", label: "Report Time" },
  { value: "90%", label: "Fraud Caught" },
];

const platformSignals = [
  {
    title: "AI risk scoring",
    description: "Prioritize cases instantly with visual anomaly detection and underwriting-ready confidence scores.",
    icon: ShieldCheck,
  },
  {
    title: "Guided capture workflow",
    description: "Standardize intake quality across agents, branches, and self-service customer submissions.",
    icon: Camera,
  },
  {
    title: "Verification layer",
    description: "Cross-check documents, image metadata, and vehicle identifiers before policy issuance.",
    icon: FileCheck,
  },
];

const marketFocus = [
  "Motor insurers",
  "Digital brokers",
  "TPAs and inspection operations",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    // Capture the form element early; after await, React's event fields can be null.
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3FormsKey);
    formData.append("subject", "New ClaimHorizon Inquiry");
    formData.append("from_name", "ClaimHorizon Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "There was a problem sending your request.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <button className="brand" onClick={() => scrollToSection("home")}>
            <span className="brand-lockup">
              <img src={logo} alt="ClaimHorizon" />
            </span>
          </button>

          <nav className="nav desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <button className="topbar-cta desktop-only" onClick={() => scrollToSection("contact")}>
            Get Started
          </button>

          <button
            className="menu-toggle mobile-only"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mobile-panel">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              className="topbar-cta"
              onClick={() => {
                scrollToSection("contact");
                setMobileOpen(false);
              }}
            >
              Get Started
            </button>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-background">
            <div className="hero-grid" />
            <div className="hero-radial hero-radial-left" />
            <div className="hero-radial hero-radial-right" />
            <div className="hero-arc" />
          </div>

          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">ClaimHorizon | Pre-Inspection AI Platform</span>
              <h1>
                <span className="hero-line hero-line-blue">
                  AI<span className="hero-hyphen">-</span>Powered
                </span>
                <span className="hero-line hero-line-accent">
                  Pre<span className="hero-hyphen">-</span>Inspection
                </span>
                <span className="hero-line hero-line-blue hero-line-sub">for Motor Insurance</span>
              </h1>
              <p>
                Eliminate fraud, automate inspections, and generate instant reports with
                our proprietary computer vision engine. Trusted by leading insurers across India.
              </p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => scrollToSection("contact")}>
                  Request Demo
                </button>
                <button className="secondary-button" onClick={() => scrollToSection("features")}>
                  Explore Platform
                </button>
              </div>

              <div className="hero-stats-grid" aria-label="Platform highlights">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="hero-stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-panel">
                <div className="hero-frame">
                  <div className="hero-frame-scanline" />
                  <img src={heroImage} alt="Vehicle inspection using a mobile phone" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-strip">
          <div className="container platform-strip-grid">
            {platformSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="signal-card">
                  <div className="signal-card-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{signal.title}</h3>
                    <p>{signal.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="challenges-solutions" className="section section-muted challenge-section">
          <div className="container">
            <SectionHeader
              eyebrow="The Challenge & Our Answer"
              title="Transforming Motor Insurance Inspections"
              description="ClaimHorizon replaces delay-prone and fraud-prone inspection workflows with a structured digital pre-inspection system built for insurers."
            />

            <div className="challenge-layout">
              <div className="challenge-column">
                <div className="challenge-column-title challenge-column-title-problem">
                  <span />
                  <h3>Industry Problems</h3>
                </div>
                <div className="challenge-list">
                  {challengeProblems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.title} className="challenge-card">
                        <div className="challenge-card-icon challenge-card-icon-problem">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="challenge-column">
                <div className="challenge-column-title challenge-column-title-solution">
                  <span />
                  <h3>ClaimHorizon Solution</h3>
                </div>
                <div className="challenge-list">
                  {challengeSolutions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.title} className="challenge-card">
                        <div className="challenge-card-icon challenge-card-icon-solution">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <figure className="feature-figure feature-figure-wide">
              <img src={riskImage} alt="Vehicle inspection in progress" />
              <figcaption>
                Guided vehicle capture for reliable pre-inspection and underwriting review
              </figcaption>
            </figure>

            <div id="why-pre-inspection" className="subsection-heading">
              <span className="eyebrow">Why ClaimHorizon</span>
              <h3>
                Why <span className="brand-accent">ClaimHorizon</span> Pre-Inspection Tool
              </h3>
              <p>
                Built for insurers that need accurate inspection evidence, faster decisions,
                and a dependable digital workflow before policy issuance.
              </p>
            </div>

            <div className="card-grid card-grid-two why-grid">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <article key={reason.title} className="info-card">
                    <div className="info-card-icon">
                      <Icon size={28} />
                    </div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Workflow"
              title="The Inspection Process"
              description="A frictionless journey from upload to underwriter. The full survey process is digitized without compromising on detail."
            />

            <div className="process-grid">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="process-card">
                    <div className="process-badge">0{index + 1}</div>
                    <div className="process-icon">
                      <Icon size={26} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="features" className="section section-muted capabilities-section">
          <div className="container">
            <SectionHeader
              eyebrow="Platform Capabilities"
              title="Intelligent Features Built for Scale"
              description="Every feature is designed to reduce fraud, accelerate workflows, and deliver reliable pre-inspection outcomes for insurers."
            />

            <figure className="feature-figure feature-figure-compact">
              <img src={capabilitiesImage} alt="Core capabilities overview" />
            </figure>

            <div className="card-grid capabilities-card-grid">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <article key={capability.title} className="info-card">
                    <div className="info-card-icon">
                      <Icon size={26} />
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-us" className="section enterprise-section">
          <div className="container">
            <SectionHeader
              eyebrow="Why ClaimHorizon"
              title="Built for Enterprise Scale"
              description="A practical inspection layer for insurers that need speed, consistency, and operational control."
            />

            <div className="enterprise-grid">
              {enterprisePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="enterprise-card">
                    <div className="enterprise-card-icon">
                      <Icon size={26} />
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="stats-grid stats-grid-light">
              {impactStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <h3>{stat.label}</h3>
                  <p>{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-layout">
              <span className="eyebrow contact-eyebrow">Contact Us</span>
              <div className="contact-copy">
                <h2>
                  Partner with <span className="brand-accent">Intelligence</span>
                </h2>
                <p>
                  Discover how ClaimHorizon can transform underwriting operations,
                  reduce cost, and fortify your portfolio against fraud.
                </p>

              <div className="contact-meta">
                <div className="contact-meta-item">
                  <div className="contact-meta-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:info@claimhorizon.co.in">info@claimhorizon.co.in</a>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3>Direct Contact</h3>
                    <p>Available Mon-Sat, 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              {submitted ? (
                <div className="success-panel">
                  <CheckCircle2 size={52} />
                  <h3>Request Received</h3>
                  <p>
                    Thank you for your interest in ClaimHorizon. An enterprise specialist
                    will contact you within 24 hours.
                  </p>
                  <button className="secondary-button" onClick={() => setSubmitted(false)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <label>
                      <span>Full Name</span>
                      <input name="name" type="text" required placeholder="Jane Doe" />
                    </label>
                    <label>
                      <span>Company Name</span>
                      <input name="company" type="text" required placeholder="Acme Insurance" />
                    </label>
                    <label>
                      <span>Work Email</span>
                      <input name="email" type="email" required placeholder="jane@acme.com" />
                    </label>
                    <label>
                      <span>Phone Number</span>
                      <input name="phone" type="tel" required placeholder="+91 99999 00000" />
                    </label>
                  </div>

                  <label className="message-field">
                    <span>Message / Query</span>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us about your current inspection volume and challenges..."
                    />
                  </label>

                  <input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} />

                  <button className="primary-button submit-button" type="submit" disabled={submitting}>
                    {submitting ? (
                      <>
                        <LoaderCircle size={18} className="spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <img className="footer-logo" src={logo} alt="ClaimHorizon" />
            <p className="footer-copy">
              Empowering insurance companies with enterprise-grade AI to automate
              pre-inspection vehicle surveys, reduce fraud, and accelerate policy decisions.
            </p>
          </div>

          <nav className="footer-nav">
            {navItems.slice(1).map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="container footer-bottom">
          <p>(c) {new Date().getFullYear()} ClaimHorizon Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
