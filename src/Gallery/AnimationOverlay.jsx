import React, { useEffect, useRef } from "react";
import "./Animation.css";
import gsap from "gsap";
import OverlayScroll from "./OverlayScroll";

const AnimationOverlay = () => {
  const animationRef = useRef(null); // Sliding animation container
  const rightRef = useRef(null); // Left side Sliding animation
  const leftRef = useRef(null); // Right side Sliding animation
  const gradientRef = useRef(null); // White Gradient Ref

  useEffect(() => {
    gsap.to(gradientRef.current, {
      delay: 2.5,
      opacity: 0,
      ease: "none",
    });

    gsap.to(rightRef.current, {
      delay: 0.5,
      x: "400px",
      duration: 1.5,
      ease: "none",
    });

    gsap.to(leftRef.current, {
      delay: 0.5,
      x: "-400px",
      duration: 1.5,
      ease: "none",
    });

    gsap.to(animationRef.current, {
      delay: 2.5,
      opacity: 0,
    });
  });

  return (
    <>
      {/* White Radial Gradient Overlay  */}
      <div className="full-screen-gradient-overlay" ref={gradientRef}></div>

      {/* Sliding Animation */}
      <div className="animation-overlay" ref={animationRef}>
        <div className="move-right" ref={rightRef}>
          <OverlayScroll scrollNumber={1} />
          <OverlayScroll scrollNumber={2} />
        </div>
        <div className="move-left" ref={leftRef}>
          <OverlayScroll scrollNumber={3} />
          <OverlayScroll scrollNumber={4} />
        </div>
      </div>
    </>
  );
};

export default AnimationOverlay;
