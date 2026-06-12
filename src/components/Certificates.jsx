function Certificates() {
  const certificates = [
    {
      name: "Sensors and Actuators",
      issuer: "NPTEL",
      year: "2026"
    },
    {
      name: "Digital VLSI Testing",
      issuer: "NPTEL",
      year: "2026"
    },
    {
      name: "Introduction to Internet of Things (Elite Certificate)",
      issuer: "IIT Kharagpur NPTEL",
      year: "2025"
    },
    {
      name: "Introduction to Industry 4.0 and Industrial Internet of Things (Elite Certificate)",
      issuer: "IIT Kharagpur NPTEL",
      year: "2024"
    },
    {
      name: "Electronic System Design: Hands-On Circuits and PCB Design with CAD Software (Elite Certificate)",
      issuer: "IIT Madras NPTEL",
      year: "2024"
    },
    {
      name: "IEEE English for Technical Professionals",
      issuer: "IEEE",
      year: "2023"
    }
  ];

  return (
    <section className="certificates">
      <h2>Certifications</h2>

      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>

            <span>{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;