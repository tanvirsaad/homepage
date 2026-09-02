import './Timeline.css';

export default function EducationSection() {
  const education = [
    {
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2020 - 2025",
      details: <><span className="cgpa-badge">CGPA 3.96</span> <span className="cgpa-text">Top 10% of graduating class</span></>
    },
    {
      institution: "Notre Dame College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2017 - 2019",
      details: <><span className="cgpa-badge">GPA 5.00 / 5.00</span></>
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
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3 className="timeline-title mb-0">{item.institution}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-subtitle">{item.degree}</p>
              {item.details && <p className="timeline-details mt-2">{item.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
