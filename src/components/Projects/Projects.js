import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogfolio from "../../Assets/Projects/blogfolio.png";
import apnakhata from "../../Assets/Projects/apnakhata.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div className="p-cards">
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blogfolio}
                isBlog={false}
                title="Blogfolio"
                description="Developed a fully responsive full-Stack blogging app website using Mern-Stack Technologies. The website is fully functioned adjusts to various screen sizes, ensuring a smooth user experience. full-stack capabilities, I've crafted an engaging platform that showcases my work effectively. Its adaptive design ensures compatibility across different devices, making it accessible to a wide audience."
                ghLink="https://github.com/Samikhan-123/Mern-blogging-app"
                demoLink="https://mern-frontend-blond.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={apnakhata}
                isBlog={false}
                title="ApnaKhata"
                description="Created a Accounting application using Mern-Stack Technologies. ApnaKhata is a user-friendly expense tracking app designed for personal and family use. Manage your budget, track expenses, and take control of your finances with ease."
                ghLink="https://github.com/Samikhan-123/ApnaKhata-2024"
                demoLink="https://apna-khata-2024.vercel.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ecommerce}
                isBlog={false}
                title="E-commerce"
                description="Created a friendly online shopping website with our MERN-powered eCommerce site. W've designed it to be easy to use, so you can browse products, add them to your cart, and securely checkout with confidence. Our website uses MongoDB, Express.js, React, and Node.js to ensure a smooth shopping journey. Whether you're shopping for fashion, or home essentials, our platform is your go-to destination. you can see demo or code on github"
                ghLink="https://github.com/Samikhan-123/Mern-E-commerce-2024"
                demoLink="https://mern-ecommerce-2024-gold.vercel.app/"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
