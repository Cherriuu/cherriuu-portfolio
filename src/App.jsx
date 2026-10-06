import React, { useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Play,
  Pause,
  Music2,
} from "lucide-react";

const tech = [
  ["Py", "Python"],
  ["J", "Java"],
  ["JS", "JavaScript"],
  ["TS", "TypeScript"],
  ["⚛", "React"],
  ["N", "Node.js"],
  ["ex", "Express.js"],
  ["dj", "Django"],
  ["API", "Django REST"],
  ["F", "Flask"],
  ["C", "C"],
  ["AWS", "AWS"],
  ["⌘", "Git"],
  ["PG", "PostgreSQL"],
  ["DB", "MySQL"],
  ["SQL", "SQL"],
  ["~", "Tailwind CSS"],
  ["HTML", "HTML"],
  ["CSS", "CSS"],
];

const projects = [
  {
    title: "Hospital Resource Allocation Simulator",
    description:
      "A full-stack discrete-event simulator exploring how patients compete for limited hospital rooms and staff. Compares first-come-first-served, priority, and priority-aging scheduling across normal, flu-surge, and mass-casualty workloads, using five Emergency Severity Index–inspired triage levels.",
    highlight:
      "Priority aging reduced worst-case wait time by approximately 88% versus priority-only scheduling across five seeded, 10,000-patient simulations.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Vitest"],
    href: "https://github.com/Cherriuu/hospital-resource-simulator",
  },
  {
    title: "BubbleFlow",
    description:
      "An inventory and production system connecting front-of-house orders with back-of-house batches. Tracks preparing, ready, and expired ingredients, and uses recent demand, available stock, and incoming batches to recommend what staff should make next.",
    highlight:
      "An append-only inventory ledger, first-expired-first-out batch consumption, and transactional row locking preserve stock history and prevent concurrent overselling.",
    tags: [
      "React",
      "TypeScript",
      "Django REST",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    href: "https://github.com/Cherriuu/bubbleflow-v2",
  },
  {
    title: "Thyroid Tracker",
    description:
      "A Django health-tracking application for people managing thyroid conditions. Lets users log and manage symptoms, medications, and lab results over time, keeping their health history in one place.",
    highlight:
      "Authenticated accounts and ownership checks keep each user's records scoped to their own account.",
    tags: ["Django", "Python", "SQL", "HTML", "CSS"],
    href: "https://github.com/Cherriuu/thyroid-tracker",
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

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [error, setError] = useState("");
  const [isStarting, setIsStarting] = useState(false);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio || isStarting) return;

    setError("");

    if (!audio.paused) {
      audio.pause();
      return;
    }

    setIsStarting(true);
    audio.volume = volume;

    try {
      await audio.play();
    } catch {
      setError("Music couldn't play. Please try again.");
    } finally {
      setIsStarting(false);
    }
  }

  function changeVolume(event) {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  }

  return (
    <aside className="music-player" aria-label="Background music">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/snowlight.mp3`}
        preload="none"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setError("Music couldn't load. Please try again.");
        }}
      />

      <div className="music-controls">
        <button
          type="button"
          className="music-toggle"
          onClick={toggleMusic}
          disabled={isStarting}
          aria-pressed={isPlaying}
          aria-label={
            isPlaying ? "Pause background music" : "Play background music"
          }
        >
          {isPlaying ? (
            <Pause size={16} aria-hidden="true" />
          ) : (
            <Play size={16} aria-hidden="true" />
          )}

          <span>
            {isStarting
              ? "Loading…"
              : isPlaying
                ? "Pause music"
                : "Soft music"}
          </span>
        </button>

        <Music2 size={14} aria-hidden="true" />

        <label className="sr-only" htmlFor="music-volume">
          Music volume
        </label>

        <input
          id="music-volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
        />
      </div>

      <p className="music-error" role="status">
        {error}
      </p>
    </aside>
  );
}

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
          <a href="/resume_2026.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <span className="nav-emote">( ˶ˆᗜˆ˵ )</span>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HI, I'M °˖✧◝(⁰▿⁰)◜✧˖°</p>

            <h1>
              Jesica
              <br />
              Bermudes
            </h1>

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
            <h2>
              About me <span>°˖⋆♡</span>
            </h2>

            <p>
              I’m a Computer Science student at the University of Central
              Florida graduating in May 2027. I enjoy building useful software
              with thoughtful interfaces and reliable systems behind them.
            </p>

            <p>
              I’m especially interested in full-stack development, backend
              architecture, and the decisions that make software work under
              real constraints. My projects explore resource scheduling,
              inventory consistency, and demand forecasting. BubbleFlow was
              inspired by my experience as a boba shop shift lead. When I’m
              not coding, I’m probably out getting my next cup of matcha or
              looking for the next thing to learn about ( ˶ᵔ ᵕ ᵔ˶ )
            </p>
          </div>
        </section>

        <section className="section divider">
          <div className="section-heading-row">
            <h2>
              Tech Stack <span>⌁°｡⋆୨୧</span>
            </h2>
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
            <h2>
              Projects <span>°｡♡</span>
            </h2>

            <a
              className="tiny-note linkish"
              href="https://github.com/Cherriuu"
              target="_blank"
              rel="noreferrer"
            >
              View all projects →
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>
                <p className="project-highlight">{project.highlight}</p>

                <div className="project-footer">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer-brand">
            Jesica Bermudes <span>°˖⋆ ( ˶ˆᗜˆ˵ )</span>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="/resume_2026.pdf">Resume</a>
        </nav>

        <div className="socials">
          <a
            href="https://github.com/Cherriuu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
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

          <a
            href="mailto:Jesica.bermudes11@gmail.com"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>

          <span className="footer-snowflake">❄</span>
        </div>
      </footer>

      <MusicPlayer />
    </div>
  );
}

export default App;