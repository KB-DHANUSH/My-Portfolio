import React, { useEffect, useRef } from "react";

export default function MinimalCursorPlanet() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";
    // Move the custom cursor
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 30}px, ${e.clientY - 30}px, 0)`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        pointerEvents: "none",
        zIndex: 99999,
        transition: "transform 0.08s cubic-bezier(.4,2,.6,1)",
        willChange: "transform",
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <defs>
          <radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b388ff" stopOpacity="1" />
            <stop offset="70%" stopColor="#7c4dff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.4" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Glowing planet */}
        <circle cx="30" cy="30" r="13" fill="url(#planetGlow)" filter="url(#glow)" />
        {/* Moon orbit */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 30 30"
            to="360 30 30"
            dur="2.2s"
            repeatCount="indefinite"
          />
          <circle cx="30" cy="10" r="3" fill="#fff" fillOpacity="0.85" />
        </g>
      </svg>
    </div>
  );
} 