import React, { useState, useEffect, useRef } from "react";
import { motion, scale, type Variants } from "framer-motion";

// --- Scroll Trigger Hook ---
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

// --- Mathematical Setup ---
const R = 50.0;
const D = R * Math.SQRT1_2;

// Hexagonal lattice translation vectors for the Pajarita
const tessellationVectors = [
  // { dx: 0, dy: -6 * R },
  { dx: 0, dy: -4 * D },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 4 * D },

  { dx: -2 * D, dy: -2 * D },
  { dx: -2 * D, dy: -6 * D },
  { dx: -2 * D, dy: 2 * D },
  { dx: -2 * D, dy: 6 * D },

  { dx: 2 * D, dy: -6 * D },
  { dx: 2 * D, dy: -2 * D },
  { dx: 2 * D, dy: 2 * D },
  { dx: 2 * D, dy: 6 * D },

  { dx: 4 * D, dy: -4 * D },
  { dx: 4 * D, dy: 0 },
  { dx: 4 * D, dy: 4 * D },

  { dx: -4 * D, dy: -4 * D },
  { dx: -4 * D, dy: 0 },
  { dx: -4 * D, dy: 4 * D },

  { dx: -6 * D, dy: -2 * D },
  { dx: -6 * D, dy: 2 * D },

  { dx: 6 * D, dy: -2 * D },
  { dx: 6 * D, dy: 2 * D },
];

// --- Animation Variants ---
const drawDuration = 2;

const tileVariants: Variants = {
  hidden: { pathLength: 0, fill: "rgba(59, 130, 246, 0)", opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: {
      opacity: { delay: i * 0.3 - 0.5, duration: 0.1 },
    },
  }),
  hide: { opacity: 0 },
  // 1. Draw the outlines sequentially
  draw: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, duration: drawDuration, ease: "easeInOut" },
      opacity: { delay: i * 0.3, duration: 0.1 },
    },
  }),
  // 2. Fill the colors after drawing
  fillIn: () => ({
    fill: "rgba(59, 130, 246, 0.4)",
    transition: {
      delay: tessellationVectors.length * 0.3,
      duration: 1,
    },
  }),
};

// 3. Translate the entire plane continuously
const time_before_reflection =
  tessellationVectors.length * 0.15 + drawDuration + 2;
const planeVariants: Variants = {
  static: { x: 0, y: 0 },
  scale: {
    scaleX: -1,
    transition: {
      delay: time_before_reflection, // Wait for draw & fill
      duration: 3,
      ease: "easeInOut",
    },
  },
  fadeIn: {
    opacity: [0, 0.3, 0.3, 0],
    transition: {
      duration: 3 + 1,
      times: [0, 0.5 / 4, 3.5 / 4, 1],
      delay: time_before_reflection - 0.5,
    },
  },
};

const ReflectionAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startAnimation = useInView(containerRef, { threshold: 0.3 });
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleRestart}
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "50%",
      }}
      title="Click to restart animation"
    >
      {startAnimation && (
        <svg
          key={restartKey}
          viewBox="-200 -200 400 400"
          width="100%"
          height="100%" // THE FIX: Fills the square container perfectly
          style={{ overflow: "visible" }}
        >
          {/* The parent group applies the infinite translation to all children */}
          <motion.g initial="static" animate="scale" variants={planeVariants}>
            {tessellationVectors.map((vector, i) => (
              <motion.circle
                key={i}
                cx={vector.dx}
                cy={vector.dy}
                r={R}
                custom={i}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                animate={["draw", "fillIn"]}
                variants={tileVariants}
              />
            ))}
          </motion.g>
          <motion.g initial="hide" animate="fadeIn" variants={planeVariants}>
            {tessellationVectors.map((vector, i) => (
              <circle
                key={i}
                cx={vector.dx}
                cy={vector.dy}
                r={R}
                stroke="#3b82f6"
                fill="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </motion.g>
          <motion.path
            d={`M ${0} -250 L ${0} 250`} // Your SVG Path
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="10 10" // 4px dash, 4px gap
            initial="hide"
            custom={tessellationVectors.length}
            animate="show"
            variants={tileVariants}
          />
        </svg>
      )}
    </div>
  );
};

export default ReflectionAnimation;
