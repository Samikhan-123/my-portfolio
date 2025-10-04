import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const RouteNotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <FaExclamationTriangle size={64} color="#ff4081" style={{ marginBottom: 24 }} />
      <h1 style={{ fontSize: "3rem", marginBottom: 16 }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: 12 }}>Page Not Found</h2>
      <p style={{ fontSize: "1.1rem", marginBottom: 32, color: "#e0e0e0" }}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "12px 32px",
          background: "#0ecce1",
          color: "#222",
          borderRadius: "30px",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 2px 12px rgba(14,204,225,0.15)",
          transition: "background 0.2s, color 0.2s",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default RouteNotFound;