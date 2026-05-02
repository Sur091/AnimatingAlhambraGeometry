import React, { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

function useInView<T extends Element>(
  ref: React.RefObject<T | null>,
  options = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

// --- Animation Variants ---
const stepDuration = 0.8;
const totalGridTime = 6 * stepDuration; // 1 circle + 4 lines = 5 steps
// const alhambraGold = "#D4AF37";

const constructionVariants: Variants = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 0.4,
    transition: {
      pathLength: { delay: i * stepDuration, duration: 1, ease: "easeInOut" },
      opacity: { delay: i * stepDuration, duration: 0.1 },
    },
  }),
  fade: {
    opacity: 0.05,
    transition: { delay: totalGridTime + 3, duration: 2 },
  },
};

const boneVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0, fill: "rgba(212, 175, 55, 0)" }, // Starting with transparent Gold
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: totalGridTime, duration: 3, ease: "easeInOut" },
      opacity: { delay: totalGridTime, duration: 0.1 },
    },
  },
  fillIn: {
    fill: "rgba(59, 130, 246, 0.3)",
    transition: { delay: totalGridTime + 2.5, duration: 1 },
  },
};

const Bone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startAnimation = useInView(containerRef, { threshold: 0.3 });

  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prevKey) => prevKey + 1);
  };

  const start = Math.PI / 4;
  const inc = Math.PI / 2;
  const R = 65;

  return (
    <div
      ref={containerRef}
      onClick={handleRestart}
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
      title="Click to restart construction"
    >
      {startAnimation && (
        <svg
          key={restartKey}
          viewBox="-100 -100 200 200"
          width="100%"
          height="400px"
          style={{ overflow: "visible" }}
        >
          {/* PHASE 1: The Construction Grid */}
          <g stroke="#64748b" strokeWidth="1" fill="none">
            {/* 2. Horizontal & Vertical Axes (custom index 1 and 2) */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.line
                key={i}
                x1={`${R * Math.cos(start + i * inc)}`}
                y1={`${1.5 * R * Math.sin(start + i * inc)}`}
                x2={`${-R * Math.cos(start + (i - 1) * inc)}`}
                y2={`${-1.5 * R * Math.sin(start + (i - 1) * inc)}`}
                custom={i}
                initial="hidden"
                animate={["visible", "fade"]}
                variants={constructionVariants}
              />
            ))}
          </g>

          <g stroke="#64748b" strokeWidth="1" fill="none">
            {/* 2. Horizontal & Vertical Axes (custom index 1 and 2) */}
            {[-R / 2 / Math.sqrt(2), R / 2 / Math.sqrt(2)].map((a, i) => (
              <motion.line
                key={i}
                x1={`${a}`}
                y1={`${1.5 * R * Math.sin(start)}`}
                x2={`${a}`}
                y2={`${-1.5 * R * Math.sin(start)}`}
                custom={4}
                initial="hidden"
                animate={["visible", "fade"]}
                variants={constructionVariants}
              />
            ))}
          </g>

          <g stroke="#64748b" strokeWidth="1" fill="none">
            {/* 2. Horizontal & Vertical Axes (custom index 1 and 2) */}
            {[-2, -1, 1, 2].map((a, i) => (
              <motion.line
                key={i}
                x1={`${R * Math.cos(start)}`}
                y1={`${((a * R) / 2) * Math.sin(start)}`}
                x2={`${-R * Math.cos(start)}`}
                y2={`${((a * R) / 2) * Math.sin(start)}`}
                custom={5}
                initial="hidden"
                animate={["visible", "fade"]}
                variants={constructionVariants}
              />
            ))}
          </g>

          <motion.path
            d={`
                M ${-R * Math.cos(start)}, ${-R * Math.sin(start)}
                L ${-R/2 * Math.cos(start)}, ${-1.5*R * Math.sin(start)}
                L ${R/2 * Math.cos(start)}, ${-1.5*R * Math.sin(start)}
                L ${R * Math.cos(start)}, ${-R * Math.sin(start)}
                L ${R/2 * Math.cos(start)}, ${-R/2 * Math.sin(start)}
                L ${R/2 * Math.cos(start)}, ${R/2 * Math.sin(start)}
                L ${R * Math.cos(start)}, ${R * Math.sin(start)}
                L ${R/2 * Math.cos(start)}, ${1.5*R * Math.sin(start)}
                L ${-R / 2 * Math.cos(start)}, ${1.5 * R * Math.sin(start)}
                L ${-R * Math.cos(start)}, ${R * Math.sin(start)}
                L ${-R / 2 * Math.cos(start)}, ${R/2 * Math.sin(start)}
                L ${-R / 2 * Math.cos(start)}, ${-R/2 * Math.sin(start)}
                Z
              `}
            stroke="#3b82f6" // Vibrant blue
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            animate={["visible", "fillIn"]} // Traces path, then fills color
            variants={boneVariants}
          />
        </svg>
      )}
    </div>
  );
};

export default Bone;
