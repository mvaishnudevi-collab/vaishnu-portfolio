function Projects() {
  const projects = [
    {
      title: "Automatic Plant Watering System",
      tech: "Arduino, Sensors, IoT",
      description:
        "Developed a smart irrigation system that automatically waters plants based on soil moisture levels."
    },
    {
      title: "Automatic Street Lighting System",
      tech: "Embedded Systems, Sensors",
      description:
        "Designed an intelligent street lighting system for energy-efficient illumination."
    },
    {
      title: "FIR Filter Implementation in FPGA",
      tech: "FPGA, Verilog HDL",
      description:
        "Implemented a FIR filter using FPGA technology for digital signal processing applications."
    },
    {
      title: "Wi-Fi Queue Display Monitoring System",
      tech: "Wi-Fi, Embedded Systems",
      description:
        "Built a wireless queue monitoring solution for real-time status tracking."
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <h4>{project.tech}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;