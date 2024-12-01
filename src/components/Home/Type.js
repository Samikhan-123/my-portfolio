import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "MERN Stack Developer",
            "Full Stack Developer",
            "React js Developer",
            "Node js Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 75, // Typing speed
          deleteSpeed: 50, // Deleting speed
          cursor: "|", // Custom cursor character
          pauseFor: 1000, // Pause before starting the next string
          // onStringTyped: (index) => {
          //   console.log(`Typed string index: ${index}`);
          // },
          // onTypingPaused: (index) => {
          //   console.log(`Typing paused at index: ${index}`);
          // },
          // onTypingResumed: (index) => {
          //   console.log(`Typing resumed at index: ${index}`);
          // },
          // onStringDeleted: (index) => {
          //   console.log(`Deleted string index: ${index}`);
          // },
        }}
      />
    </div>
  );
}

export default Type;
