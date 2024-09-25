// Preloader.js
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner"; // Import a specific spinner

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  // Hide the preloader once the page fully loads
  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setVisible(false), 500); // Slight delay for smooth transition
    };

    // Check if page has already loaded
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      // Add event listener for the load event
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad); // Cleanup on unmount
  }, []);

  if (!visible) return null; // Don't render if not visible

  return (
    <div style={styles.container}>
      <TailSpin
        height={100}
        width={100}
        color="#ffffff" // Spinner color
        ariaLabel="loading" 
      />
      <h1 style={styles.text}>Loading...</h1>
      <div style={styles.animatedBackground} />
    </div>
  );
};

// Styles for the Preloader component
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black", // Background color
    zIndex: 9999, // Ensure it covers other content
    transition: "opacity 0.5s ease-out", // Smooth transition on hide
  },
  text: {
    color: "white", // Text color
    marginTop: 20,
    fontSize: "24px", // Modern text size
    letterSpacing: "2px", // Make text look more stylish
  },
  animatedBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #ff4081, #0ecce1)", // Gradient background
    opacity: 0.2, // Slight transparency for subtle effect
    zIndex: -1, // Behind the content
    animation: "gradientAnimation 5s ease infinite", // Background animation
  },
};

// Keyframes for background animation
const globalStyles = `
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

// Inject global styles for keyframes
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default Preloader;
