import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/sami_khan_MERN.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            title="resume"
            variant="primary"
            href={pdf}
            download="Sami_khan_MERN" // s download with a specific filename
            style={{ maxWidth: "250px" }}
            className="mb-4"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          {/* Display PDF using iframe */}
          <iframe
            title="Resume PDF"
            target="_blank"
            rel="noopener noreferrer"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{ width: "100%", height: "800px", border: "none" }}
            // sandbox="allow-scripts allow-same-origin"
            allow="clipboard-write"
            src={pdf}
            download="samiullah "
          ></iframe>
        </Row>

        {/* Download buttons */}
        <Row
          className="mt-4"
          style={{ justifyContent: "center", position: "relative" }}
        >
          <Button
            title="resume"
            variant="primary"
            href={pdf}
            download="Sami_khan_MERN" // download with a specific filename
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
