import React, { useState } from 'react';
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, GraduationCap,
  BriefcaseBusiness, Layers3, ExternalLink, ChevronDown, MapPin, Download
} from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'BlueBus',
    type: 'Full Stack Web Application',
    description: 'A bus ticket booking platform inspired by modern travel portals, with trip search, seat selection, passenger details and booking management.',
    stack: ['React', 'Node.js', 'MySQL'],
    accent: 'blue',
    status: 'In development'
  },
  {
    number: '02',
    name: 'Fitness Club Management',
    type: 'Software Testing Project',
    description: 'A gym management system for member records, membership plans, payments, attendance, trainer and workout management, and admin reports.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
    accent: 'purple',
    status: 'Project'
  },
  {
    number: '03',
    name: 'WeatherNow',
    type: 'Weather Application',
    description: 'A weather application that retrieves city weather information and stores weather history for later access.',
    stack: ['Python', 'Flask', 'SQLite', 'JavaScript'],
    accent: 'cyan',
    status: 'Project'
  }
];

const skills = [
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'] },
  { group: 'Backend', items: ['Python', 'Flask', 'Node.js'] },
  { group: 'Database & Tools', items: ['MySQL', 'SQLite', 'MongoDB', 'Git', 'VS Code'] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S</span><span>SUJITH<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Sujith <span className="gradient-text">M.</span></h1>
            <h2>Full Stack Developer<span className="cursor">_</span></h2>
            <p className="hero-description">I’m a technology enthusiast and student developer who enjoys building useful, user-friendly web applications — from clean interfaces to practical backend systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:your.email@example.com" aria-label="Email"><Mail /></a>
              <span className="social-line" />
              <span className="muted-small">CONNECT WITH ME</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top"><span>DEVELOPER PROFILE</span><span className="live-indicator">● LIVE</span></div>
              <div className="avatar-placeholder"><Code2 size={58} strokeWidth={1.3} /></div>
              <div className="profile-initials">SM<span>.</span></div>
              <p className="profile-caption">Building ideas into digital experiences.</p>
              <div className="profile-card-bottom"><span><MapPin size={13} /> Tamil Nadu, India</span><span>01 / 03</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15} /> Clean code</div>
            <div className="floating-chip chip-bottom"><Layers3 size={15} /> Full stack mindset</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE <ChevronDown size={14} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="A LITTLE INTRODUCTION" title="About me" />
          <div className="about-grid">
            <div className="about-lead"><p className="large-copy">Curious by nature.<br /><span className="gradient-text">Builder by passion.</span></p></div>
            <div className="about-body">
              <p>I’m Sujith, a B.Tech student at Francis Xavier Engineering College with an interest in full stack development and software problem-solving.</p>
              <p>I enjoy learning by building projects, understanding how applications work behind the scenes, and improving the experience for the people who use them.</p>
              <div className="about-facts">
                <div><GraduationCap /><span><b>B.Tech Student</b><small>Francis Xavier Engineering College</small></span></div>
                <div><BriefcaseBusiness /><span><b>Career Focus</b><small>Full Stack Development</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & technologies" />
          <p className="section-intro">Tools and technologies I’ve explored through learning and project development.</p>
          <div className="skills-grid">
            {skills.map((skill, i) => <div className="skill-card" key={skill.group}><div className="skill-index">0{i + 1}</div><h3>{skill.group}</h3><div className="skill-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I've built" />
          <p className="section-intro">A few projects that reflect my learning, problem-solving and development journey.</p>
          <div className="projects-list">
            {projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-meta"><span>{project.type}</span><span className="project-status">{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-symbol"><Layers3 size={35} strokeWidth={1.2} /><ArrowUpRight size={20} /></div>
            </article>)}
          </div>
          <p className="edit-note">Tip: Add your actual GitHub repository links to each project before publishing.</p>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading eyebrow="MY LEARNING JOURNEY" title="Education" />
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={26} /></div>
            <div><span className="education-period">CURRENT</span><h3>Bachelor of Technology (B.Tech)</h3><p>Francis Xavier Engineering College · Tirunelveli, Tamil Nadu</p><small>Currently pursuing undergraduate studies.</small></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <SectionHeading eyebrow="HAVE A PROJECT IN MIND?" title="Let's build something great." />
            <p>I'm open to learning opportunities, internships, collaborations and meaningful conversations.</p>
            <a className="button button-primary" href="mailto:your.email@example.com">Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-details"><span><Mail size={15} /> your.email@example.com</span><span><MapPin size={15} /> Tamil Nadu, India</span></div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SUJITH<span className="brand-dot">.</span></span></a><span>Designed & built by Sujith M · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2></div>;
}

export default App;
