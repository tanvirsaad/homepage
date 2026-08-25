import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container flex items-center justify-between">
        <p className="copyright">© {currentYear}. md-tanvir-hassan.me</p>
        <div className="footer-links flex gap-4">
          <a href="mailto:saad7557.7557a@gmail.com" aria-label="Email" className="footer-link">Email</a>
          <a href="https://github.com/tanvirsaad" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/tanvir-saad-4668b1205/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
