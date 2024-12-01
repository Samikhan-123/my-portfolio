import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // Set to true, then false after a short delay to force re-render
    setRefresh(true);
    const timer = setTimeout(() => setRefresh(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h2>
      <GitHubCalendar
        username="samikhan-123"
        blockSize={15}
        blockMargin={5}
        color="#0ecce1"
        fontSize={16}
        key={refresh} // This forces re-render
      />
    </Row>
  );
}

export default Github;
