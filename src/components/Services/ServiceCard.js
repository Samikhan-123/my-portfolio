import React, { useState } from "react";
import { Card } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`service-card ${isHovered ? "hovered" : ""}`}>
        <Card.Body className="service-card-body">
          <div className="service-icon">
            <span className="icon-emoji">{service.icon}</span>
          </div>

          <Card.Title className="service-title">{service.title}</Card.Title>

          <Card.Text className="service-description">
            {service.description}
          </Card.Text>

          <div className="service-features">
            <h6 className="features-title">Key Features:</h6>
            <ul className="features-list">
              {service.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-technologies">
            <h6 className="tech-title">Technologies:</h6>
            <div className="tech-tags">
              {service.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

         
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
