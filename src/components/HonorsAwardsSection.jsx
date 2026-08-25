import './ListSection.css';

export default function HonorsAwardsSection() {
  const awards = [
    "1st Runners Up, IEEE Signal Processing Cup 2025",
    "Winner at CTF Competitions",
    "Blockchain Olympiad Award",
    "Dean's List Award (Multiple Semesters)",
    "National Hackathon BUET Participant",
    "PTAK Case Competition Winner"
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
