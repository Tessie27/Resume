// app/components/Skills.js
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "MongoDB", "PowerShell", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Figma", "Linux"]
    }
  ];

  return (
    <section id="skills" className="section fade-in">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map(skill => (
                <div key={skill} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}