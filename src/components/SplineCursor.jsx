import React, { useEffect, useRef } from "react";

export default function SplineCursor() {
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
      <iframe
        src="https://my.spline.design/particlesrocket-Aq7HiiKcnF2ALHyRaeor5C0p/"
        width="60"
        height="60"
        style={{ background: "transparent", border: "none", pointerEvents: "none" }}
        allow="autoplay; fullscreen"
        title="Spline Cursor"
      />
    </div>
  );
} 