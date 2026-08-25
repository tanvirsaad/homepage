import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="about" className="section fade-in">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">MD Tanvir Hassan</h1>
          <p className="hero-subtitle">Software Engineer @ TherapBD</p>
          <p className="hero-bio">
            Hi I am Tanvir, who is really interested in how LLMs work, how efficient agentic systems can be built, and how we can better understand their behavior. Currently, I’m exploring agentic security attack trajectories and their behavioral patterns, as well as how tabular-data CoT process reward models (PRMs) behave with contrastive step samples. Outside of research, I enjoy music, playing the violin in my free time, and traveling to new places and discovering the unknown.
          </p>

          <div className="hero-actions flex items-center gap-4 mt-8">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download CV
            </a>

            <div className="social-links flex gap-2">
              <a href="mailto:saad7557.7557a@gmail.com" className="social-icon hover-lift" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="https://www.linkedin.com/in/tanvir-saad-4668b1205/" target="_blank" rel="noopener noreferrer" className="social-icon hover-lift" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/tanvirsaad" target="_blank" rel="noopener noreferrer" className="social-icon hover-lift" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://scholar.google.com/citations?user=hH2qtmMAAAAJ" target="_blank" rel="noopener noreferrer" className="social-icon hover-lift" aria-label="Google Scholar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8.932 8.932 0 0 1 12 9a8.932 8.932 0 0 1 7.162 4.44L24 9.5 12 0z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Squiggly 1 */}
          <svg className="hero-decoration hero-squiggly-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              d="M 20, 100 C 50, 150 80, 50 110, 100 C 140, 150 170, 50 190, 80" />
          </svg>

          {/* Squiggly 2 */}
          <svg className="hero-decoration hero-squiggly-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              d="M 10, 10 C 60, -20 100, 60 150, 20 C 180, 0 190, 30 190, 50" />
          </svg>

          {/* Star shape */}
          <svg className="hero-decoration hero-star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              d="M 50, 10 L 60, 40 L 90, 50 L 60, 60 L 50, 90 L 40, 60 L 10, 50 L 40, 40 Z" />
          </svg>

          {/* Little dots */}
          <svg className="hero-decoration hero-dots" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="80" cy="40" r="4" fill="currentColor" />
            <circle cx="40" cy="80" r="4" fill="currentColor" />
          </svg>

          <img src="/Saad-good.png" alt="MD Tanvir Hassan" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
