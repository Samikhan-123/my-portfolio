import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Display PDF using iframe */}
          <iframe
            title="Resume PDF"
            src={pdf}
            style={{ width: "100%", height: "800px", border: "none" }}
          ></iframe>
        </Row>

        {/* Download buttons */}
        <Row className="mt-4" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            title= "resume"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
