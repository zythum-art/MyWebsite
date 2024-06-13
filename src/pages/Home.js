import React from 'react';
import './Home.css';
import casonImage from './cason1.jpg';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Cason Zhang</h1>
        <nav className="home-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="home-hero">
        <div className="home-hero-text">
          <h2>Hello,</h2>
          <p>
            I’m a <span className="highlight">Software Development Engineer</span> seeking a full-time SDE position. I have a passion for solving complex problems and delivering efficient solutions.
          </p>
        </div>
        <div className="home-hero-image">
          <img src={casonImage} alt="Cason Zhang" />
        </div>
      </section>
      <section className="home-section" id="about">
        <h2>About Me</h2>
        <p>
          With a background in Computer Science, I have experience in various technologies including Spring Boot, Hibernate, React, and more. I specialize in backend development and have a keen interest in frontend technologies.
        </p>
      </section>
      <section className="home-section" id="projects">
        <h2>My Projects</h2>
        <p>
          I have worked on several projects including a microservices-based e-commerce platform and a real-time chat application. You can find more details on my Projects page.
        </p>
      </section>
      <section className="home-section" id="contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me via email at <a href="mailto:zyt1726660473@gmail.com">zyt1726660473@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Home;
