import './Timeline.css';

export default function EducationSection() {
  const education = [
    {
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2020 - 2025",
    },
    {
      institution: "Notre Dame College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2017 - 2019",
    }
  ];

  return (
    <section id="education" className="section fade-in">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.institution}</h3>
              <p className="timeline-subtitle">{item.degree}</p>
              <span className="timeline-period">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
