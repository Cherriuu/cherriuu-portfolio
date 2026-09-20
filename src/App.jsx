import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const tech = [
  ["Py", "Python"],
  ["JS", "JavaScript"],
  ["TS", "TypeScript"],
  ["⚛", "React"],
  ["N", "Node.js"],
  ["dj", "Django"],
  ["F", "Flask"],
  ["C", "C"],
  ["AWS", "AWS"],
  ["⌘", "Git"],
  ["DB", "MySQL"],
  ["~", "Tailwind CSS"],
  ["HTML", "HTML"],
];

const projects = [
  {
    title: "Hospital Resource Simulator",
    status: "In Progress",
    description:
    "A full-stack discrete-event simulation modeling patient flow through a resource-constrained hospital. Simulates staffing, room availability, patient priorities, and workload surges while tracking real-time operational metrics.",
    tags: ["React", "TypeScript", "Node.js", "TailwindCSS"],
    href: "https://github.com/Cherriuu/Hospital-Resource-Simulator",
  },
  {
    title: "Thyroid Tracker",
    description:
      "A Django web application for managing thyroid health records, allowing users to track symptoms, lab results, and medication history over time.",
    tags: ["Django", "Python", "HTML", "CSS"],
    href: "https://github.com/Cherriuu/Thyroid-Tracker",
  },
  {
    title: "BubbleFlow",
    description:
      "A boba shop inventory system that tracks ingredient levels, calculates how many servings can be made from available stock, and prevents inventory from being over-allocated.",
    tags: ["Flask", "Python", "SQL"],
    href: "https://github.com/Cherriuu/BubbleFlow",
  },
];

const snowflakes = Array.from({ length: 85 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: `${-(i % 12) * 0.8}s`,
  duration: `${9 + (i % 8)}s`,
  size: `${10 + (i % 5) * 4}px`,
  drift: `${((i % 7) - 3) * 14}px`,
  opacity: 0.28 + (i % 5) * 0.11,
}));

function App() {
  return (
    <div className="site-shell">
      <div className="snow" aria-hidden="true">
        {snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="snowflake"
            style={{
              left: flake.left,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
              fontSize: flake.size,
              opacity: flake.opacity,
              "--drift": flake.drift,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">❄</span>
          <span>Jesica Bermudes</span>
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="/resume_2026.pdf" target="_blank" rel="noreferrer">Resume</a>
          <span className="nav-emote">( ˶ˆᗜˆ˵ )</span>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HI, I'M °˖✧◝(⁰▿⁰)◜✧˖°</p>
            <h1>Jesica<br />Bermudes</h1>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View My Work <ArrowUpRight size={17} />
              </a>
              <a
            className="button secondary"
            href="mailto:Jesica.bermudes11@gmail.com"
          >
            Get in Touch
          </a>
            </div>
          </div>

          <div className="portrait-wrap">
          <img
            src="/profile.png"
            alt="Jesica Bermudes"
            className="portrait"
          />
    </div>
        </section>

        <section className="section divider" id="about">
          <div className="section-copy narrow">
            <h2>About me <span>°˖⋆♡</span></h2>
            
        <p>
          I’m a Computer Science student at the University of Central Florida
          who enjoys building clean, useful, and thoughtful software.
        </p>

        <p>
          I’m especially interested in full-stack development, backend systems,
          software systems, and learning new technologies. When I’m not coding, I’m
          probably out getting my next cup of matcha or looking for the next
          thing to learn about ( ˶ᵔ ᵕ ᵔ˶ )
        </p>
          </div>
        </section>

        <section className="section divider">
          <div className="section-heading-row">
            <h2>Tech Stack <span>⌁°｡⋆୨୧</span></h2>
            <span className="tiny-note">Tools I use and love →</span>
          </div>

          <div className="tech-grid">
            {tech.map(([symbol, label]) => (
              <div className="tech-item" key={label}>
                <div className="tech-icon">{symbol}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section divider" id="projects">
          <div className="section-heading-row">
            <h2>Projects <span>°｡♡</span></h2>
            <a className="tiny-note linkish" href="https://github.com/Cherriuu" target="_blank" rel="noreferrer">
              View all projects →
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <h3>{project.title}</h3>
                  {project.status && <span className="status">{project.status}</span>}
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={23} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer-brand">Jesica Bermudes <span>°˖⋆ ( ˶ˆᗜˆ˵ )</span></div>
          <div className="copyright">© 2026. All rights reserved.</div>
        </div>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="/resume_2026.pdf">Resume</a>
        </nav>

        <div className="socials">
          <a href="https://github.com/Cherriuu" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a
          href="https://www.linkedin.com/in/jesica-bermudes/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
          <a href="mailto:Jesica.bermudes11@gmail.com" aria-label="Email">
          <Mail size={22} />
          </a>
          <span className="footer-snowflake">❄</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
