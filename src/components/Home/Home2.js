import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, my name is <span className="purple">Sami Khan</span>, and I'm a <span className="purple">MERN Stack Developer</span> with
              more than a year of practical experience creating modern, scalable
              web applications. Developing concepts into useful, user-focused
              digital products is my passion.
              <br />
              I've worked with the entire stack
              over the past year, using React to create simple, responsive user
              interfaces, Node.js and Express to manage APIs and authentication,
              and MongoDB to effectively organize data. I like using code to
              solve practical issues and picking up new skills that speed up and
              improve development. Writing clear, maintainable code and
              consistently enhancing the user experience and product quality are
              my main priorities. Projects in this portfolio showcase my
              development, curiosity, and commitment to creating things that
              genuinely work—and work well.
              <br />
              <br />
              <h3>
                ### <span className="purple"> Main Skills</span> as a{" "}
                <span class="purple"> MERN STACK Developer</span>
              </h3>
              <br />
              <span class="purple"> **MongoDB**</span>
              <br />
              Proficient in designing and managing NoSQL databases, optimizing
              queries, and ensuring data integrity.
              <br />
              <br />
              <span class="purple"> **Express.js**</span>
              <br />
              Experienced in building robust server-side applications and
              creating RESTful APIs.
              <br />
              <br />
              <span class="purple"> **React.js**</span>
              <br />
              Skilled in developing dynamic user interfaces, implementing state
              management, and optimizing performance for responsive web
              applications.
              <br />
              <br />
              <span class="purple"> **Node.js**</span>
              <br />
              Strong knowledge of server-side JavaScript, asynchronous
              programming, and building scalable network applications.
              <br />
              <br />
              <span class="purple"> **JavaScript (ES6+)**</span>
              <br />
              Proficient in modern JavaScript features, including promises,
              async/await, and modular programming.
              <br />
              <br />
              <span class="purple"> **HTML & CSS**</span>
              <br />
              Solid understanding of web standards, responsive design, and
              accessibility principles.
              <br />
              <br />
              <span class="purple">
                {" "}
                **CSS Frameworks (Bootstrap, Material-UI, Ant-Design)**
              </span>
              <br />
              Proficient in using CSS frameworks for responsive design, creating
              custom components, and integrating them with your application.
              <br />
              <br />
              <span class="purple"> **State Management**</span>
              <br />
              Experienced in using Redux/Reduxtoolkit or similar state
              management libraries to manage application state and minimize
              bugs.
              <br />
              <br />
              <span class="purple"> **Command Line Interface (CLI)**</span>
              <br />
              Familiar with popular command-line tools, such as npm, yarn, and
              create-react-app, to build and manage projects.
              <br />
              <br />
              {/* - **Performance Optimization**: Familiar with techniques like code splitting, lazy loading, and caching to improve performance and reduce load times. */}
              {/* <br />
              <br /> */}
              <span class="purple"> **Deployment**</span>
              <br />
              Familiar with deployment strategies, including hosting platforms
              like Heroku, Vercel, and Netlify etc.
              <br />
              <br />
              {/* - **Continuous Integration (CI/CD)**: Familiar with CI/CD pipelines, such as Travis CI, GitHub Actions, and Jenkins, to automate the build, test, and deployment of applications. */}
              {/* - **Project Management**: Experienced in managing projects, tracking progress, and communicating with team members. */}
              {/* <br />
              <br /> */}
              <span class="purple"> **Version Control (Git)**</span>
              <br />
              Familiar with Git for version control, collaboration, and code
              management.
              <br />
              <br />
              {/* - **Collaboration**: Familiar with agile methodologies, scrum, and other project management tools, as well as working in a team environment. */}
              {/* <br />
              <br /> */}
              <span class="purple"> **Code Quality & Maintainability**</span>
              <br />
              Proficient in writing clean, modular, and maintainable code, as
              well as maintaining existing codebases.
              {/* <span class='purple'>- **API Integration**</span> : Experienced in integrating third-party APIs and services to enhance application functionality. */}
              {/* <span class='purple'>- **Testing & Debugging**</span> : Knowledge of testing frameworks and debugging tools to ensure code quality and reliability. */}
              <br />
              <br />I hope you enjoyed going through my{" "}
              <span class="purple"> portfolio</span> and wishing you have
              enjoyed it. I need to admit that I am eager to get in touch and
              able to work on some interesting and engaging projects! ---
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Samikhan-123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SAMIIKHANNN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-samiullah-khan-00323823a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sami_khannn_?igsh=bDy0ZzVjbnJ0oNWFh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
