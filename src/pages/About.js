import React from 'react';
import './About.css';
import linkedinIcon from './LinkedIn_logo.png';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <section className="about-summary">
        <p>
          Hello, I'm Cason Zhang, a passionate and skilled Software Development Engineer. I graduated from the School of Computing & Augmented Intelligence at Arizona State University (ASU) with a Bachelor of Science in Computer Science in May 2023.
        </p>
        <p>
          I have proficiency in Java and prior experience with C++, JavaScript, Python, C#, HTML, and Assembly Language. My technical skills include Spring Boot, Spring Cloud, FeignClient, Eureka, Hibernate, Git, Jenkins, Docker, Kubernetes, RabbitMQ, Redis, Zipkin, Postman, Elasticsearch, MySQL, MongoDB, AWS, TCP/IP, HTTP and HTTPS, Restful API, Circuit Breaker, Okta, OAuth2, and JWT.
        </p>
        <p>
          With a strong background in both backend and frontend technologies, I am committed to solving complex problems and delivering efficient solutions.
        </p>
      </section>
      <div className="linkedin-link">
        <a href="https://www.linkedin.com/in/cason-zhang-639b7a223/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default About;
