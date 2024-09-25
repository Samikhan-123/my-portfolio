import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h2>
      <GitHubCalendar
        username="Samikhan-123"
        blockSize={15}
        blockMargin={5}
        color="#0ecce1"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
