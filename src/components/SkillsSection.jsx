import './SkillsSection.css';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Next.js", "Django", "PyTorch", "TensorFlow"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Linux", "Supabase", "Firebase"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    }
  ];

  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
