import React, { useEffect, useState } from "react";
import Particle from "./Particle";
const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;
    let readyStateListener;

    const onReady = () => {
      setProgress(100);
      clearInterval(timer);
      setTimeout(() => setIsVisible(false), 500);
    };

    const simulateProgress = () => {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(timer);
            return 95;
          }
          // More realistic progress simulation
          const increment = Math.random() * 10 + 5; // 5-15% increments
          return Math.min(prev + increment, 95);
        });
      }, 300);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      onReady();
    } else {
      simulateProgress();

      // Use both load and readystatechange for better coverage
      readyStateListener = () => {
        if (document.readyState === "complete") {
          onReady();
        }
      };

      document.addEventListener("readystatechange", readyStateListener);
      window.addEventListener("load", onReady);
    }

    // Fallback - ensure loader disappears after max 4 seconds
    const fallback = setTimeout(() => {
      onReady();
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(fallback);
      document.removeEventListener("readystatechange", readyStateListener);
      window.removeEventListener("load", onReady);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <Particle />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#0f0f0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div style={{ textAlign: "center", width: "220px" }}>
          <div
            style={{
              marginBottom: "16px",
              color: "#ffffff", // Changed to white
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Sami Khan
          </div>
          <div
            style={{
              width: "100%",
              height: "6px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "3px",
              marginBottom: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #ffffff 40%, #f0f0f0 100%)", // Changed to white gradient
                borderRadius: "3px",
                transition: "width 0.3s ease-out",
                boxShadow: "0 0 8px rgba(255,255,255,0.5)", // White glow
                position: "absolute",
                left: 0,
                top: 0,
              }}
            />
          </div>
          {/* <div
          style={{
            color: "#ffffff", // Changed to white
            fontSize: "15px",
            fontWeight: "500",
            letterSpacing: "0.5px",
          }}
        >
          {Math.round(progress)}%
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Loader;
