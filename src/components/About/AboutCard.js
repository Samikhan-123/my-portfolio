import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SAMI KHAN </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am a MERN stack developer with the expertise of <span className="purple">MongoDB - React.js - Express.js - Node.js</span>
            <br />
            I am currently studding Bachelors (Virtual University) in Computer Science (BSCS),
            Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "#f3670a" }}>
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
          <footer className="blockquote-footer">— Cory House</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
