import './ListSection.css';

export default function HonorsAwardsSection() {
  const awards = [
    "1st Runners Up, IEEE Signal Processing Cup 2025 — Presented at ICASSP 2025",
    "Dean's List Award, BUET — 4 out of 4 levels — Academic Merit",
    "2024 Research Grant Recipient, RISE Research Grant Award",
    "2024 Silver Award, Blockchain Olympiad Bangladesh",
    "2nd Runner‑Up, IUT CTF 2024",
    "2023 Champion, DL Sprint 2.0 BUET CSE FEST 2023",
    "2023 2nd Runner‑Up, Web3 Hackathon BUET CSE FEST 2023",
    "60% Scholarship — PTAK Case Competition 2021"
  ];

  return (
    <section id="awards" className="section fade-in">
      <h2 className="section-title">Honors & Awards</h2>
      <ul className="custom-list flex-col gap-4">
        {awards.map((award, index) => (
          <li key={index} className="list-item">
            <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            <span>{award}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
