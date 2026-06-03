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
const totalGridTime = 22 * stepDuration; // 1 circle + 4 lines = 5 steps
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

const airplaneVariants: Variants = {
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

const Airplane: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startAnimation = useInView(containerRef, { threshold: 0.3 });

  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prevKey) => prevKey + 1);
  };

  const start = Math.PI / 8;
  const inc = Math.PI / 4;
  const octagon_x = (t: number) => R * Math.cos(start + t * inc);
  const octagon_y = (t: number) => R * Math.sin(start + t * inc);
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
            {/* 1. Central Circle (custom index 0) */}
            <motion.circle
              cx="0"
              cy="0"
              r={`${R}`}
              custom={0}
              initial="hidden"
              animate={["visible", "fade"]}
              variants={constructionVariants}
              style={{ rotate: 22.5, originX: "50%", originY: "50%" }}
            />

            {/* 2. Horizontal & Vertical Axes (custom index 1 and 2) */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.line
                key={i}
                x1={`${1.5 * R * Math.cos(start + i * inc)}`}
                y1={`${1.5 * R * Math.sin(start + i * inc)}`}
                x2={`${-1.5 * R * Math.cos(start + i * inc)}`}
                y2={`${-1.5 * R * Math.sin(start + i * inc)}`}
                custom={i + 1}
                initial="hidden"
                animate={["visible", "fade"]}
                variants={constructionVariants}
              />
            ))}
          </g>

          {/* PHASE 2: The Octagon Highlight */}
          <motion.path
            d={`
              M ${R * Math.cos(start)}, ${R * Math.sin(start)}
              L ${R * Math.cos(start + inc)}, ${R * Math.sin(start + inc)}
              L ${R * Math.cos(start + 2 * inc)}, ${R * Math.sin(start + 2 * inc)}
              L ${R * Math.cos(start + 3 * inc)}, ${R * Math.sin(start + 3 * inc)}
              L ${R * Math.cos(start + 4 * inc)}, ${R * Math.sin(start + 4 * inc)}
              L ${R * Math.cos(start + 5 * inc)}, ${R * Math.sin(start + 5 * inc)}
              L ${R * Math.cos(start + 6 * inc)}, ${R * Math.sin(start + 6 * inc)}
              L ${R * Math.cos(start + 7 * inc)}, ${R * Math.sin(start + 7 * inc)}
              Z
            `}
            stroke="#000" // Alhambra Gold
            strokeWidth="1"
            strokeLinejoin="round"
            initial="hidden"
            animate={["visible", "fade"]}
            custom={5}
            fillOpacity={0}
            variants={constructionVariants}
          />

          {/* PHASE 3: Inner lines of the Octagon */}
          <g stroke="#64748b" strokeWidth="1" fill="none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.line
                key={i}
                x1={`${R * Math.cos(start + i * inc)}`}
                y1={`${R * Math.sin(start + i * inc)}`}
                x2={`${R * Math.cos(start + (i + 3) * inc)}`}
                y2={`${R * Math.sin(start + (i + 3) * inc)}`}
                custom={i + 6}
                initial="hidden"
                animate={["visible", "fade"]}
                variants={constructionVariants}
              />
            ))}
          </g>

          {/* PHASE 4: Extending the sides of the Octagon */}
          <g stroke="#64748b" strokeWidth="1" fill="none">
            {/* 2. Horizontal & Vertical Axes (custom index 1 and 2) */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.line
                key={i}
                x1={`${2 * R * Math.cos(start + i * inc) - R * Math.cos(start + (i + 1) * inc)}`}
                y1={`${2 * R * Math.sin(start + i * inc) - R * Math.sin(start + (i + 1) * inc)}`}
                x2={`${-R * Math.cos(start + i * inc) + 2 * R * Math.cos(start + (i + 1) * inc)}`}
                y2={`${-R * Math.sin(start + i * inc) + 2 * R * Math.sin(start + (i + 1) * inc)}`}
                custom={i + 14}
                initial="hidden"
                animate={["visible", "fade"]}
                variants={constructionVariants}
              />
            ))}
          </g>

          {/* PHASE 5: Ariplane Highlight */}
          <motion.path
            d={`
              M ${-Math.SQRT1_2 * octagon_x(6) + (1 + Math.SQRT1_2) * octagon_x(5)},  ${-Math.SQRT1_2 * octagon_y(6) + (1 + Math.SQRT1_2) * octagon_y(5)}
              L ${octagon_x(3)}, ${octagon_y(3)}
              L ${-Math.SQRT1_2 * octagon_x(0) + (1 + Math.SQRT1_2) * octagon_x(1)},  ${-Math.SQRT1_2 * octagon_y(0) + (1 + Math.SQRT1_2) * octagon_y(1)}
              L ${octagon_x(1)}, ${octagon_y(1)}
              L ${(1 - Math.SQRT1_2) * octagon_x(7) + Math.SQRT1_2 * octagon_x(2)},  ${(1 - Math.SQRT1_2) * octagon_y(7) + Math.SQRT1_2 * octagon_y(2)}
              L ${octagon_x(7)}, ${octagon_y(7)}
              L ${(1 - Math.SQRT1_2) * octagon_x(2) + Math.SQRT1_2 * octagon_x(5)},  ${(1 - Math.SQRT1_2) * octagon_y(2) + Math.SQRT1_2 * octagon_y(5)}
              L ${octagon_x(5)}, ${octagon_y(5)}
              Z
            `}
            stroke="#3b82f6" // Vibrant blue
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            animate={["visible", "fillIn"]} // Traces path, then fills color
            variants={airplaneVariants}
          />
        </svg>
      )}
    </div>
  );
};

export default Airplane;
