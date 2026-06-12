import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <img
          src={profile}
          alt="Vaishnu"
          className="profile-image"
        />

        <h1>M Vaishnu Devi</h1>

        <h2>
          Electronics & Communication Engineer
        </h2>

        <p>
          Full Stack Developer | IoT Enthusiast | VLSI Learner
        </p>

        <div className="hero-buttons">

          <a href="/resume.pdf" download className="btn">
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/vaishnu-devi-m"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;