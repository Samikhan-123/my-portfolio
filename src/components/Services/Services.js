import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import Particle from "../Particle";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description:
        "Complete web application development using modern technologies and best practices for scalable, maintainable solutions.",
      icon: "🚀",
      features: [
        "Frontend & Backend Development",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 2,
      title: "RESTful API Development",
      description:
        "Design and develop robust, scalable REST APIs with proper authentication, validation, and documentation.",
      icon: "🔗",
      features: [
        "RESTful Architecture",
        "Authentication & Authorization",
        "API Documentation",
        "Error Handling & Validation",
      ],
      technologies: ["Express.js", "JWT", "MongoDB", "Postman"],
    },
    {
      id: 3,
      title: "Frontend Development",
      description:
        "Create engaging, interactive user interfaces with modern frameworks and libraries for optimal user experience.",
      icon: "💻",
      features: [
        "React.js Development",
        "State Management",
        "Component Architecture",
        "UI/UX Implementation",
      ],
      technologies: ["React", "Redux", "Material-UI", "CSS3"],
    },
    {
      id: 4,
      title: "Database Management",
      description:
        "Design, implement, and optimize database solutions for efficient data storage and retrieval operations.",
      icon: "🗄️",
      features: [
        "Database Design & Modeling",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery",
      ],
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
    {
      id: 5,
      title: "Cloud Deployment",
      description:
        "Deploy and manage applications on cloud platforms with CI/CD pipelines and monitoring solutions.",
      icon: "☁️",
      features: [
        "Cloud Platform Deployment",
        "CI/CD Pipeline Setup",
        "Domain & SSL Configuration",
        "Performance Monitoring",
      ],
      technologies: ["Render", "Vercel", "Heroku"],
    },
    {
      id: 6,
      title: "Technical Consulting",
      description:
        "Provide expert guidance on technology choices, architecture decisions, and development best practices.",
      icon: "💡",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review & Optimization",
        "Technical Support",
      ],
      technologies: ["MERN Stack", "Full-Stack", "Agile", "Best Practices"],
    },
  ];

  return (
    <section id="services" className="services-section">
      <Particle />

      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="services-header">
              <h2 className="services-title">
                My <span className="purple">Services</span>
              </h2>
              <p className="services-subtitle">
                Comprehensive MERN stack development solutions tailored to your
                business needs
              </p>
              <div className="services-divider"></div>
            </div>
          </Col>
        </Row>

        <Row className="services-grid">
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="services-cta">
              <h3 className="cta-title">Ready to Start Your Project?</h3>
              <p className="cta-description">
                Let's discuss how I can help bring your ideas to life with
                cutting-edge technology and professional expertise.
              </p>
              <div className="cta-buttons">
                <a
                  href="#contact"
                  className="btn btn-primary cta-btn"
                  onClick={handleOpenModal}
                >
                  Get In Touch
                </a>
                <a href="/resume" className="btn btn-outline-primary cta-btn">
                  View Resume
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            You can reach me at: <br />
            <a
              href="mailto:samikhan7816@gmail.com"
              style={{
                fontWeight: 600,
              }}
            >
              samikhan7816@gmail.com
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            as="a"
            href="mailto:samikhan7816@gmail.com"
            onClick={handleCloseModal}
          >
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;
