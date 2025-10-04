// Professional Preloader Component
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  // Simulate realistic loading progress
  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: "Loading assets..." },
      { progress: 40, text: "Preparing interface..." },
      { progress: 60, text: "Optimizing experience..." },
      { progress: 80, text: "Almost ready..." },
      { progress: 100, text: "Welcome!" },
    ];

    let currentStep = 0;
    const progressInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      }
    }, 300);

    return () => clearInterval(progressInterval);
  }, []);

  // Hide the preloader once the page fully loads
  useEffect(() => {
    const handlePageLoad = () => {
      // Ensure progress reaches 100% before hiding
      setTimeout(() => {
        setProgress(100);
        setLoadingText("Welcome!");
        setTimeout(() => setVisible(false), 800); // Smooth exit
      }, 200);
    };

    // Check if page has already loaded
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader-container ">
      <div className="preloader-background">
        <div className="preloader-gradient" />
        <div className="preloader-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="logo-circle">
            <span className="logo-text">SK</span>
          </div>
        </div>

        <div className="preloader-spinner">
          <div className="spinner-ring">
            <div className="spinner-ring-inner" />
          </div>
        </div>

        <div className="preloader-text">
          <h2 className="loading-title">{loadingText}</h2>
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
