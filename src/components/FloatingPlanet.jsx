import React, { useEffect, useRef } from "react";

const planetGradient = "radial-gradient(circle at 60% 40%, #a7f0ff 0%, #6f6bff 60%, #3a1c71 100%)";

export default function FloatingPlanet() {
  const planetRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (planetRef.current) {
        planetRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={planetRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: 48,
        height: 48,
        transition: "transform 0.12s cubic-bezier(.4,2,.6,1)",
        willChange: "transform",
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Glowing planet */}
        <defs>
          <radialGradient id="planetGlow" cx="60%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#a7f0ff" />
            <stop offset="60%" stopColor="#6f6bff" />
            <stop offset="100%" stopColor="#3a1c71" />
          </radialGradient>
        </defs>
        <circle cx="24" cy="24" r="16" fill="url(#planetGlow)" filter="url(#blur)" />
        <filter id="blur">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        {/* Moon orbit path (invisible, for reference) */}
        {/* <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" strokeDasharray="2 4" opacity="0.1" /> */}
        {/* Moon */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 24 24"
            to="360 24 24"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <circle cx="24" cy="6" r="4" fill="#fff" fillOpacity="0.85" filter="url(#moonBlur)" />
          <filter id="moonBlur">
            <feGaussianBlur stdDeviation="0.7" />
          </filter>
        </g>
      </svg>
    </div>
  );
} 