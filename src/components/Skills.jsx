function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Arduino",
    "Embedded Systems",
    "IoT",
    "VLSI",
    "Verilog"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;