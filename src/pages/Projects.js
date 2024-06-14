import React from 'react';
import './Projects.css';
import githubIcon from './github-mark.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <section className="project">
        <h2>Real-time Inference Platform for Automatic Medical Diagnostic AI Model</h2>
        <ul>
          <li>Integrated RabbitMQ for real-time data streaming from sensors tracking monkey behavior, ensuring low-latency processing and immediate diagnostic assessments.</li>
          <li>Built a scalable microservices architecture with Spring Boot and Spring Cloud, ensuring efficient communication between services and minimizing downtime for continuous monitoring.</li>
          <li>Employed Docker and Kubernetes for containerization and orchestration, allowing seamless scaling and reducing resource overhead to handle variable data volumes.</li>
          <li>Implemented TensorFlow Serving for real-time AI model inference, automating diagnostic predictions. Used Grafana and Prometheus for monitoring, quickly resolving bottlenecks to maintain high performance and availability.</li>
        </ul>
      </section>

      <section className="project">
        <h2>AI-Powered Recommendation System for Car Dealership</h2>
        <ul>
          <li>Developed an AI-driven recommendation system to provide personalized car suggestions, increasing customer satisfaction by 30% and boosting sales by 20%.</li>
          <li>Implemented service discovery and load balancing using Eureka, and used OpenFeign for declarative REST client. This improved the scalability and maintainability of the recommendation system.</li>
          <li>Deployed Redis for caching frequently accessed data, significantly speeding up response times for repeated queries and improving the overall user experience.</li>
          <li>Implemented comprehensive user management including user authentication and authorization with Spring Security and JWT, and integrated Okta for third-party identity management, ensuring secure access to the recommendation system.</li>
          <li>Created a front-end application using React and designed data visualization components using Recharts, enabling users to view recommendation results and user data interactively, enhancing decision-making processes.</li>
        </ul>
      </section>

      <section className="project">
        <h2>Automated ML Model Deployment Pipeline for Predictive Fishing Service</h2>
        <ul>
          <li>Developed a FastAPI backend to serve ML models, enabling real-time fishing activity predictions with low latency and high throughput, supporting thousands of concurrent requests.</li>
          <li>Implemented Apache Kafka to manage streaming data from multiple resource and user inputs, ensuring efficient real-time data ingestion and distribution for up-to-date model predictions.</li>
          <li>Utilized Java for core application logic, Docker for containerization, Kubernetes for orchestration, Ansible for configuration management, and MLFlow for model tracking and management.</li>
          <li>Designed CI/CD pipelines using Jenkins and GitLab CI to automate model training, testing, and deployment, reducing deployment times by 70% and ensuring consistent updates.</li>
        </ul>
      </section>

      <section className="project">
        <h2>NFT Platform Development</h2>
        <ul>
          <li>Developed an NFT platform using JavaScript, Solidity, and React, allowing users to mint, buy, and sell NFTs. Ensured seamless user experience and efficient transactions.</li>
          <li>Implemented smart contracts with Solidity on Ethereum, integrating Web3.js for frontend-blockchain interaction, enhancing security and functionality.</li>
          <li>Designed and styled the platform with CSS and HTML, using Create React App for efficient development and optimized production.</li>
        </ul>
      </section>

      <div className="github-link">
        <a href="https://github.com/zythum-art" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
