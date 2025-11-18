// app/components/Education.js
export default function Education() {
  const educationData = [
    {
      degree: "National Certificate: Business Analysis Support (NQF 5)",
      institution: "Impactful",
      duration: "2023 - 2024",
    },
    {
      degree: "Diploma in IT (NQF 6)",
      institution: "Richfield Graduate Institute of Technology",
      duration: "2019 - 2023",
    },
    {
      degree: "National Senior Certificate - Matric",
      institution: "Hpe School",
      duration: "2010 - 2015",
    }
  ];

  return (
    <section id="education" className="section fade-in">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}